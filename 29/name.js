// переменные
const firstName = 'Елизавета';
const lastName = 'Лиженкина';
const middleName = 'Матвеевна';
const birthYear = 2003;
const direction = 'Прикладная информатика';

const result1 = 'Имя: ' + firstName + '\nФамилия: ' + lastName + '\nОтчество: ' + 
middleName + '\nГод рождения: ' + birthYear + '\nНаправление: ' + direction; //конкатенация через +
const result2 = `Имя: ${firstName}  
Фамилия: ${lastName} 
Отчество: ${middleName}, 
Год рождения: ${birthYear}, 
Направление: ${direction}`; //конкатенация через бэктики

// Вывод в консоль
console.log(result1);
console.log(result2);
