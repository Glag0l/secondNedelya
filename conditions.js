// задание 1
const userAge = 20;

/*
  напиши ниже условие, которое выведет в консоль текст "ты пацан" 
  если userAge меньше 35
*/
const youMen = (userAge) => {
    if (userAge < 35){
    return 'ты пацан'
    }
}

console.log(youMen(userAge))


//задание 2
const isAdmin = false;

/* 
  напиши ниже условие, которое выведет в консоль текст "доступ запрещен", 
  если значение константы isAdmin ложно
*/
const welcome = (realPassword) =>{
    return realPassword === password
}

//задание 3
const password = "sherlock";
const realPassword = "holmes";
console.log(welcome(realPassword))


/* 
   напиши ниже условие, которое выведет в консоль текст "правильный пароль" 
   только в том случае, если значения констант password и realPassword совпадают.
*/   
const welcome = (realPassword) => {
    if(realPassword === password) {
        return 'правильный пароль'
    }
}


// задание 4
const myAge = "20";

/*
  напиши ниже условие, которое выведет в консоль текст "возраст указан верно" 
  только в том случае, если ТИПОМ переменной myAge является number.
  Тебе понадобится оператор typeof: https://learn.javascript.ru/types#type-typeof
*/
const age = (myAge) =>{
    if(typeof(myAge) === 'number')
    return 'возраст указан верно'
}

// задание 5
const x = 2.7;
const y = -6;
/*
  напиши ниже условие, которое выведет в консоль "икс меньше игрик" только 
  в том случае, если значение переменной x меньше, чем значение переменной y
*/
const mozg = () => {
    if(x < y) {
        return x - y
    }
}