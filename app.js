// var words = ["программа"];
// var word = words[Math.floor(Math.random() * words.length)];
// var answerArray = [];
// for (var i = 0; i < word.length; i++) {
//     answerArray[i]= " _ " ;  
// }

// var remainningLetters = word.length;

// while (remainningLetters > 0) {
//     alert(answerArray.join(" "));
//     var guess = prompt("Угадайте будкву или нажмите Отмена для выхода из игры");
//     if (guess === null) {
//         break;
//     } else if (guess.length !== 1) {
//         alert("Пожалуйста, введите одну букву !!!");
//     } else {
        
//         for (var j = 0; j < word.length; j++ ) {
//             if (word[j] === guess.toLowerCase()) {
//                 answerArray[j] = guess.toLowerCase();
//                 remainningLetters--;
//             }
//         }
//     }
// } 
// alert(answerArray.join(" "));
// alert("Отлично !! Было загаданно слово " + word);


// // нижняя часть для проверки из книги

// var words = ["программа", "макака", "прекрасный", "оладушек"];
//     // Выбираем случайное слово
// var word = words[Math.floor(Math.random() * words.length)];
//     // Создаем итоговый массив
// var answerArray = [];
// for (var i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
//     }
//     var remainingLetters = word.length;
//     // Игровой цикл
//     while (remainingLetters > 0) {
//             // Показываем состояние игры
//         alert(answerArray.join(" "));
//         var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
//         if (guess === null) {
//         // Выходим из игрового цикла
//             break;
//         } else if (guess.length !== 1) {
//             alert("Пожалуйста, введите одиночную букву.");
//         } else {
//             // Обновляем состояние игры
//             for (var j = 0; j < word.length; j++) {
//                 if (word[j] === guess) {
//                     answerArray[j] = guess;
//                     remainingLetters--;
//                 }
//             }
//         }
//     }
        
//     alert(answerArray.join(" "));
//     alert("Отлично! Было загадано слово " + word);
        
            

// var outFirstFunction = function () {
//     console.log("Привет , мир!!!");
// };

// outFirstFunction();

// var sayHelloTo = function(name) {
//     console.log("Привет, " + name + "!");
// };

// sayHelloTo("Пидор сука");



// var cats = function (howManyTimes){
//     for (var i = 0; i < howManyTimes; i++)
//     console.log(i + " =^.^= ");
// };
// cats(100);

// var printMultipleTimes = function (howManyTimes, whatToDraw) {
//     for (var i = 0; i < howManyTimes; i++){
//         console.log(i + whatToDraw);
//     }
// };

// printMultipleTimes(2, " (>_<) ");



// var double = function (number) {
//     return number * 2;
// };

// double(3);


// var randomWords = ["dd", "ss", "aa"];
// var pickRandomWord = function (words) {
//     return words[Math.floor(Math.random() * words.length)];
// };
// pickRandomWord(randomWords);

// var randonWords = ["aa", "ss", "dd"];
// var pinkRandomWords = function (words) {
//      return words[Math.floor(Math.random() * words.length)];
// };
// pinkRandomWords(randonWords);


// var pickRandomWord = function (words) {
//     return words[Math.floor(Math.random() * words.length)];
// };

// var generateRandomInsult = function() {
//     var randomBodyParts = ["глаз", "нос", "череп"];
//     var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
//     var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
//     var randomString = "У тебя " + pickRandomWord(randomBodyParts) + " словно " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords)+ "!!!";
//     return randomString;
// };

// generateRandomInsult();


// var fifthLetter = function (name) {
//     if (name.length < 5){
//         return alert("Извени у тебя в имени меньше чем 5 букв");
//     }
//     return alert("Пятая буква твоего имени: " + name[4] + ".");
// };

// fifthLetter(prompt("Введите свое имя"));

// var medalForScore = function (score) {
//     if (score < 3){
//         return "Бронзовая";
//     }
//     if (score < 7){
//         return "Серебренная";
//     }
//     if (score < 10){
//         return "Золотая";
//     }
// };
// medalForScore(6);

// var add = function(a, b){
//     return a + b;
// };
// add(9824, 777);
 
// var multiply = function (a, b){
//     return a * b;
// };

// multiply(add(9824, 777), 36325);

// var a = [1, 2, 3];
// var b = [1, 2, 3];

// for(var i = 0; i < a.length; i++ ){
//     console.log(a[i]);
// }

// for(var j = 0; j < b.length; j++){
//     console.log(b[j]);
// }

// function  areArraysSame (a, b){
//     if (a.length !== b.length){
//         return false;
//     }
//     for(var i = 0; i < a.length; i++ ){
//         if (a[i] !== b[i]) {
//             return false;
//         }
//     }
//     return true;
    
// }


// areArraysSame([1, 2, 3, 5], [1, 2, 3]);




// var words = ["программа"];
// var word = words[Math.floor(Math.random() * words.length)];
// var answerArray = [];
// for (var i = 0; i < word.length; i++) {
//     answerArray[i]= " _ " ;  
// }

// var remainningLetters = word.length;

// while (remainningLetters > 0) {
//     alert(answerArray.join(" "));
//     var guess = prompt("Угадайте будкву или нажмите Отмена для выхода из игры");
//     if (guess === null) {
//         break;
//     } else if (guess.length !== 1) {
//         alert("Пожалуйста, введите одну букву !!!");
//     } else {
        
//         for (var j = 0; j < word.length; j++ ) {
//             if (word[j] === guess.toLowerCase()) {
//                 answerArray[j] = guess.toLowerCase();
//                 remainningLetters--;
//             }
//         }
//     }
// } 
// alert(answerArray.join(" "));
// alert("Отлично !! Было загаданно слово " + word);



// var pickWord = function () {
//     // Возвращает случайно выбранное слово
//    };
//    var setupAnswerArray = function (word) {
//     // Возвращает итоговый массив для заданного слова word
//    };
//    var showPlayerProgress = function (answerArray) {
//     // С помощью alert отображает текущее состояние игры
//    };
//    var getGuess = function () {
//     // Запрашивает ответ игрока с помощью prompt
//    };
//    var updateGameState = function (guess, word, answerArray) {
//     // Обновляет answerArray согласно ответу игрока (guess)
//     // возвращает число, обозначающее, сколько раз буква guess
//     // встречается в слове, чтобы можно было обновить значение
//     // remainingLetters
//    };
//    var showAnswerAndCongratulatePlayer = function (answerArray) {
//     // С помощью alert показывает игроку отгаданное слово 
//     // и поздравляет его с победой
// };

// for(x = 3; x < 10000; x = x * 3){
//     console.log(x);
// }

                                                  // Задание на прохождение в кино

// var age = 11;
// var accompanied = true;
// var ageCheck = age >= 12;
// ageCheck || accompanied;


                                                  // Дразнилки c рандомными словами 

// var words = ["хуй", "жопа", "сиська", "пирог"];
// var randomWord = words[Math.floor(Math.random() * words.length)];
// randomWord;

                                                    // Продвинутая дразнилка 

// var partOfTheBodys = ["нога", "рука", "голова"];
// var adjectives = ["ужасное", "ванючие", "дряхлое"];
// var animalsBodyPart = ["хвост", "лапа", "морда"];
// var animals = ["жирафа", "собаки", "кошки"];

// var randomPartOfTheBody = partOfTheBodys[Math.floor(Math.random() * partOfTheBodys.length)];
// var randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
// var randomAnimalBodyPart = animalsBodyPart[Math.floor(Math.random()* animalsBodyPart.length)];
// var randomAnimal = animals[Math.floor(Math.random() * animals.length)];

// var randomInsult = ["У тебя" + randomPartOfTheBody + "еще более" + randomAdjective + "чем" + randomAnimalBodyPart + "у" + randomAnimal];
// randomInsult;

                                                      // С join()

// var partOfTheBodys = ["нога", "рука", "голова"];
// var adjectives = ["ужасное", "ванючие", "дряхлое"];
// var animalsBodyPart = ["хвост", "лапа", "морда"];
// var animals = ["жирафа", "собаки", "кошки"];

// var randomPartOfTheBody = partOfTheBodys[Math.floor(Math.random() * partOfTheBodys.length)];
// var randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
// var randomAnimalBodyPart = animalsBodyPart[Math.floor(Math.random()* animalsBodyPart.length)];
// var randomAnimal = animals[Math.floor(Math.random() * animals.length)];

// var randomInsult = ["У тебя", randomPartOfTheBody, "еще более", randomAdjective, "чем", randomAnimalBodyPart, "у" ,randomAnimal].join(" ");
// randomInsult;

// var number = [3, 2, 1]
// number.join(" ")

                                                // Добавление в обьект

// var scores = {
//   Максим: 10,
//   Роман: 5,
// }
// scores.Максим +=5

                                                    // условие if 

// var name = "Николай"
// console.log("Привет" + name)
// if (name.length > 6) {
//   console.log("Ну и длинное у вас имя молодой человек")
// }

// var name = "Максим"
// if (name === "Максим") {
//   console.log("Привет мне ")
// } else if ( name === "Анна") {
//   console.log("Привет мама")
// } else if (name === "Вадим") {
//   console.log("Привет папа")
// } else {
//   console.log("Привет незнакомец")
// }

                                                        // ЦИКЛ while


// var sheepCounted = 0
// while (sheepCounted < 10) {
//   console.log("Посчитанно овец " + sheepCounted + " !" );
//   sheepCounted++;
// }
// console.log("xppppppppppp пс")

                                            // ЦИКЛ for

// for (var sheepCounted = 0; sheepCounted < 10; sheepCounted++){
//   console.log("Посчитанно овец: " + sheepCounted + " !")
// }
// console.log("xppppppppppp")

// var  timesToSayHello = 3
// for (var i = 0; i <  timesToSayHello; i++) {
//   console.log("Привет !")
// }

                                        // ПЕРЕБОР МАССИВА С ПОМОЩЬЮ ЦИКЛА for




// var animals = ["лев", "фламинго", "белый медведь", "удав"];
// for (var i = 0; i < animals.length; i++) {
//  console.log("В этом зоопарке есть " + animals[i] + ".");
// }


// var name = "Максим";
// for (var i = 0; i < name.length; i++) {
//   console.log("В моем имени есть буква " + name[i])
// }

// for (var x = 2; x < 10000; x *= 2) {
//   console.log(x)
// }

// for (var x = 3; x < 10000; x *= 3) {
//   console.log(x)
// }

                                  // #1. Прекрасные животные
                                  // Напишите цикл for, который изменяет массив животных, делая 
                                  // их прекрасными! Например, если есть следующий массив:
// var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
// for ( var i = 0; i < animals.length; i++) {
//   console.log(animals[i] + " - прекрасное животное")
// }

                                  // #2. Генератор случайных строк
                                  // Напишите генератор случайных строк. Для этого вам понадобится строка со всеми буквами алфавита:

// var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
// var randomString = ""
// while (randomString.length < 6) {
//   var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
//   randomString += randomLetter
// }
// console.log(randomString);

                                                        // Замена букв на цифры

// var input = "javascript is awesome";
// var output = "";
// for (var i = 0; i < input.length; i++) {
//   if (input[i] == "a"){
//     output += "4"
//   } else if (input[i] == "e") {
//     output += 3
//   } else if (input[i] == "i") {
//     output += 1
//   } else if (input[i] == "o") {
//     output += 0
//   } else {
//     output += input[i]
//   }
// }
// console.log(output)



                                                      // Выведите столбец чисел от 1 до 100.

// var number = 1
// while (number <= 100) {
//   console.log(number)
//   number++
// }                                                    
// for (var i = 1; i <= 100; i++) {
//   console.log(i)
// }

                                                          // Выведите столбец чисел от 11 до 33.
// var number = 11
// while (number <= 33) {
//   console.log(number)
//   number++
// }       
// for ( var i = 11; i <= 33; i++) {
//   console.log(i)
// }        
                                                        // Выведите столбец четных чисел в промежутке от 0 до 100.          
// for (var i = 0; i <= 100; i += 2) {
//   console.log(i)
// }       
// var number = 0
// while ( number < 100 ) {
//   console.log(number)
//   number += 2
// }                                                                      
                                                        // С помощью цикла найдите сумму чисел от 1 до 100.
// var n = 0
// for (var i = 0; i <= 100; i++ ) {
//   n += i
// }    
// console.log(n)           
                                  // Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.  
// var numbers = [1, 2, 3, 4, 5]   
// var number = ""   
// for (var i = 0; i < numbers.length; i++){
//   number +=numbers[i]
// }  
// console.log(number)        
                    // Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result. 
// var result = 0
// for (var i = 0; i <= 5; i++ ) {
//   n += i
// }
// console.log(result);

// Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10

// var numbers = [2, 5, 9, 15, 0, 4]
// var number = [];
// for (var i = 0; i < numbers.length; i++) {
//   if ( numbers[i] > 3 && numbers[i] < 10) number.push(numbers[i])
// }
// console.log(number)



                                                                          // ИГРА ВИСИЛИЦА
// const likeCats = confirm("Тебе нравяься кошки")
// if (likeCats) {
//   alert("Мне тоже нравяьтся ")
// } else {
//   alert("Ну не чего страного кисики тебя любят")
// }

                                                                  // Игра
      
// const popa = prompr("Жопа")            
// console.log(popa)          

// var words = [
//   "программа",
//   ];
//   var numberOfInputLetters = 0;

//   var word = words[Math.floor(Math.random() * words.length)];

//   var answerArray = [];
//   for (var i = 0; i < word.length; i++) {
//   answerArray[i] = "_";
//   }
//   var remainingLetters = word.length;

//   while (remainingLetters > 0 && numberOfInputLetters < 10 ) {
//     alert(answerArray.join(" "));
//     var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
//     numberOfInputLetters++;
//     if (guess === null) {
//       break;
//     } else if (guess.length !== 1) {
//       alert("Пожалуйста, введите одиночную букву.");
//     } else {

//       for (var j = 0; j < word.length; j++) {
//           if (word[j] === guess.toLowerCase()) {
//           answerArray[j] = guess.toLowerCase();
//           remainingLetters--;
//           }
//         }
//     }

//   }

//   alert(answerArray.join(" "));
//   alert("Отлично! Было загадано слово " + word);
                                                                                  // ФУНКЦИИ
// const hello = function () {
//   console.log("ПРивет мир сука")
// }     
// hello()                 


// const hello = function(name) {
//   console.log("Привет " + name + "!")
// }
// hello("Максим")

                                                                                      // ФУНКЦИЯ С АРГУМЕНТОМ

// var drawCats = function(cat) {
//   for (var i = 0; i < cat; i++) {
//     console.log(i + " =^.^= ")
//   }
// }
// drawCats(5);

                                                                                  // НЕСКОЛЬКО АРГУМЕНТОВ

// const drawCats = function(number, cat) {
//   for (var i = 0; i < number; i++) {
//     console.log(i + cat)
//   }
// }
// drawCats(10, " =^.^= ")

                                                                                        // ВОЗВРАТ ФУНКЦИИ
// var duoble = function (number) {
//   return number * 2;
// } ;    
// console.log(duoble(3));    

                                    // ВЫБОР РАНДОМНОГО СЛОВА С ПОМОЩЬЮ ФУНКУЦИИ

// const words = ["носорог", "лилипут", "жираф", "собака"];
// const randomWord = function (word) {
//   return word[Math.floor(Math.random() * word.length)]
// }

                          // ДРАЗНИЛКА С ПОМОЩЬЮ ФУНКЦИЙ
// const randomWord = function (word) {
//   return word[Math.floor(Math.random() * word.length)]
// }  
// const generateRandomInsult = function () {
//   const randomBodyParts = ["глаз", "нос", "череп"];
//   const randomAdjectives = ["вонючая", "унылая", "дурацкая"];
//   const randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"]; 
//   const randomInsult = "У тебя " + randomWord(randomBodyParts) + " словно " + randomWord(randomAdjectives) + " " + randomWord(randomWords) + " !!!"
//   return randomInsult;
// }
// console.log(generateRandomInsult());

                            // Ранний выход из функции по return

                            
// const fifthLetter = function (name) {
//   if (name.length < 5) {
//     return;
//   }
//   return "Твоя 5 буква твоего имени " + name[4] + " !!!"
// }
// console.log(fifthLetter("максим"));



                                    // Многократное использование return вместо конструкции if... else

// const medalForScore = function (score) {
//   if ( score < 3) {
//     return "Бронза";
//   }
//   if ( score < 7) {
//     return "Серебро";
//   }
//     return "Золото";
// }

// console.log(medalForScore(9) + " Ты молодец ");



                                  // 1. Математические расчеты и функции
                                  // Создайте две функции, add и multiply; пусть каждая принимает 
                                  // по два аргумента. Функция add должна складывать аргументы 
                                  // и возвращать результат, а функция multiply — перемножать 
                                  // аргументы.
// function add (a ,b) {
//   return a + b;
// }
// function multiply (c, d) {
//   return c * d;
// }

// console.log(add(multiply(36325, 9824), 777))

                // 2. Совпадают ли массивы?
                // Напишите функцию areArraysSame, которая принимает два 
                // массива с числами в качестве аргументов. Она должна возвращать true, 
                // если эти массивы одинаковые (то есть содержат одни 
                // и те же числа в одном и том же порядке), или false, 
                // если маcсивы различаются. Убедитесь, что ваша функция работает правильно, запустив такой код:



// function areArraysSame (a, b) {
//   if (a.length !== b.length) {
//     return false;
//   }
//   for (var i = 0; i < a.length; i++)
//   if (a[i] !== b[i]) {
//     return false;
//   }
//   return true;
// }

// console.log(areArraysSame([1, 2, 3,], [2, 2, 3]))

                          // Меняем текст заголовка через DOM

// const headingElement = document.getElementById("main-heading")
// console.log(headingElement.innerHTML)
// const newHeadingText = prompt("Введите новый заголовок")
// headingElement.innerHTML = newHeadingText

                                      // Меняем текст заголовка с помощью jQuery



// var newHeadingText = prompt("Введите новый заголовок:");
// $("#main-heading").text("newHeadingText");

                                  // Создание новых элементов через jQuery


// $("body").append("<p> Это новый параграф </p> ")

              // Также append можно использовать в цикле for для добавления нескольких элементов:



              // for (let i = 0; i < 3; i++) {
//   let hobby = prompt("Назовите 3 своих любимых хобби");
//   $("body").append("<p>" + hobby + "</p>");
// }

                          // Анимация элементов средствами jQuery

// $("h1").fadeOut(3000);

                            // Цепной вызов и анимация на jQuery



// $("h1").text("Этот текст скоро исчезнет").fadeOut(3000)

 
                // Можно запустить несколько анимаций одного и того же элемента.

  // $("h1").fadeOut(3000).fadeIn(2000)




                 // ПЛАВНОЕ ИСЧЕЗНОВЕНИЕ В ВЕРХ  И ПОЯВЛЕНИЕ В НИХ

// $("h1").slideUp(2000).slideDown(2000)
// $("h1").hide().fadeIn(2000)


                              // #1. Перечислите своих друзей (и сделайте их лучшими!)
                              // Создайте массив с именами нескольких друзей. В цикле for
                              // создайте для каждого имени по одному элементу p и добавьте 
                              // эти элементы в конец <body>, вызывая jQuery-метод append.
                              // С помощью jQuery измените текст элемента h1, чтобы вместо 
                              // "Привет, мир!" там было "Мои друзья". Используйте метод 
                              // hide и метод fadeIn, чтобы имена плавно возникали на экране.
                              // Теперь измените созданные вами элементы p, добавив после 
                              // каждого имени слово "лучший!". Подсказка: если найти сразу 
                              // все элементы p с помощью $("p"), метод append можно вызвать 
                              // для них всех разом.

// let friends = ["Сергей", "Слава", "Двалет", "Роман"]
// for (let i = 0; i < friends.length; i++) {
//   $("body").append("<p>" + friends[i] + "</p>")
// }
// let p = "лучшие"
// $("h1").text("Мои друзья")
// $("p").hide().fadeIn(3000).append(" лучший")


                                // #2. Мигающий заголовок
                                // Как с помощью fadeOut и fadeIn сделать так, чтобы заголовок 
                                // мигнул пять раз с интервалом в секунду? Как сделать это в цикле 
                                // for? А теперь измените цикл, чтобы заголовок появлялся 
                                // и исчезал в первый раз за секунду, потом за две, потом за три 
                                // и т. д.

// let friends = ["Сергей", "Слава", "Двалет", "Роман"]
// for (let i = 0; i < friends.length; i++) {
//   $("body").append("<p>" + friends[i] + "</p>")
// }
// $("h1").text("Мои друзья")
// $("p").hide().fadeIn(3000).append(" лучший")   
// for (let y = 0; y < 1; y++) {
//   $("h1").fadeOut(500).fadeIn(500)
//   $("h1").fadeOut(1000).fadeIn(1000)
//   $("h1").fadeOut(1500).fadeIn(1500)
//   $("h1").fadeOut(2000).fadeIn(2000)
//   $("h1").fadeOut(2500).fadeIn(2500)
//   console.log(y)
// }

                              // #3. Отложенная анимация
                              // Для задержки анимации можно воспользоваться методом delay. 
                              // С помощью delay, fadeOut и fadeIn заставьте какой-нибудь 
                              // элемент плавно исчезнуть, а затем, через пять секунд, снова 
                              // проявиться.


// let friends = ["Антон", "Слава", "Жека", "Роман"]
// for (let i = 0; i < friends.length; i++) {
//   $("body").append("<p>" + friends[i] + "</p>")
// }
// $("h1").text("Мои друзья")
// $("p").hide().fadeIn(3000).append(" лучший")   
// for (let y = 0; y < 1; y++) {
//   $("h1").fadeOut(500).fadeIn(500)
//   $("h1").fadeOut(1000).fadeIn(1000)
//   $("h1").fadeOut(1500).fadeIn(1500)
//   $("h1").fadeOut(2000).fadeIn(2000)
//   $("h1").fadeOut(2500).fadeIn(2500)
//   console.log(y)
// }

// $("h2").delay(5000).fadeOut(1000).fadeIn(1000)


                            // 4. Метод fadeTo()
                            // Поэкспериментируйте с методом fadeTo. Первый его аргумент — число миллисекунд, 
                            // как и у прочих методов анимации, 
                            // а второй — число от 0 до 1. Что произойдет,
                            //  если запустить следующий код?
// $("h3").fadeTo(5000, 0.1);                            


                                              // И Н Т Е РА К Т И В Н О Е 
                                              // ПРОГРАММИРОВАНИЕ


                                              // Отложенное выполнение кода и setTimeout

// function timeUp () {
//   alert("Время вышло!")
// };
// setTimeout(timeUp, 3000)
// setTimeout(timeUp, 5000)


                                                  // Отмена действия таймера

// function doHomeworkAlarm () {
//   alert("Эй. Пора дать в жопу");
// };
// const timeoutId = setTimeout(doHomeworkAlarm, 2000);
// clearTimeout(timeoutId)


                                            // Многократный запуск кода и setInterval


// let couter = 5;
// function printMessage () {
//   console.log("Ты смотришь в консоль уже " + couter + " сек");
//   couter += 5;
// };

// let intervalId = setInterval(printMessage, 5000);
// clearInterval(intervalId);     /* прекращает работу setInterval */



                                                  // Анимация элементов с помощью setInterval

// let leftOffset = 0;
// function moveHeading () {
//   $("#main-heading").offset( { left: leftOffset } )
//   leftOffset++
//   if ( leftOffset > 200) {
//     leftOffset = 0;
//   }
// }

// setInterval(moveHeading, 10)

                                                      // Реакция на клики

// function clickHandler (event) {
//   console.log("Клик " + event.pageX + " " + event.pageY);
// }
// $("h1").click(clickHandler)



                                    // Событие mousemove (перемещение мышки)

// $("html").mousemove(function (event) {
//   $("h1").offset( {
//     left: event.pageX,
//     top: event.pageY
//   })
// })   


                                // #1. Следом за кликами
                                // Измените последний пример с mousemove так, чтобы заголовок 
                                // следовал не за указателем мышки, а только за кликами: вы кликаете
                                //  в любом месте страницы, и заголовок перемещается туда.

// $("html").click(function (event) {
//   $("h1").offset( {
//     left: event.pageX,
//     top: event.pageY
//   })
// })   



                                        // #2. Создайте собственную анимацию
                                        // Используйте setInterval для анимации заголовка h1, двигая 
                                        // его по квадрату, вдоль краев страницы. Пусть он переместится 
                                        // на 200 пикселей вправо, на 200 пикселей вниз, 200 пикселей 
                                        // влево, 200 пикселей вверх, а затем начнет с начала. Подсказка: 
                                        // нужно запоминать текущее направление (вправо, вниз, влево 
                                        // или вверх), чтобы знать, увеличивать или уменьшать для заголовка
                                        //  отступы слева (left) и сверху (top). Кроме того, при 
                                        // достижении угла квадрата нужно будет менять направление.



// let leftOffset = 0;
// let topOffset = 0;

// function moveHeading () {
//   $("#main-heading").offset( { left: leftOffset, top: topOffset } )
//   if (leftOffset < 200 && topOffset <= 0) {
//     leftOffset++
//   } else if (leftOffset <= 200 && topOffset < 200) {
//     topOffset++
//   } else if(leftOffset > 0 & topOffset <= 200) {
//     leftOffset--
//   } else if (leftOffset <= 0 && topOffset > 0)  {
//     topOffset--
//   }
// }

// function moveHeading () {
// if (leftOffset < 200 && topOffset <= 0) {
//   $("h1").offset( { left: leftOffset++ } )
// } else if (leftOffset >= 200 && topOffset < 200 ) {
//   $("h1").offset( { top: topOffset++ } )
// } else if (leftOffset > 0 && topOffset >= 200) {
//   $("h1").offset( { left: leftOffset-- } )
// } else if (leftOffset <= 0 && topOffset > 0) {
//   $("h1").offset( { top: topOffset-- } )
// }
  
// }
// function moveHeading () {
//   $("#main-heading").offset( { left: leftOffset, top: topOffset } )
//   leftOffset++
//     if (leftOffset > 200 ) {
//       leftOffset = 0
//     }
// }
// function clickStop (size) {
//   return $("#main-heading").click(clearInterval(size))
// }
// let intervalId = setInterval(moveHeading, 10)
// clickStop(intervalId)


                                        // #3. Остановка анимации по клику
                                        // Доработайте упражнение #2: добавьте к двигающемуся элементу 
                                        // h1 обработчик клика, который останавливает анимацию. 
                                        // Подсказка: отменить запуск кода по интервалу можно функцией 
                                        // clearInterval.



                                                        // ПИШЕМ ИГРУ «НАЙДИ КЛАД!


                                                        // Получение случайных значений


// function getRandomNumber (size) {
//   return Math.floor(Math.random() * size);
// };

                                                        // Задаем координаты клада

// let width = 400;
// let height = 400;

// let target = {
//   x: getRandomNumber(width),
//   y: getRandomNumber(height)
// };

                                  // Вычисляем расстояние от клика до клада


// let getDistance = function (event, target) {
//   let diffX = event.offsetX - target.x;
//   let diffY = event.offsetY - target.y;
//   return Math.sqrt( ( diffX * diffX ) + ( diffY * diffY ) );
// };

  
                                                // Сообщаем игроку, насколько он близок к цели

// let getDistanceHit = function (distance) {
//   if (distance < 10) {
//     return "Обожжешься";
//   } else if (distance < 20) {
//     return "Очень горячо";
//   } else if (distance < 40) {
//     return "Горячо";
//   } else if (distance < 80) {
//     return "Тепло";
//   } else if (distance < 160) {
//     return "Холодно";
//   } else if (distance < 320) {
//     return "Очень холодно";
//   } else {
//     return "Замерзнешь ";
//   }
// };     


                                                    // УЗНАЕМ РАССТОЯНИЕ И ЧТО ВЫДАСТ <P></P>
// let distance = getDistance(event, target);
// let distanceHit = getDistanceHit(distance)
// $("#distance").text(distanceHit)

                                                    // Проверка на выигрыш



// if (distance < 8) {
//   alert("Молодец ты побудил! Сделанно кликов: " + clicks)
// }                                                   

                                                                  // Код игры

// // Получить случайное число от 0 до size-1                                                                  
// let getRandomNumber = function (size) {
//   return Math.floor(Math.random() * size);
// };
// // Вычислить расстояние от клика (event) до клада (target)
// let getDistance = function (event, target) {
//   let diffX = event.offsetX - target.x;
//   let diffY = event.offsetY - target.y;
//   return Math.sqrt( ( diffX * diffX ) + ( diffY * diffY ) )
// }
// // Получить для расстояния строку подсказки
// let getDistanceHit = function (distance) {
//   if (distance < 10) {
//     return "Обожжешься";
//   } else if (distance < 20) {
//     return "Очень горячо";
//   } else if (distance < 40) {
//     return "Горячо";
//   } else if (distance < 80) {
//     return "Тепло";
//   } else if (distance < 160) {
//     return "Холодно";
//   } else if (distance < 320) {
//     return "Очень холодно";
//   } else if (distance < 640) {
//     return "Очень-очень холодно";
//   } else {
//     return "Замерзнешь ";
//   }
// }; 
// // СОЗДАЕМ ПЕРЕМЕННЫЙ
// let width = 800;
// let height = 800;
// let clicks = 0;
// // СЛУЧАЙНАЯ ПОЗИЦИЯ КЛАДА
// let target = {
//   x: getRandomNumber(width),
//   y: getRandomNumber(height)
// };
// //  Добавляем элементу img обработчик клика
// $("#map").click(function (event) {
  
//   if (clicks < 30) {
//     clicks++
//   } else (
//     alert("Конец игры")
//   )
//   // Получаем расстояние от места клика до клада
//   let distance = getDistance(event, target);
//   // Преобразуем расстояние в подсказку
//   var distanceHint = getDistanceHit(distance);
//   // Записываем в элемент #distance новую подсказку
//   $("#distance").text(distanceHint);
//   if (distance < 8) {
//     alert("Молодец ты победил! Сделанно кликов: " + clicks);
//   };
// })


                                              // О Б Ъ Е К Т Н О  О Р И Е Н Т И Р О В А Н Н О Е ПРОГРАММИРОВАНИЕ
// let dog = {
//   name: "Попик",
//   legs: 4,
// }
// // Добавление в обьект

// dog.age = 6
// console.log(dog)
                                             


                                                  // Добавление к объектам новых методов


// let dog = {
//   name: "Попик",
//   legs: 4,
// };

// dog.bark = function () {
//   console.log("Гав - гав! Меня зовут " + this.name + " !")
// };
// console.log(dog.bark())


                                              // Используем один метод с разными объектами

// let speak = function () {
//   console.log( this.sound + "! Меня зовут " + this.name + "!")
// };

// let cat = {
//   sound: "Мяу",
//   name: "Кот - кит",
//   speak: speak
// }
// let dog = {
//   sound: "Гав",
//   name: "Доги",
//   speak: speak
// }
// console.log(dog.speak(), cat.speak())



                                                // Функция-конструктор Car

// let Car = function (x, y) {
//   this.x = x;
//   this.y = y;
// };


                                              // Вызов конструктора Car
// let Car = function (x, y) {
//   this.x = x;
//   this.y = y;
// };      

// let tesla = new Car (10, 20)
// console.log(tesla)


                                                              // Рисуем машины

// let Car = function (x, y) {
//   this.x = x;
//   this.y = y;
// }; 

// let drawCar = function (car) {
//   let carHtml = '<img src="https://www.larec-skazok.ru/upload/story_tag/big/068/d3/0a/9594728bc39aa24be94b319d21.png">';
//   let carElement = $(carHtml);
//   carElement.css({
//     position: 'absolute',
//     left: car.x ,
//     top: car.y
//   });

//   $("body").append(carElement)
// };

// let tesla = new Car(500, 600);
// let skoda = new Car(50, 100);
// drawCar(skoda)
// drawCar(tesla);


                                                // Настройка объектов через прототипы
                                                // Добавляем метод draw к прототипу Car



// let Car = function (x, y) {
//   this.x = x;
//   this.y = y;
// }; 

// Car.prototype.draw = function() {
//   let carHtml = '<img src="https://www.larec-skazok.ru/upload/story_tag/big/068/d3/0a/9594728bc39aa24be94b319d21.png">';
//   this.carElement = $(carHtml)
//   this.carElement.css({
//     position: 'absolute',
//     left: this.x ,
//     top: this.y
//   })
//   $("body").append(this.carElement)
// }
// let tesla = new Car(500, 600);
// let skoda = new Car(50, 100);
// tesla.draw();
// skoda.draw();


                                                          // Добавляем метод moveRight

// let Car = function (x, y) {
//   this.x = x;
//   this.y = y;
// }; 

// Car.prototype.draw = function() {
//   let carHtml = '<img src="https://www.larec-skazok.ru/upload/story_tag/big/068/d3/0a/9594728bc39aa24be94b319d21.png">';
//   this.carElement = $(carHtml)
//   this.carElement.css({
//     position: 'absolute',
//     left: this.x ,
//     top: this.y
//   })
//   $("body").append(this.carElement)
// }
// Car.prototype.moveRight = function () {
//   this.x += 1 ;

//   this.carElement.css({
//       position: 'absolute', 
//       left: this.x,
//       top: this.y
//     }
//   )
// };
// let tesla = new Car(500, 600);
// let skoda = new Car(50, 100);
// tesla.draw();
// skoda.draw();
// // а в коносе написать tesla.moveRight() и машина будет двигаться на 5 пикселей в право




                                              // Передвиньте вправо nissan. Сколько раз нужно вызвать moveRight для 
                                              // nissan, чтобы эта машина догнала tesla?
                                              // С помощью setInterval и moveRight анимируйте nissan, чтобы 
                                              // машина поехала от левой границы окна к правой.





// let Car = function (x, y) {
//   this.x = x;
//   this.y = y;
// }; 

// Car.prototype.draw = function() {
//   let carHtml = '<img src="https://www.larec-skazok.ru/upload/story_tag/big/068/d3/0a/9594728bc39aa24be94b319d21.png">';
//   this.carElement = $(carHtml)
//   this.carElement.css({
//     position: 'absolute',
//     left: this.x ,
//     top: this.y
//   })
//   $("body").append(this.carElement)
// }
// Car.prototype.moveRight = function () {
//   this.x += 1 ;

//   this.carElement.css({
//       position: 'absolute', 
//       left: this.x,
//       top: this.y
//     }
//   )
// };
// let tesla = new Car(500, 600);
// let skoda = new Car(50, 100);
// tesla.draw();
// skoda.draw();
// // а в коносе написать tesla.moveRight() и машина будет двигаться на 5 пикселей в право

// let moveSkoda = function () {
//   skoda.moveRight()
//   if ( skoda.x > 500) {
//     skoda.x = 0
//   }
// }

// let moveTesla = function () {
//   tesla.moveRight()
//   if (tesla.x > 500) {
//     tesla.x = 0
//   }
// };
// setInterval(moveTesla, 20)
// setInterval(moveSkoda, 10)





                                                  // Добавляем методы для движения влево, вверх и вниз


// let Car = function (x, y) {
//   this.x = x;
//   this.y = y;
// }; 

// Car.prototype.draw = function() {
//   let carHtml = '<img src="https://www.larec-skazok.ru/upload/story_tag/big/068/d3/0a/9594728bc39aa24be94b319d21.png">';
//   this.carElement = $(carHtml)
//   this.carElement.css({
//     position: 'absolute',
//     left: this.x ,
//     top: this.y
//   })
//   $("body").append(this.carElement)
// }
// Car.prototype.moveRight = function (speed) {
//   this.x += speed ;

//   this.carElement.css({
//       left: this.x,
//       top: this.y
//     }
//   )
// };
// Car.prototype.moveLeft = function (speed) {
//   this.x -= speed
//   this.carElement.css( {
//     left: this.x ,
//     top: this.y
//   } )
// };
// Car.prototype.moveUp = function (speed) {
//   this.y -= speed
//   this.carElement.css({
//     left: this.x,
//     top: this.y
//   })
// };
// Car.prototype.moveDown = function (speed) {
//   this.y += speed
//   this.carElement.css({
//     left: this.x,
//     top: this.y
//   })
// };
// let tesla = new Car(500, 600);
// let skoda = new Car(50, 100);
// let bmw = new Car(200, 700)
// let lada = new Car (800, 200)
// lada.draw()
// bmw.draw()
// tesla.draw();
// skoda.draw();
// // а в коносе написать tesla.moveRight() и машина будет двигаться на 5 пикселей в право
// let moveBmw = function () {
//   bmw.moveUp(5)
//   if (bmw.y <= 0) {
//     bmw.y = 700
//   }

// }
// let moveSkoda = function () {
//   skoda.moveRight(3)
//   if ( skoda.x > 500) {
//     skoda.x = 0
//   }
// }

// let moveTesla = function () {
//   tesla.moveLeft(10)
//   if (tesla.x <= 0) {
//     tesla.x = 500
//   }
// };
// let moveLada = function() {
//   lada.moveDown(6) 
//   if (lada.y > 700) {
//     lada.y = 200
//   }
// }
// setInterval(moveTesla, 20)
// setInterval(moveSkoda, 10)
// setInterval(moveBmw, 10)
// setInterval(moveLada, 10)


                                                                      // ГРАФИКА
                                                                    // ЭЛЕМЕНТ CANVAS

                                                                    // Рисование на «холсте»

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d")
// ctx.fillRect(0, 0, 10, 10)





                                                                    // Рисуем несколько квадратов
// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d")
// for (let i = 0; i < 8; i++) {
//   ctx.fillRect(i * 10, i * 10, 10, 10)
// }

                                                        // ПОПРОБУЙТЕ!
                                                        // Теперь, когда вы знаете, как рисовать на «холсте» прямоугольники 
                                                        // и квадраты, попробуйте изобразить этого 
                                                        // робота с помощью метода fillRect.
                                                        // Подсказка: вам нужно нарисовать шесть прямоугольников. 
                                                        // Голова — это квадрат со стороной 50 пикселей,
                                                        //  а ширина шеи, рук и ног — 10 пикселей.

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d")
// ctx.fillStyle = "red"
// ctx.fillRect(100, 20, 50, 50)     //глова
// ctx.fillRect(120, 70, 10, 20)     //шея
// ctx.fillRect(90, 90, 70, 70)      //тело
// ctx.fillRect(60, 90, 30, 10)      //левая рука
// ctx.fillRect(160, 90, 30, 10)     //правая рука
// ctx.fillRect(90, 160, 10, 30)     //левая нога
// ctx.fillRect(150, 160, 10, 30)    //правая нога



                                                                  // Выбор цвета

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d")
// ctx.fillStyle = "Red"
// ctx.fillRect(0, 0, 100, 100) 



                                      // выберите три цвета на свой вкус и нарисуйте 
                                      // три прямоугольника. Пусть каждый из них будет 50 пикселей в ширину 
                                      // и 100 пикселей в высоту, и пусть они располагаются сторона к стороне, без 
                                      // пробелов. 

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d")
// ctx.fillStyle = "Red";
// ctx.fillRect(0, 0, 50, 100)
// ctx.fillStyle = "black"
// ctx.fillRect(50, 0, 50, 100)
// ctx.fillStyle = "green"
// ctx.fillRect(100, 0, 50, 100)

                                                  // Рисование контуров прямоугольников


// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d")
// ctx.strokeStyle = "green"
// ctx.lineWidth = 5
// ctx.strokeRect(10, 10, 100, 20)


                                        // Рисование линий или путей

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// ctx.strokeStyle = "green";
// ctx.lineWidth = 4;
// ctx.beginPath();
// ctx.moveTo(10, 10);
// ctx.lineTo(60, 60);
// ctx.moveTo(60, 10);
// ctx.lineTo(10, 60);
// ctx.stroke();


                                                // ПОПРОБУЙТЕ!
                                                // Попробуйте нарисовать этого веселого человечка при помощи 
                                                // методов beginPath, moveTo, lineTo и stroke. Изобразить 
                                                // голову (это квадрат 20 × 20 пикселей с шириной линии 
                                                // 4 пикселя) можно, воспользовавшись методом strokeRect.
// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d")
// ctx.lineWidth = 4
// ctx.strokeRect(50, 10, 20, 20)    //голова
// ctx.beginPath()
// ctx.moveTo(60, 30)    //тело
// ctx.lineTo(60, 70)    //тело
// ctx.moveTo(60, 45)    //левая рука
// ctx.lineTo(40, 30)    //левая рука
// ctx.moveTo(60, 45)    //правая рука
// ctx.lineTo(80, 30)    //правая рука
// ctx.moveTo(60, 68)    //левая нога
// ctx.lineTo(40, 100)   //левая нога
// ctx.moveTo(60, 68)    //правая нога
// ctx.lineTo(80, 100)   //правая нога
// ctx.stroke()



                                              // Заливка путей цветом


// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d")
// ctx.fillStyle = "blue";
// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(100, 60);
// ctx.lineTo(130, 30);
// ctx.lineTo(160, 60);
// ctx.lineTo(160, 100);
// ctx.lineTo(100, 100);
// ctx.fill();
           


                                    // Рисование дуг и окружностей

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d")
// ctx.lineWidth = 2;
// ctx.strokeStyle = "Green";
// ctx.beginPath();
// ctx.arc(50, 50, 30, 0, Math.PI * 2, false);
// ctx.stroke();
// ctx.beginPath();
// ctx.arc(120, 50, 30, 0, Math.PI , false);
// ctx.stroke();
// ctx.beginPath();
// ctx.arc(180, 50, 30, 0, Math.PI / 2, false);
// ctx.stroke()



                                // Рисование нескольких окружностей с помощью функции



// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d")
// let circle = function (x, y, radius , color , bull) {
//   if (bull === true) {
//     ctx.fillStyle = color;
//     ctx.lineWidth = 4;
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0 , Math.PI * 2, false)
//     ctx.fill()
//   } else if (bull === false) {
//     ctx.strokeStyle = color;
//     ctx.lineWidth = 4;
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0 , Math.PI * 2, false)
//     ctx.stroke()
//   }
// }

// circle(100, 100, 60, "red", true);
// circle(100, 100, 50,"black", false);
// circle(100, 100, 40, "green", true);
// circle(100, 100, 30, "Orange", false);
// circle(100, 100, 20, "blue", true);
// circle(100, 100, 10, "Yellow" ,false);
// circle(100, 100, 5, "Purple", true);



                                        // нарисуйте с помощью измененной функции такого 
                                        // снеговика, используя как заполненные окружности, так 
                                        // и пустые.


// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d")
// let circle = function (x, y, radius , color , bull) {
//   if (bull === true) {
//     ctx.fillStyle = color;
//     ctx.lineWidth = 4;
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0 , Math.PI * 2, false)
//     ctx.fill()
//   } else if (bull === false) {
//     ctx.strokeStyle = color;
//     ctx.lineWidth = 4;
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0 , Math.PI * 2, false)
//     ctx.stroke()
//   }
// }

// circle( 100,  70, 40, "black", false);
// circle( 100,  165, 55, "black", false);
// circle( 86,  65, 7, "orange", true);
// circle( 114,  65, 7, "orange", true);
// circle( 100,  80, 7, "black", true);
// circle( 100,  135, 7, "black", true)
// circle( 100,  165, 7, "black", true);
// circle( 100,  195, 7, "black", true);



                                          // 1. Функция, рисующая снеговика
                                          // Создайте на основе вашего кода для рисования снеговика 
                                          // (см. с. 205) функцию drawSnowman, которая рисует снеговика 
                                          // в указанной позиции на «холсте», — так, чтобы в результате 
                                          // вызова:

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d")
// let circle = function (x, y, radius , color , bull) {
//   if (bull === true) {
//     ctx.fillStyle = color;
//     ctx.lineWidth = 4;
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0 , Math.PI * 2, false)
//     ctx.fill()
//   } else if (bull === false) {
//     ctx.strokeStyle = color;
//     ctx.lineWidth = 4;
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0 , Math.PI * 2, false)
//     ctx.stroke()
//   }
// }



// let drawSnowman = function (x ,y) {
 
//   circle(x + 100, y + 70, 40, "black", false);
//   circle(x + 100, y + 165, 55, "black", false);
//   circle(x + 86, y + 65, 7, "orange", true);
//   circle(x + 114, y + 65, 7, "orange", true);
//   circle(x + 100, y + 80, 7, "black", true);
//   circle(x + 100, y + 135, 7, "black", true);
//   circle(x + 100, y + 165, 7, "black", true);
//   circle(x + 100, y + 195, 7, "black", true);
// }

// drawSnowman(500, 50)
// drawSnowman(100, 100)
// drawSnowman(200, 10)


                                                    // #2. Рисование по массиву точек
                                                    // Напишите функцию drawPoints, которая принимает массив 
                                                    // с координатами точек:


// let points = [[50, 50], [50, 100], [100, 100], [100, 50], [50, 50]];
// const canvas = document.getElementById("canvas")
// const ctx = canvas.getContext("2d")
// let drawPoints = function (a) {
//   ctx.beginPath();
//   for (let i = 0; i < a.length; i++) {
//     console.log(a[i]) 
//     if (i == 0) {
//       ctx.moveTo(a[i][0], a[i][1])
//     } else {
//       ctx.lineTo(a[i][0], a[i][1])
//     } 
//   }
//   ctx.stroke();
// };
// drawPoints(points)
// var mysteryPoints = [[50, 50], [50, 100], [25, 120], [100, 50], 
// [70, 90], [100, 90], [70, 120]];

// drawPoints(mysteryPoints)

                                      // АНИМАЦИИ С ПОМОЩЬЮ CANVAS



// let canvas = document.getElementById("canvas")
// let ctx = canvas.getContext("2d")
// let position = 0

// setInterval(function () {
//   ctx.clearRect(0, 0, 500, 500);
//   ctx.fillRect(position, 0, 20, 20);
//   position++
//   if (position > 500) {
//     position = 0
//   }
// }, 10)

                                    // Изменение размера квадрата



// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// size = 0
// setInterval( function() {
//   ctx.clearRect(0 ,0, 200, 200);
//   ctx.fillRect(0, 0, size, size);
//   size++;
//   if (size > 200) {
//     size = 0
//   }
// }, 10)

                                    // Рисуем пчелу


// const canvas = document.getElementById("canvas")
// const ctx = canvas.getContext("2d")
// let x = 200;
// let y = 200;
// var circle = function (x, y, radius, fillCircle) {
//   ctx.beginPath()
//   ctx.arc(x, y, radius, 0, Math.PI * 2, false)
//   if (fillCircle === true) {
//     ctx.fill()
//   } else {
//     ctx.stroke()
//   }
// }
// let drawBee = function (x, y) {
//   ctx.lineWidth = 2;
//   ctx.strokeStyle = "black";
//   ctx.fillStyle = "gold";
//   circle(x, y, 8, true);
//   circle(x, y, 8, false);
//   circle(x - 5, y - 11, 5, false);
//   circle(x + 5, y - 11, 5, false);
//   circle(x - 2, y - 1, 2, false);
//   circle(x + 2, y - 1, 2, false);
// }
//  // Изменение позиции пчелы
// let update = function (coordinate) {
//   let offset = Math.random() * 4 - 2;
//   coordinate += offset;
//   if (coordinate > 500) {
//     coordinate = 500;
//   }
//   if (coordinate < 0) {
//     coordinate = 0 ;
//   }
//   return coordinate;
// }
// setInterval( function() {
//   ctx.clearRect(0, 0, 500, 500);
//   drawBee(x, y)
//   x = update(x)
//   y = update(y)
//   ctx.strokeRect(0, 0, 500, 500)
// }, 30)



                                        // Отскакивающий мяч


// // конструктор Ball
// let Ball = function () {
//   this.x = 250;
//   this.y = 250;
//   this.xSpeed = Math.random() * 10 - 5;
//   this.ySpeed = Math.random() * 10 - 5
// };
// // РИСУЕМ МЯЧ
// let circle = function (x ,y, radius, fillCircle) {
//   ctx.beginPath();
//   ctx.arc(x ,y , radius, 0, Math.PI * 2, false);
//   if (fillCircle) {
//     ctx.fill();
//   } else {
//     ctx.stroke()
//   }
// };
// Ball.prototype.draw = function () {
//   circle(this.x, this.y, 5, true)
// };
// // ПЕРЕМЕЖЕНИЕ МЯЧА
// Ball.prototype.move = function() {
//   this.x += this.xSpeed;
//   this.y += this.ySpeed;
// };
// // ОТСКОКИ МЯЧА
// Ball.prototype.checkCollision = function() {
//   if (this.x < 0 || this.x > 500) {
//     this.xSpeed = -this.xSpeed;
//   }
//   if (this.y < 0 || this.y > 500) {
//     this.ySpeed = -this.ySpeed
//   }
// };
// // АНИМАЦИЯ МЯЧА
// const startBall = function (start) {
//   start.draw()
//   start.move()
//   start.checkCollision()
// };
// const canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// let ball = new Ball();
// let futball = new Ball();
// setInterval(function () {
//   ctx.clearRect(0, 0, 500, 500)
//   startBall(ball)
//   startBall(futball)
//   ctx.strokeRect(0, 0, 500, 500)
// }, 10)



                        // У П РА В Л Е Н И Е А Н И М А Ц И Я М И  С К ЛАВИАТ УРЫ



// $("body").keydown(function (event) {
//   console.log(event.keyCode)
// })

                            // Перевод кодов в названия с помощью объекта


// const keyNames = {
//   13: "enter",
//   16: "shift",
//   18: "alt",
//   32: "spase",
//   37: "left",
//   38: "up",
//   39: "right",
//   40: "down"
// };
// $("body").keydown(function (event) {
//   console.log(keyNames[event.keyCode])
// })



                              //УПРАВЛЕНИЕ МЯЧОМ С КЛАВИАТУРЫ
// // Настройка «холста»
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// let width = canvas.width;
// let height = canvas.height;
// // Функция circle
// let circle = function (x, y, radius, fillCircle) {
//   ctx.beginPath();
//   ctx.arc(x, y, radius, 0, Math.PI * 2, false)
//   if (fillCircle) {
//     ctx.fill();
//   } else {
//     ctx.stroce();
//   }
// };
// // Создаем конструктор Ball
// let Ball = function () {
//   this.x = width / 2;
//   this.y = height / 2;
//   this.xSpeed = 5;
//   this.ySpeed = 0;
// }
// // Создаем метод move
// Ball.prototype.move = function () {
//   this.x += this.xSpeed;
//   this.y += this.ySpeed;
//   // осткок мяча
//   if (this.x < 0 || this.x > width) {
//     this.xSpeed = -this.xSpeed;
//   }
//   if (this.y < 0 || this.y > height) {
//     this.ySpeed = -this.ySpeed
//   }
//   // // проход поля
//   // if (this.x < 0) {
//   //   this.x = width;
//   // } else if (this.x > width) {
//   //   this.x = 0;
//   // }
//   // if (this.y < 0) {
//   //   this.y = height;
//   // } else if (this.y > height) {
//   //   this.y = 0;
//   // }
// };
// // Создаем метод draw
// Ball.prototype.draw = function () {
//   circle(this.x, this.y, 10, true)
// };
// // Создаем метод setDirection
// Ball.prototype.setDirection = function (direction) {
//   if (direction === "up") {
//     this.xSpeed = 0;
//     this.ySpeed = -5;
//   } else if (direction === "down") {
//     this.xSpeed = 0;
//     this.ySpeed = 5;
//   } else if (direction === "left") {
//     this.xSpeed = -5;
//     this.ySpeed = 0
//   } else if (direction === "right") {
//     this.xSpeed = 5;
//     this.ySpeed = 0
//   } else if (direction === "stop") {
//     this.xSpeed = 0;
//     this.ySpeed = 0;
//   }
// };
// // Реакция на нажатия клавиш
// let ball = new Ball();
// let keyActions = {
//   32: "stop",
//   37: "left",
//   38: "up",
//   39: "right",
//   40: "down"
// };
// $("body").keydown(function (event) {
//   var direction = keyActions[event.keyCode];
//   ball.setDirection(direction);
// })
// // Анимация мяча
// setInterval(function() {
//   ctx.clearRect(0, 0, width, height);
//   ball.draw()
//   ball.move()
//   ctx.strokeRect(0, 0, width, height)
// }, 30)



                                    // ПИШЕМ ИГРУ « ЗМЕЙКА »: ЧАСТЬ 1

// Использование setInterval для анимации в игре. Так будет выглядеть setInterval в конце игры 
// let intervalId = setInterval(function() {
  // ctx.clearRect(0, 0, width, height);
  // drawScore();
  // snake.move();
  // snake.draw();
  // apple.draw();
  // drawBorder();
// }, 100);


                                    // Начинаем писать игру для игры вид будет 400х400 поменяю в html
// // Определяем переменные canvas, ctx, width и height
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// let width = canvas.width;
// let height = canvas.height;
// // Делим «холст» на ячейки
// let blockSize = 10;
// let widthInBlocks = width / blockSize;
// let heightInBlocks = height / blockSize;
// // Переменная score
// let score = 0;
// // Рисуем рамку
// let drawBorder = function () {
//   ctx.fillStyle = "gray"
//   ctx.fillRect(0, 0, width, blockSize)
//   ctx.fillRect(0, height - blockSize, width, blockSize);
//   ctx.fillRect(0, 0, blockSize, height)
//   ctx.fillRect(width - blockSize, 0, blockSize, height)
// }
// drawBorder();
// // Пишем функцию drawScore
// let drawScore = function () {
//   ctx.font = "20px Courier"
//   ctx.fillStyle = "black"
//   ctx.textAlign = "left"
//   ctx.textBaseline = "top"
//   ctx.fillText("Счет: " + score, blockSize, blockSize)
// }
// drawScore()
// // Конец игры
// let gameOver = function () {
//   // clearInterval(intervalId)
//   ctx.font = "60px Courier"
//   ctx.fillStyle = "black"
//   ctx.textAlign = "center"
//   ctx.textBaseline = "middle"
//   ctx.fillText("Конец игры", width / 2, height / 2)
// }
// // Создаем конструктор Block создание объекта на поле
// let Block = function (col, row) {
//   this.col = col;
//   this.row = row;
// }
// // Добавляем метод drawSquare змея
// Block.prototype.drawSquare = function (color) {
//   let x = this.col * blockSize;
//   let y = this.row * blockSize;
//   ctx.fillStyle = color;
//   ctx.fillRect(x ,y, blockSize, blockSize)
// }


// // Добавляем метод drawCircle
// Block.prototype.drawCircle = function (color) {
//   let centerX = this.col * blockSize + blockSize / 2
//   let centerY = this.row * blockSize + blockSize / 2
//   ctx.fillStyle = color
//   circle(centerX, centerY, blockSize / 2, true)
// }
// // функция для создания окружности
// let circle = function (x, y, radius, fillCircle) {
//   ctx.beginPath()
//   ctx.arc(x, y, radius, 0, Math.PI * 2, false)
//   if (fillCircle) {
//     ctx.fill()
//   } else {
//     ctx.stroke()
//   }
// }



// // Добавляем способ equal
// Block.prototype.equal = function (otherBlock) {
//   return this.col === otherBlock.col && this.row === otherBlock.row;
// };
// // СОЗДАЕМ ЗМЕЙКУ 
// var Snake = function () {
//   this.segments = [
//     new Block(7, 5),
//     new Block(6, 5),
//     new Block(5, 5)
//   ]
//   this.direction = "right"
//   this.nextDirection = "right"
// }
// // РИСУЕМ ЗМЕЙКУ
// Snake.prototype.draw = function () {
//   for (let i = 0; i < this.segments.length; i++) {
//     this.segments[i].drawSquare("blue")
//   }
// }

// // Перемещаем змейку
// // Добавляем метод move
// Snake.prototype.move = function () {
//   let head = this.segments[0]
//   var newHead;
//   this.direction = this.nextDirection
//   if (this.direction === "right") {
//     newHead = new Block(head.col + 1, head.row)
//   } else if (this.direction === "down") {
//     newHead = new Block(head.col, head.row + 1)
//   } else if (this.direction === "left") {
//     newHead = new Block(head.col - 1, head.row)
//   } else if (this.direction ==="up") {
//     newHead = new Block(head.col, head.row - 1)
//   }
//   if (this.checkCollision(newHead)) {
//     gameOver();
//     return;
//   }
//   this.segments.unshift(newHead);
//   if (newHead.equal(apple.position)) {
//     score++
//     apple.move();
//   } else {
//     this.segments.pop()
//   }
// }
// // Добавляем метод checkCollision
// Snake.prototype.checkCollision = function (head) {
//   let leftCollision = (head.col === 0)
//   let topCollision = (head.row === 0)
//   let rightCollision = (head.col === widthInBlocks - 1)
//   let bottomCollision = (head.row === heightInBlocks - 1)
//   var wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;
//   var selfCollision = false;
//   for (var i = 0; i < this.segments.length; i++) {
//     if (head.equal(this.segments[i])) {
//       selfCollision = true;
//     }
//   }
//   return wallCollision || selfCollision;
// }
// // Управляем змейкой с клавиатуры
// // Обработчик события keydown
// let directions = {
//   37: "left",
//   38: "up",
//   39: "right",
//   40: "down"
// };
// $("body").keydown(function(event) {
//   let newDirection = directions[event.keyCode];
//   if (newDirection !== undefined) {
//     snake.setDirection(newDirection)
//   };
// });
// // Создаем метод setDirection
// Snake.prototype.setDirection = function (newDirection) {
//    if (this.direction === "up" && newDirection === "down") {
//     return;
//    } else if (this.direction === "right" && newDirection === "left") {
//     return;
//    } else if (this.direction === "down" && newDirection === "up") {
//     return;
//    } else if (this.direction === "left" && newDirection === "right") {
//     return;
//    }
//    this.nextDirection = newDirection;
//   };
// // Создаем яблоко
// // Пишем конструктор Apple
// var Apple = function() {
//   this.position = new Block(10,10)
// }
// // Рисуем яблоко
// Apple.prototype.draw = function () {
//   this.position.drawCircle("LimeGreen");
// };
// // Перемещаем яблоко
// Apple.prototype.move = function () {
//   var randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
//   var randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
//   this.position = new Block(randomCol, randomRow);
// };
// var apple = new Apple();
// apple.move();
// apple.draw();
                                                                    // КОД ИГРЫ

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
// Получаем ширину и высоту элемента canvas
var width = canvas.width;
var height = canvas.height;
// Вычисляем ширину и высоту в ячейках
var blockSize = 10;
var widthInBlocks = width / blockSize;
var heightInBlocks = height / blockSize;
// Устанавливаем счет 0
var score = 0;

// Рисуем рамку
let drawBorder = function () {
  ctx.fillStyle = "gray"
  ctx.fillRect(0, 0, width, blockSize);
  ctx.fillRect(0, height - blockSize, width, blockSize);
  ctx.fillRect(0, 0, blockSize, height);
  ctx.fillRect(width - blockSize, 0, blockSize, height);
}
// Выводим счет игры в левом верхнем углу
var drawScore = function () {
  ctx.font = "20px Courier";
  ctx.fillStyle = "Black";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Счет: " + score, blockSize, blockSize);
 };
 // Отменяем действие setInterval и печатаем сообщение «Конец игры»
var gameOver = function () {
  clearInterval(intervalId);
  ctx.font = "60px Courier";
  ctx.fillStyle = "Black";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Конец игры", width / 2, height / 2);
 };
 // Рисуем окружность (используя функцию из главы 14)
var circle = function (x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
  ctx.fill();
  } else {
  ctx.stroke();
  }
 };
 // Задаем конструктор Block (ячейка)
  var Block = function (col, row) {
  this.col = col;
  this.row = row;
 };
 // Рисуем квадрат в позиции ячейки
 Block.prototype.drawSquare = function (color) {
  var x = this.col * blockSize;
  var y = this.row * blockSize;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, blockSize, blockSize);
 };
 // Рисуем круг в позиции ячейки
Block.prototype.drawCircle = function (color) {
  var centerX = this.col * blockSize + blockSize / 2;
  var centerY = this.row * blockSize + blockSize / 2;
  ctx.fillStyle = color;
  circle(centerX, centerY, blockSize / 2, true);
};
// Проверяем, находится ли эта ячейка в той же позиции, что и ячейка
// otherBlock
Block.prototype.equal = function (otherBlock) {
  return this.col === otherBlock.col && this.row === otherBlock.row;
};
 // Задаем конструктор Snake (змейка)
var Snake = function () {
  this.segments = [
  new Block(7, 5),
  new Block(6, 5),
  new Block(5, 5)
  ];
  this.direction = "right";
  this.nextDirection = "right";
};
 // Рисуем квадратик для каждого сегмента тела змейки
 Snake.prototype.draw = function () {
  for (var i = 0; i < this.segments.length; i++) {
  this.segments[i].drawSquare("Blue");
  }
};
Snake.prototype.move = function () {
  var head = this.segments[0];
  var newHead;
  this.direction = this.nextDirection;
  if (this.direction === "right") {
    newHead = new Block(head.col + 1, head.row);
  } else if (this.direction === "down") {
    newHead = new Block(head.col, head.row + 1);
  } else if (this.direction === "left") {
    newHead = new Block(head.col - 1, head.row);
  } else if (this.direction === "up") {
    newHead = new Block(head.col, head.row - 1);
  }
  if (this.checkCollision(newHead)) {
    gameOver();
    return;
  }
  this.segments.unshift(newHead);
  if (newHead.equal(apple.position)) {
    score++;
    apple.move();
  } else {
    this.segments.pop();
  }
}; 
// Проверяем, не столкнулась ли змейка со стеной или собственным
// телом
Snake.prototype.checkCollision = function (head) {
  var leftCollision = (head.col === 0);
  var topCollision = (head.row === 0);
  var rightCollision = (head.col === widthInBlocks - 1);
  var bottomCollision = (head.row === heightInBlocks - 1);
  var wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;
  var selfCollision = false;
  
  for (var i = 0; i < this.segments.length; i++) {
  if (head.equal(this.segments[i])) {
  selfCollision = true;
  }
  }
  return wallCollision || selfCollision;
 };
 // Задаем следующее направление движения змейки на основе нажатой
 // клавиши
 Snake.prototype.setDirection = function (newDirection) {
  if (this.direction === "up" && newDirection === "down") {
  return;
  } else if (this.direction === "right" && newDirection === "left") {
  return;
  } else if (this.direction === "down" && newDirection === "up") {
  return;
  } else if (this.direction === "left" && newDirection === "right") {
  return;
  }
  this.nextDirection = newDirection;
 };
 // Задаем конструктор Apple (яблоко)
  var Apple = function () {
  this.position = new Block(10, 10);
 };
 // Рисуем кружок в позиции яблока
Apple.prototype.draw = function () {
  this.position.drawCircle("LimeGreen");
 };
 // Перемещаем яблоко в случайную позицию
 Apple.prototype.move = function () {
 var randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
 var randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
  this.position = new Block(randomCol, randomRow);
 };
 // Создаем объект-змейку и объект-яблоко
  var snake = new Snake();
 var apple = new Apple();
 // Запускаем функцию анимации через setInterval
 var intervalId = setInterval(function () {
  ctx.clearRect(0, 0, width, height);
  drawScore();
  snake.move();
  snake.draw();
  apple.draw();
  drawBorder();
 }, 1);
 // Преобразуем коды клавиш в направления
  var directions = {
  37: "left",
  38: "up",
  39: "right",
  40: "down"
 };
 // Задаем обработчик события keydown (клавиши-стрелки)
 $("body").keydown(function (event) {
  var newDirection = directions[event.keyCode];
  if (newDirection !== undefined) {
  snake.setDirection(newDirection);
  }
 });