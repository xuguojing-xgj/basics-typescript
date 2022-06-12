//  联合类型
function printId(id: number | string) {
    if (typeof id == 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}
printId('200')
printId(190)

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        console.log(x.join('and'));
    } else {
        console.log('welcome lone traveler' + x);
    }

}
welcomePeople('1')
welcomePeople(['2', '534f'])

function getFirstThree(a: number[] | string) {
    return console.log(a.slice(0, 3));

}
getFirstThree('1234567')
getFirstThree([1, 23., 34, 32.45, 413.3])