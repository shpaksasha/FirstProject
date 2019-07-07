function myFunction() {
    var
        link = prompt('Введите адрес сайта'),
        text = prompt('Введите название сайта'),
        result = 'Ваша ссылка: <a href="https://'+ link +'">'+ text +'</a>';
    console.log(result);
}
function find() {
    var /*grn = 'грн',*/
        number = prompt('Введите число'),
        percent = prompt('Введите процент, который хотите узнать от числа '+ number),
        result = number * (percent/100);
    alert(percent+'%'+'от числа '+ number +' состовляет '+ result)
}
var countries = ['Україна', 'Польша', 'Чехія', 'Словакія','Англія'],
    popul = [45, 36, 25, 30, 50];
var elem = document.getElementsByTagName('div')[0],
    br = ' мил.чел.<br>',
    uk = countries[0]+' - '+popul[0]+br,
    pl = countries[1]+' - '+popul[1]+br,
    ch = countries[2]+' - '+popul[2]+br,
    sl = countries[3]+' - '+popul[3]+br,
    an = countries[4]+' - '+popul[4]+br;
elem.innerHTML = (uk+pl+ch+sl+an);

var bool;//булевские значения применяються для определения правильности или неправильности (true, false)
var x = 10;
var y = 15;
bool = x<y;
console.log(bool);

function pach() {
    var numb =document.getElementById('ipt').value;
alert(numb*numb);
}
function plus() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);//для ввода целого числа

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 + num2;
    /*console.log(result);*/
    document.getElementById('out').innerHTML = ('Результат: ' + result);
}
function out() {
    var p;
    p = document.getElementById('test');
    //p.innerHTML = 'Hello Aleks';
    //p.innerHTML += ' <b>Задание №1</b>';
    /*p.innerText += ' <i>Курсив</i>' выводит текст вместе с тегами <i>*/
    p.insertAdjacentHTML('beforeBegin',' Workout');
    //beforeBegin - перед открываюшим тегом
    //p.insertAdjacentHTML('afterBegin','Workout ');
    //afterBegin - после открываюшего тега и перед содержимым
    //p.insertAdjacentHTML('afterEnd',' Hi');
    //p.insertAdjacentHTML('beforeEnd',' Hi');
    /*p.outerHTML = '<div class="vov">JS</div>'; заменяет тег полностью*/

}
/*var a, b;
a = 43;
b = 54;
if (a<b){//if - если
    alert('Равенство верное');
}
else if (a==b){
    alert('Числа равны');
}
else{//else - еще
    alert('Ощибка !!! Равенство не верное');
}*/
function more() {
    var n, p;
    n = document.getElementById('nu1').value;
    p = document.getElementById('exit');
    n = parseInt(n);//для фильтровки чисел, оставляет только целые числа
if (n==100){
    p.innerHTML = 'Чиcло равно 100';
}
else if (n<100){
    p.innerHTML = 'Число меньше 100';
}
else {// или else if (n>100)
    p.innerHTML = 'Число больше 100';
    }
}
//Игра "угадай число"
var  prNum, tempOut;
// число между 1 и 10
prNum = Math.floor((Math.random()*10) + 1);
// tempOut = document.getElementById('temp');
// tempOut.innerHTML = prNum;
console.log(prNum);
function hu() {
    var num, out;

    num = document.getElementById('mynum').value;
    out = document.getElementById('result');
    if (num == prNum){
        out.innerHTML = 'Поздравляю, Вы угадали';
    }
    else if (num > prNum){
        out.innerHTML = 'Число больше, чем нужно';
    }
    else {
        out.innerHTML = 'Чсло меньше, чем нужно';
    }
}
/*function cycles() {//Цикл for
    var p;
    p = document.getElementById('com');
    // i++ тоже самое что i=i+1
    for (var i = 0; i <= 100; i = i + 3) {
        p.innerHTML += i+' ';
    }
}*/
function cycles() {//Цикл while
    var p, i;
    p = document.getElementById('com');
    i=1;
    while (i<=50){
        p.innerHTML += i+' ';
        i++;
    }
}
var ma = [397, 250, 3, 'Ariana Grande', 'Selena Gomes'];
ma[5] = 'Micheal Bolton';
ma[6] = 132;
console.log(ma);
/*for ( var i=0; i<ma.length; i++){
    document.getElementById('mas').innerHTML += ma[i]+'<br>';
}*/

function masOut(){
    var p = document.getElementById('mas'),
        str = '';
    for ( var i=0; i<ma.length; i++){
        str += i+' - '+ma[i]+'<br>';
    }
    p.innerHTML = str;
}
masOut();
function p1() {
    var t1 = document.getElementById('t1').value;
    ma.push(t1);
    masOut();
}
function p2() {
    ma.pop();
    masOut();
}