const quizData = [ 
    {
        question: "What does HTML stand for? ",
        a:"Hypertext Markdown Language",
        b:"Hype Text Made Up Language",
        c:"Hypertext Makeup Language",
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
        question: "whats a Boolean? ",
        a:"binary varible, that stands for neither true or false",
        b:"an array",
        c:"binary variable, having a true or false value",
        d:"a variable that does noting",
        correct: "c",
    },

    {
        question: "whats an Array? ",
        a:"an ordered list of values",
        b:"an un-ordered list of values",
        c:"its a laser!",
        d:"i have no clue ",
        correct: "a",
    },

    {
        question: "Whats a generator in JavaScript? ",
        a:"something that makes stuff",
        b:"it powers computers!",
        c:"",
        d:"dedrr",
        correct: "c",
    },

    {
        question: "ay ay ay ",
        a:"jdjjd",
        b:"ddrre",
        c:"crccrc",
        d:"dedrr",
        correct: "c",
    },






];
const  quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a = document.getElementById('a')
const b = document.getElementById('b')
const c = document.getElementById('c')
const d = document.getElementById('d')
const submitBtn = document.getElementById('submit')


console.log(quizData)
console.log(quizData[0])
console.log(quizData[0].question)
console.log(question)



questionEl.textContent = quizData[0].question
a.value = quizData[0].a
b.value = quizData[0].b
c.value = quizData[0].c
d.value = quizData[0].d
questionEl.textContent = quizData[0].question

a_text.innerText = quizData[0].a_text
b_text.innerText = quizData[0].b_text
c_text.innerText = quizData[0].c_text
d_text.innerText = quizData[0]._text


