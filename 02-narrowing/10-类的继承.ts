(function () {
    class per {
        name: string;
        constructor(name: string) {
            this.name = name
        }

        hello() {
            console.log('你好')
        }
    }
    class dog extends per {
        age: number;
        constructor(name: string, age: number) {
            // 在 子类中写了构造函数, 在子类构造函数中必须对父类的构造函数进行调用
            super(name)
            this.age = age
        }
        hello() {
            //  super 代表当前方法的父类
            // super.hello()
            console.log('小明你好');

        }
    }

    const newDog = new dog('小明', 18)
    newDog.hello()
    console.log(newDog)
})()