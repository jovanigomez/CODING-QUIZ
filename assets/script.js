const quizData = [ 
    {
        question: "What does HTML stand for? ",
        a:"Hypertext Markdown Language",
        b:"Hype Text Made Up Language",
        c:"Hypertext Markup Language",
        d:"How's The Movie Like?",
        correct: "c",
    },

    {
        question: "What does CSS stand for?",
        a:"Cant Stand Style",
        b:"Cascading Style Sheets",
        c:"Color Styling Sheets",
        d:"Cloud Storing Sheet",
        correct: "b",
    },

    {
        question: "Whats a Boolean? ",
        a:"binary varible, that stands for neither true or false",
        b:"an array",
        c:"a variable that does noting",
        d:"binary variable, having a true or false value",
        correct: "d",
    },

    {
        question: "Whats an Array? ",
        a:"an ordered list of values",
        b:"an un-ordered list of values",
        c:"its a laser!",
        d:"i have no clue ",
        correct: "a",
    },

    {
        question: "Whats a generator in JavaScript? ",
        a:"it doesnt return an object",
        b:"it powers computers!",
        c:"it returns an object",
        d:"powers code",
        correct: "c",
    },

    {
        question: "What does JavaScript do?",
        a:"doesnt add features on the page",
        b:"adds color to a web page",
        c:"displays static info",
        d:"the skeleton of a web page",
        correct: "c",
    },






];
const startBtnEl = document.getElementById('start-btn')
const  quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a = document.getElementById('a')
const b = document.getElementById('b')
const c = document.getElementById('c')
const d = document.getElementById('d')
const submitBtn = document.getElementById('submit')

let questionIndex = 0

function showQuestion() {
    questionEl.textContent = quizData[questionIndex].question
    a.value = quizData[questionIndex].a
    b.value = quizData[questionIndex].b
    c.value = quizData[questionIndex].c
    d.value = quizData[questionIndex].d


    a_text.innerText = quizData[questionIndex].a
    b_text.innerText = quizData[questionIndex].b
    c_text.innerText = quizData[questionIndex].c
    d_text.innerText = quizData[questionIndex].d


}





submitBtn.addEventListener("click", function () {

    var score = 0; score++


    for (let i = 0; i < answerEls.length; i++) {
        if (answerEls[i].checked) {
            if (answerEls[i].id == quizData[questionIndex].correct) {
                document.getElementById('submit').innerHTML = "correct!";
            } else {
                document.getElementById('submit').innerHTML = "incorrect!";
            }
        } 

    }


    questionIndex++
    showQuestion()

});


showQuestion()

 


