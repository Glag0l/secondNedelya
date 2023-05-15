// задание 1
const userAge = 20;

/*
  напиши ниже условие, которое выведет в консоль текст "ты пацан" 
  если userAge меньше 35, иначе выведет текст "не по-пацански"
*/
const imMen = (age) => {
    if(age < 35) {
        return 'ты пацан'
    }
    if(age > 35) {
        return 'не по пацански'
    }
}
console.log(imMen(40))

//задание 2
const isUser = false;

/* 
  напиши ниже условие, которое выведет в консоль текст "привет, юзер", если 
  значение константы isTrue истинно, иначе нужно вывести "не пользователь ты мне"
*/
const pnh = (isUser) =>{
    if(isUser === true) {
        return 'привет юзер'
    }
    if(isUser === false){
        return 'Алик отводи ребят'
    }
}


//задание 3
const password = "sherlock";
const realPassword = "holmes";

/* 
   напиши ниже условие, которое выведет в консоль текст "правильный пароль" 
   только в том случае, если значения констант password и realPassword совпадают,
   иначе необходимо вывести "неверный пароль".
*/   
const welcome = (realPassword) =>{
    if(realPassword === password) {
        return 'правильный пароль'
    }
    if(realPassword !== password) {
        return 'не верный пароль'
    }
}


// задание 4 (со звездочкой)
const email = "admin@intocode.ru";

/*
  напиши ниже условие, которое выведет в консоль текст "неверный эмайл" если
  в значении переменной email нет символа "@", иначе выведи "ты зареган"
  Тебе понадобится метод indexOf: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
*/
if(email.indexOf('@') === -1) {
    console.log('неверный эмайл')

}
else {
    console.log('ты зареган')
}

// задание 5
const x = 2.7;
const y = -6;
/*
  напиши ниже условие, которое выведет в консоль значение переменной x, если
  оно больше значения переменной y, иначе выведи значение переменной y
*/
if(x > y) {
    console.log(x)
}
else {
    console.log(y)
}