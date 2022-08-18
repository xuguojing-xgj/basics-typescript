// keyof 用于获取类型中的所有键
// 并且返回类型是联合类型

type User = {
    name: string,
    id: number
}

type U1 = User["id"] // number
type U2 = User["name"] // string
type U3 = User[keyof User] // string | number

type newUser = keyof User
