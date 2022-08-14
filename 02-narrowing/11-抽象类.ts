(function () {
    /**
     * abstract 抽象类
     * 抽象类和其他类的区别不大 不能同于创建对象
     * 抽象类 是专门用来被继承的类
     */
    abstract class per {
        name: string;
        constructor(name: string) {
            this.name = name
        }
        /**
         * 定义一个抽象方法
         * 抽象方法使用 abstract , 没有方法体
         * 抽象方法只能定义在抽象类中, 并且必须在子类中对方法进行重写
         */
        abstract sayhello(): void;
    }
    class dog extends per {
        age: number;
        constructor(name: string, age: number) {
            // 在 子类中写了构造函数, 在子类构造函数中必须对父类的构造函数进行调用
            super(name)
            this.age = age
        }
        sayhello() {
            //  super 代表当前方法的父类
            // super.hello()
            console.log('小明你好');

        }
    }
    class cat extends per {
        sayhello() {
            console.log('小红你好');
        }
    }

    const newDog = new dog('小明', 18)
    const newCat = new cat('小明')
    newDog.sayhello()
    newCat.sayhello()
    console.log(newDog)
})()