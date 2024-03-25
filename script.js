//function myfunc(){
//    alert(document.getElementById("language").value);
//}

var countQues=0;
var lang;
var score=0;

var HTMLquestions=[

    {
        question: "HTML - это какой тип языка ?",
        choices: ["Язык сценариев","Язык разметки","Язык программирования","Сетевой протокол"],
        answer: 2
    
    },
    
    {
        question: "HTML использует:",
        choices: ["Пользовательские теги","Предварительно заданные теги","Исправлены теги, определенные языком","Теги только для ссылок"],
        answer: 3
    
    },
    {
        question: "Год, в котором впервые был предложен HTML.",
        choices: ["1990","1980","2000","1995"],
        answer: 1
    
    },
    {
        question: "Помимо тега <b>, какой другой тег выделяет текст жирным шрифтом?",
        choices: ["fat","strong","black","emp"],
        answer: 2
    
    },
    {/*5*/
        question: "Как вы можете составить маркированный список с цифрами? ",
        choices: ["dl","ol","list","ul"],
        answer: 2
    
    },
    {
        question: "Какой тег используется для отображения изображения на HTML-странице?",
        choices: ["picture","image","pic","img"],
        answer: 4
    
    }, 
    {
        question: "Веб-страницы в формате HTML могут быть прочитаны и отрисованы с помощью.",
        choices: ["Compiler","Server","Web Browser","Interpreter"],
        answer: 3
    
    }, 
    {
        question: "Что из перечисленного ниже не является браузером?",
        choices: ["Microsofts Bing","Netscape Navigator","Mozilla Firefox","Opera"],
        answer: 1
    
    }, 
    {
        question: "Какой тип скобок заключен в HTML-теги?",
        choices: ["Curly","Round","Squart","Angle"],
        answer: 4
    
    }, 
    {/*10*/
        question: "Теги, которые непосредственно не отображаются на странице, записаны в...?",
        choices: ["head","title","body","html"],
        answer: 1
    
    }                
];

var CSSquestions=[

    {
        question: "Если мы хотим определить стиль для уникального элемента, то какой css-селектор мы будем использовать ?",
        choices: ["Id","text","class","name"],
        answer: 1
    
    }, 
    {
        question: "Если мы не хотим разрешать плавающий div в левой части элемента, какое свойство css мы будем использовать ?",
        choices: ["margin","clear","float","padding"],
        answer: 2
    
    },
    {
        question: "Предположим, мы хотим расположить пять nos. разделителей так, чтобы DIV4 располагался над DIV1. Теперь, какое свойство css мы будем использовать для управления порядком стека ?",
        choices: ["d-inex","s-index","x-index","z-index"],
        answer: 4
    
    }, 
    {/*4*/
        question: "Можем ли мы выровнять элемент блока, установив левое и правое поля ?",
        choices: ["Да, мы можем","Невозможно","Зависит от браузера","Зависит от операционной системы"],
        answer: 2
    
    },
    {
        question: "Если мы хотим обернуть блок текста вокруг изображения, какое свойство css мы будем использовать ?",
        choices: ["wrap","push","float","align"],
        answer: 3
    
    },
    {/*6*/
        question: "Если мы хотим показать стрелку в качестве курсора, то какое значение мы будем использовать ?",
        choices: ["pointer","default","arrow","arr"],
        answer: 2
    
    }, 
    {
        question: "Если мы хотим использовать красивую зеленую пунктирную рамку вокруг изображения, какое свойство css мы будем использовать?",
        choices: ["border-color","border-decoration","border-style","border-line"],
        answer: 3
    
    },
    {/*8*/
        question: "Какое из следующих свойств мы будем использовать для отображения границы вокруг ячейки без какого-либо содержимого ?",
        choices: ["empty-cell","blank-cell","noncontent-cell","void-cell"],
        answer: 1
    
    }, 
    {
        question: "Какой должна быть ширина таблицы, чтобы ширина таблицы соответствовала текущей ширине окна браузера?",
        choices: ["640 pixels","100%","full-screen","1024px"],
        answer: 2
    
    },
    {
        question: "Как мы можем написать комментарий вместе с CSS-кодом ?",
        choices: ["/* a comment */","// a comment //","/ a comment /","<' a comment'>"],
        answer: 1
    
    }
                
];

var JSquestions=[

    {
        question: "Что из следующего верно в отношении соглашений об именовании переменных в JavaScript?",
        choices: ["Имена переменных JavaScript должны начинаться с буквы или символа подчеркивания.","Имена переменных JavaScript чувствительны к регистру.","Оба вышеперечисленных."," Ни один из вышеперечисленных."],
        answer: 3
    
    }, 
    {/*wscubetech*/
        question: " Какой из следующих объектов является объектом JavaScript на стороне сервера?",
        choices: ["Function","File","FilleUpload","Data"],
        answer: 2
    
    },
    {
        question: "Какая компания разработала JavaScript?",
        choices: ["Netscape", "Microsoft", "Oracle", "Google"],
        answer: 1
    
    }, 
    {
        question: "Как JavaScript хранит даты в объектах типа Data?",
        choices: ["Количество дней, прошедших с 1 января 1900 года","Количество секунд, прошедших с 1 января 1970 года","Количество миллисекунд, прошедших с 1 января 1970 года","Количество пикосекунд, прошедших с 1 января 1970 года"],
        answer: 3
    
    },
    {
        question: "Какие значения в JS являются ложными?",
        choices: ["null","undefined", "NaN", "false"],
        answer: 4
    
    },
    {
        question: "Какая ошибка существует в JavaScript?",
        choices: ["404","Ошибки выполнения", "403", "401"],
        answer: 2
    
    }, 
    {
        question: "Какое из следующих свойств является испорченным свойством объекта window в Java Script?",
        choices: ["Pathname","Protocol","Defaultststus","Host"],
        answer: 3
    
    },
    {
        question: "Какой атрибут необходимо изменить, чтобы сделать элементы невидимыми?",
        choices: ["visibilty","visible","invisible","None of the above"],
        answer: 1
    
    }, 
    {
        question: " Какое логическое значение operaТоры можно использовать в JavaScript?",
        choices: ["&&","||", "!", "все"],
        answer: 4
    
    },
    {
        question: "Каково альтернативное название для Javascript?",
        choices: ["LimeScript","ECMScript","Both of the above","ECMAScript"],
        answer: 4
    
    }
                
];

var PYquestions=[

    {
        question: "Каков результат работы следующей программы: print(Hello World'[::-1])",
        choices: ["dlroW olleH","Hello Worl","d","Error"],
        answer: 1
    
    }, 
    {
        question: "Учитывая функцию, которая не возвращает никакого значения, какое значение отображается при выполнении в оболочке?",
        choices: ["int","bool","void","None"],
        answer: 4
    
    },
    {
        question: "Какой модуль в Python поддерживает регулярные выражения?",
        choices: ["re","regex","pyregex","None of the above"],
        answer: 1
    
    }, 
    {
        question: "Каков результат следующей программы: (сложный вопрос.)  вывести (0.1 + 0.2 == 0.3) ",
        choices: ["True","False","Machine Dependent","Error"],
        answer: 2
    
    },
    {
        question: "Какое из следующих чисел не является комплексным?",
        choices: ["k = 2 + 3j","k = complex(2, 3)","k = 2 + 3l","k = 2 + 3J"],
        answer: 3
    
    },
    {
        question: "Чему соответствует оценка ~~~~~~5?",
        choices: ["+5","-11","+11","-5"],
        answer: 1
    
    }, 
    {
        question: "Учитывая строку s = “Welcome”, какой из приведенных ниже кодов неверен?",
        choices: ["print s[0]","print s.lower()","s[1] = ‘r’","print s.strip()"],
        answer: 3
    
    },
    {
        question: "________ - это простая, но неполная версия функции.",
        choices: ["Stub","Function","Функция, разработанная с использованием восходящего подхода","Функция, разработанная с использованием нисходящего подхода"],
        answer: 1
    
    }, 
    {
        question: "Чтобы запустить Python из командной строки, используйте команду ______",
        choices: ["execute python","go python","python","run python"],
        answer: 3
    
    },
    {
        question: "Что из приведенного ниже верно в отношении Python?",
        choices: ["Он поддерживает автоматическую сборку мусора.","Он может быть легко интегрирован с C, C++, COM, ActiveX, CORBA и Java","Оба вышеперечисленных", "Ничего из вышеперечисленного"],
        answer: 3
    
    }        
];

var Cquestions=[

    {
        question: "Язык Си был разработан в",
        choices: ["1970","1975","1980","1985"],
        answer: 1
    
    }, 
    {
        question: "Какое из них не является резервным ключевым словом в языке Си?",
        choices: ["auto","main","case","register"],
        answer: 2
    
    },
    {
        question: "Имя переменной C может начинаться с ____",
        choices: ["Число","Знак плюс","Подчеркивания","Звездочка"],
        answer: 3
    
    }, 
    {
        question: "Прототип функции означает _____",
        choices: ["Название функции","Вывод функции","Объявление функции","Ввод функции"],
        answer: 3
    
    },
    {
        question: "Назовите цикл, который выполняется хотя бы один раз.",
        choices: ["for","If","do-while","while"],
        answer: 3
    
    },
    {
        question: "Дальний указатель может получить доступ _____",
        choices: ["Одна ячейка памяти","Нет места в памяти","Все ячейки памяти","Первый и последний адрес памяти"],
        answer: 3
    
    }, 
    {
        question: "Указатель, указывающий на ячейку памяти переменной даже после удаления переменной, известен как _____",
        choices: ["far pointer","dangling pointer","null pointer","void pointer"],
        answer: 2
    
    },
    {
        question: "Вызывается неинициализированный указатель в C ___",
        choices: ["Constructor","dangling pointer","Wild Pointer","Destructor"],
        answer: 3
    
    }, 
    {
        question: "Вызывается указатель, который ни на что не указывает ____",
        choices: ["VOID Pointer","DANGLING Pointer","NULL Pointer","WILD Pointer"],
        answer: 3
    
    },
    {
        question: "Кто известен как отец языка Си?",
        choices: ["Digvijay","James A. Sosling","Dr. E. F. Codd","Dennis Ritchie"],
        answer: 4
    
    }         
];

var PHPquestions=[

    {
        question: "На какой язык программирования похож PHP?",
        choices: ["C","C#","Python","Java"],
        answer: 1
    
    }, 
    {
        question: "Время выполнения PHP-скрипта?",
        choices: ["60 секунд","30 секунд","120 секунд","20 секунд"],
        answer: 2
    
    },
    {
        question: "Как передать переменную по ссылке?",
        choices: ["$var1 += &$var2","$var1 = &var2","$var1 = &$var2","$var1 = $var2"],
        answer: 3
    
    }, 
    {
        question: "Какое время сеанса в PHP по умолчанию?",
        choices: ["1 минута","до закрытия вкладки","до закрытия браузера","1 час"],
        answer: 3
    
    },
    {
        question: "Язык программирования php нашел наиболее широкое применение в:",
        choices: ["Автоматизированном проектировании","Создании баз данных","Разработке web-приложений","Управлении базами данных"],
        answer: 3
    
    },
    {
        question: "Как правильно записать добавление 1 (единицы) к переменной $count?",
        choices: ["count=1","count=+1","count++","count++1"],
        answer: 3
    
    }, 
    {
        question: "С какого символа начинаются все переменные в php?",
        choices: ["<>","$","!","&"],
        answer: 2
    
    },
    {
        question: "В php файлы cookie задаются следующим образом:",
        choices: ["createcookie()","makecookie()","setcookie()","addcookie()"],
        answer: 3
    
    }, 
    {
        question: "В php суперглобальная переменная, содержащая информацию о местоположении скриптов, путях, заголовках – это:",
        choices: ["$_GET","$_POST","$_SERVER","$_GLOBALS"],
        answer: 3
    
    },
    {
        question: "Вызов функции из самой себя – это:",
        choices: ["Массив","Регрессия","Функция","Рекурсия"],
        answer: 4
    
    }         
];




window.addEventListener('load', function () {

//alert(questions.length);
document.getElementById("score").textContent="Счет : "+0;
document.querySelector(".view-results").style.display="none";
document.querySelector(".quiz").style.display="none";
document.querySelector(".final-result").style.display="none";


document.querySelectorAll(".test-js").forEach(el => {el.addEventListener("click",function(){
    document.querySelector("#wrapper").style.display="none";
    lang=document.getElementById("language").value+"questions";
    document.getElementById("ques-left").textContent="Вопрос : "+(countQues+1)+"/"+window[lang].length;

//    alert(window[lang].length);
    //window["anything"] will convert "anything" string to object because window is also an object
    document.querySelector(".quiz").style.display="block";
    
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
     for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/
    
//    window.location.href="#score";

})});


document.querySelector(".submit-answer").addEventListener("click",function(){
//     alert(window[lang][countQues].choices[window[lang][countQues].answer-1]);
//     alert(document.querySelector('input[name="options"]:checked').value);

    if(document.querySelector('input[name="options"]:checked').value===window[lang][countQues].choices[window[lang][countQues].answer-1]){
           
        score+=10;
        document.getElementById("score").textContent="Счет : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle correct'>"+"<span class='badge text-bg-success'>"+(countQues+1)+"</span>"+"</div>";
    
           
    }else{
    
        score-=5;
        document.getElementById("score").textContent="Счет : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle'>"+"<span class='badge text-bg-danger'>"+(countQues+1)+"</span>"+"</div>";
    };
    
    if (countQues<window[lang].length-1){
        countQues++;
    }else{
        document.querySelector(".submit-answer").style.display="none";
        document.querySelector(".view-results").style.display="unset";

    }
    
    document.getElementById("ques-left").textContent="Вопрос : "+(countQues+1)+"/"+window[lang].length;
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
    for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];

    };/*For loop Closed*/

});

document.querySelector(".view-results").addEventListener("click",function(){

    document.querySelector(".quiz").style.display="none";
    document.querySelector(".final-result").style.display="block";

    
    document.querySelector(".solved-ques-no").innerHTML="Вы решили "+(countQues+1)+" вопросы о "+document.getElementById("language").value;
    
    var correct= document.getElementById("ques-view").getElementsByClassName("correct").length;
    
    document.querySelector(".right-wrong").innerHTML=correct+" верно и "+((countQues+1)-correct)+" неверно";
    
    document.getElementById("display-final-score").innerHTML="Ваш окончательный результат равен: "+score;
    
    if (correct/(countQues+1)>0.8){
        document.querySelector(".remark").innerHTML="Замечание: Выдающийся ! :)";
    }else if(correct/(countQues+1)>0.6){
        document.querySelector(".remark").innerHTML="Замечание: Хорошо, Продолжайте совершенствоваться.";
    
    }else if(correct/(countQues+1)){
        document.querySelector(".remark").innerHTML="Замечание: Удовлетворительно, учитесь больше.";
    }else{
        document.querySelector(".remark").innerHTML="Замечание: Неудовлетворительно, пробуйте снова.";
    }
    
//    window.location.href="#display-final-score";

});

document.getElementById("restart").addEventListener("click",function(){
    location.reload();

});

// document.getElementById("about").addEventListener("click",function(){
    // alert("Quiz Website Project Created By Digvijay Singh");

// });


/*Smooth Scroll*/


// $(document).on('click', 'a[href^="#"]', function (event) {
//     event.preventDefault();

//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 1000);
// });


})
/*Smooth Scroll End*/
