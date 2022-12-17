class MyPromise<T> {
    // 定义 resolve 和 reject 函数类型
    private resolveFn: (value?: T | PromiseLike<T>) => void;
    private rejectFn: (reason?: any) => void;
    // 构造函数接收执行器函数作为参数
    constructor(
        executor: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void
    ) {
        // 将 resolve 和 reject 函数保存起来
        this.resolveFn = () => { };
        this.rejectFn = () => { };

        try {
            executor(this.resolve.bind(this), this.reject.bind(this));
        } catch (e) {
            this.reject(e);
        }
    }

    private resolve(value?: T | PromiseLike<T>) {
        this.resolveFn(value);
    }

    private reject(reason?: any) {
        this.rejectFn(reason);
    }
    // then 方法接收两个回调函数作为参数，分别在执行器函数 resolve 和 reject 时调用
    then<TResult1 = T, TResult2 = never>(
        onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
        onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): MyPromise<TResult1 | TResult2> {
        return new MyPromise<TResult1 | TResult2>((resolve, reject) => {
            // 根据执行器函数的执行结果调用不同的回调函数
            this.resolveFn = (value?: T | PromiseLike<T>) => {
                try {
                    if (onfulfilled) {
                        // 调用 onFulfilled 并将其返回值作为下一个 Promise 的结果
                        const result = onfulfilled(value as T);
                        resolve(result);
                    } else {
                        resolve(value as TResult1 | TResult2 | PromiseLike<TResult1 | TResult2> | undefined);
                    }
                } catch (e) {
                    // 如果 onFulfilled 抛出异常，则将异常作为下一个 Promise 的拒绝原因
                    reject(e);
                }
            };

            this.rejectFn = (reason?: any) => {
                try {
                    if (onrejected) {
                        // 调用 onRejected 并将其返回值作为下一个 Promise 的结果
                        const result = onrejected(reason);
                        resolve(result);
                    } else {
                        reject(reason);
                    }
                } catch (e) {
                    // 如果 onRejected 抛出异常，则将异常作为下一个 Promise 的拒绝原因
                    reject(e);
                }
            };
        });
    }
}

