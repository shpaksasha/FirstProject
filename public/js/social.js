//КОД В КОНСОЛЕ
var products = ['хлеб', 'сыр', 'творог', 'сметана', 'молоко', 'колбаса', 'яйцо'];
console.log(products);
var  prodlist = Array('хлеб', 'сыр', 'творог',[1, 34, 456], 'сметана', 'молоко', 'колбаса', 'яйцо');
products[1] = 'твердый сыр';
console.log(prodlist);
console.log(products[2]);
console.log(prodlist[3][1]);

/*var countries = ['Україна', 'Польша', 'Чехія', 'Словакія','Англія'],
    popul = [45, 36, 25, 30, 50];
var elem = document.getElementsByClassName('count')[0],
    br = ' мил.чел.<br>',
    uk = countries[0]+' - '+popul[0]+br,
    pl = countries[1]+' - '+popul[1]+br,
    ch = countries[2]+' - '+popul[2]+br,
    sl = countries[3]+' - '+popul[3]+br,
    an = countries[4]+' - '+popul[4]+br;
elem.innerHTML = (uk+pl+ch+sl+an);*/
var  crash = ['тип', 'цвет', cartype = ['грузовая','легковая'], 'приборы','скорость'];
var  nov = crash.push('колесо');//добавить элемент в конец
cartype.unshift('внедорожник','фургон');//добавить элемент в начало
crash.pop();//удалить элемент
cartype.shift();//удалить элемент
/*crash.splice(3,1, 'руль','фара');//для добавления и удаления элементов*/
/*cartype.splice(0,3, 'легковая','фургон','грузовая');//чтобы поменять местами*/

var block1 =['gmail','login','parol'];
var block2 =['name','passvord','email'];
var newmas =crash.slice(0,2);

console.log(crash);
console.log(crash.length);
console.log(crash.length - 1);
console.log('nov= '+ nov);
console.log(cartype.length);
console.log(crash.toString());
console.log(crash.join("/"));
/*console.log(crash.reverse());//переворачивает масив*/

console.log(crash.concat(block1, block2));
console.log(newmas);

var bus =['Honda','мотоцикл','красный', 2018, 12000, false];
console.log(bus);
var bus_69 = {'brand':'Honda','type': 'спортивный','color': 'красный','год':2018};
console.log(bus_69);
console.log(bus_69.length);
console.log(bus_69['type']);
console.log(bus_69.color);
/*bus_69.color = 'фиолетовый';*/