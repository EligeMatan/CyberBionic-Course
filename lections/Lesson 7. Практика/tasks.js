// Пользователь вводит в текстовое поле время в часах (например 19)
// Если время больше 17, то выводится сообщение "Добрый вечер".
// В любых других случаях "Добрый день".
{
    let hour = +prompt('Введіть годину:');
    if (hour) {
        if (hour > 17) {
            console.log('Доброго вечора');
        } else if (hour <= 17 && hour > 0) {
            console.log('Добрий день');
        }
    }
}

// Через prompt - пользователь вводит 3 числа.
// Из этих чисел найти максимальное и выдать сообщение какое из них найбольшее.
// Учесть вариант равенства чисел.
{
    let a = +prompt('Введіть число a');
    let b = +prompt('Введіть число b');
    let c = +prompt('Введіть число c');

    if (a && b && c) {
        console.log('Максимальне з цих чисел: ', Math.max(a, b, c));
    }
}

// Написать код который будет считать все числа с массива 
// Показать результат суммы
// let arr = [0, 22, 11, 6, 4, 8, 55];
{
    let arr = [0, 22, 11, 6, 4, 8, 55];
    let sum = arr.reduce((acc, item) => acc + item);
    console.log(sum);
}
// Написать функцию, получающую на вход 2 числа.
// Если оба числа четные, функция возвращает произведение чисел.
// Если оба нечетные, функция возвращает сумму.
// Если одно из чисел четное, а второе нечетное функция возвращает это нечетное число.
{
    let func = (a, b) => {
        if (a == 1 || b == 1) return;

        if (a % 2 === 0 && b % 2 === 0) {
            return a * b;
        } else if (a % 2 !== 0 && b % 2 !== 0) {
            return a + b;
        } else {
            return (a % 2 === 0) ? b : a;
        }
    }

    console.log(func(1, 2))
}

// let arr = [0, 22, 11, 6, 4, 8, 55];
// let arr2 = [1, 5, 1005];
// Написать код который проверяет длину массивов и выводит сообщение в котором элементов больше.
// Если массивы равны вывести отдельное сообщение.
{
    let arr = [0, 22, 11, 6, 4, 8, 55];
    let arr2 = [1, 5, 1005];

    if (arr || arr2) {
        if (arr.length > arr2.length) {
            console.log('Масив arr більший за масив arr2');
        } else if (arr.length < arr2.length) {
            console.log('Масив arr менший за масив arr2');
        } else {
            console.log('Масиви однакові за довжиною');
        }
    }
}

// Написать Функцию которая принимает три параметра(имя, фамилия, возраст)
// и возвращает такую строку :
// Это "фамилия" "имя" ему "возраст" лет.
{
    function func(firstName, lastName, age) {
        return `Це ${lastName} ${firstName}, йому ${age} рочків.`;
    }

    console.log(func('Askania', 'Nova', 30));
}

// Есть массив , в котором числа например:
// const arr1 = [2, 4, 6, 8];
// const arr2 = [2, 4, 6, 7, 8];
// Написать логику которая проверяет на наличие нечетных чисел.
// В случае если нет нечетного числа console.log(false);
// В случае если есть нечетное число console.log(true);
{
    const arr1 = [2, 4, 6, 8];
    const arr2 = [2, 4, 6, 7, 8];

    isOddExist = (arr) => {
        let result = false;

        arr.forEach(item => {
            if(item % 2 !== 0) {
                result = true;
                return;
            }
        })
        return result;
    }

    console.log(isOddExist(arr1));
    console.log(isOddExist(arr2));
}

// Создать ФУНКЦИЮ которая будет принимать в параметр Массив.
// Функция должна вернуть сумму всех чисел массива.
// Результат работы функии записать в переменную.
// Значение переменной вывести в консоль.
{
    let ex = [2, 5, 2, 7, 9, 0, 1];

    let func = (arr) => {
        return arr.reduce((acc, item) => acc + item);
    }

    let tmp = func(ex);
    console.log(tmp);
}
// Создать обьект который будет иметь два свойства.
// Добавить метод который будет показывать значения свойств в консоли.
// Вызвать метод.
{
    let obj = {
        id: 1,
        name: 'prop',

        methd: function() {
            keys = Object.keys(this);

            keys.forEach(item => {

                console.log(`${item} -> ${this[item]}`);
            })
        }
    }
    obj.methd();
}
// Создать функцию , которая будет возвращать обьект с тремя свойствами: Name, LastName, Age.
// Вывести значения свойств в консоли.
{
    let func = (Name, LastName, Age) => {
        return { Name, LastName, Age };
    }

    console.log(func('Askania', 'Nova', 30));
}
// Создать функцию и присвоить ее методу обьектов, 
// которая будет показывать Имя Фамилию обьекта к которому мы обращаемся.
{
    function func() {
        console.log('firstName = ', this.firstName, '  lastName = ', this.lastName);
    }

    let obj = {
        firstName: 'Askania',
        lastName: 'Nova',
        methd: func
    }

    obj.methd();
}