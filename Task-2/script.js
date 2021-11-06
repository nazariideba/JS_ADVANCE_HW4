class MyString {
    reverse(value) {
        return value.split('').reverse().join('');
    }
    ucFirst(value) {
        return value.slice(0, 1).toUpperCase() + value.slice(1)
    }
    ucWords(value) {
        let arr = value.split(' ');
        let newArr = arr.map(function(val) {
           return val.slice(0, 1).toUpperCase() + val.slice(1)
        })
        return newArr.join(' ');
    }
}

let str = new MyString();
console.log(str.reverse('IVAN'));
console.log(str.ucFirst('arsenal'));
console.log(str.ucWords('arsenal arsenal arsenal'));