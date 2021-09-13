//ES5作法
function greet(name) {
    alert('YO' + name + '.')
}
greet(CHARLEY)
// YO CHARLEY .

//ES6字串模板
function greet(name, days) {
    alert(`YO,${name}. It's been ${days * 24} hours`)
    console.log(`YO,${name}. ${(days < 7) ? '' : 'Long time no see'}`)
}
greet(CHARLEY, 3)
// YO CHARLEY .It's been 72hours
//可以放判斷 假如小於7 就YO CHARLEY else YO CHARLEY Long time no see