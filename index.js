// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
let a = Math.round(Math.random()*101);
let b = Math.round(Math.random()*101);

if (a > b){
    console.log("Max = "+ a + " (a)");
    console.log("Min = "+ b + " (b)");
} else if ( a < b){
    console.log("Max = "+ b + " (b)");
    console.log("Min = "+ a + " (a)");
} else {
    console.log(a + " = " + b);
}

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
let apartmentNumber = prompt("Яка квартира вам потрібна?(від 1 до 90)")

if (apartmentNumber >= 1 && apartmentNumber < 21){
    console.log("Йдіть у перший під'їзд.");
} else if (apartmentNumber >= 21 && apartmentNumber < 49){
    console.log("Йдіть у другий під'їзд.");
} else if (apartmentNumber >= 49 && apartmentNumber < 91){
    console.log("Йдіть у третій під'їзд.");
} else {
    console.log("В нас немає такої квартири.");
}

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
 let number = prompt("Введіть число. Правильне - 10.");

if (number === '10'){
    console.log("Вірно.");
} else {
    console.log("Невірно.");
}
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
let  temperature = prompt("Яка сьогодня температура?");

if (temperature >= 10 && temperature < 23){
    console.log("Ми йдемо ВЧИТИСЯ.");
} else {
    console.log("Cидимо вдома і вчимося ОНЛАЙН.");
}

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
let value = prompt("Оберіть свій номер від 1 до 5");

switch (value){
    case '1':
        console.log("Ви виграли АВТО!");
        break;
    case '2':
        console.log("Ви виграли МОТО!");
        break;
    case '3':
        console.log("Ви виграли ТЕЛЕФОН!");
        break;
    case '4':
        console.log("Ви виграли ВЕЛОСИПЕД!");
        break;
    case '5':
        console.log("Ви виграли НАВУШНИКИ!");
        break;
    default:
        console.log("Число не вірне, ви програли.")
}