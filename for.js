
var name1 = ['tamim', 'shamim', 'tushary', 'sabbir']

var item = name1[0];
//console.log(item.length)

for (var i = 1; i <= name1.length; i++) {

    let element = name1[i];

    // console.log(element.length);

    if (element.length > item.length) {

        item = element;
    }


}


console.log('Largest name length is: ', item);