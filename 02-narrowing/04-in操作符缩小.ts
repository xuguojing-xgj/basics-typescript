type Fish = { swim: () => void }
type bird = { fly: () => void }
type human = {
    swim?: () => void, fly?: () => void
}
function move(admin: Fish | bird | human) {
    // if( value in 表达式中)
    if ('swim' in admin) {
        return (admin as Fish).swim()
    }
    return (admin as bird).fly()
}