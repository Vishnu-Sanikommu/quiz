const quizData = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "script",
        b: "JavaScript",
        c: "js",
        d: "scripting",
        correct: "a"
    },
    {
        question: "Inside which HTML element do we put the CSS?",
        a: "script",
        b: "JavaScript",
        c: "js",
        d: "style",
        correct: "d"
    },
    {
        question: "What is the attribute used to set the margin?",
        a: "padding",
        b: "margin",
        c: "width",
        d: "page-margin",
        correct: "b"
    },
    {
        question: "What does CSS stands for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        a: "msgBox('Hello World');",
        b: "alertBox('Hello World');",
        c: "msg('Hello World');",
        d: "alert('Hello World');",
        correct: "d"
    },
    {
        question: "HTML stands for",
        a: "Hyper Tension Markup Language",
        b: "Hyper Text Markup Language",
        c: "Hyper Tension Markable Language",
        d: "Hyper Text Markable Language",
        correct: "b"
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        a: "style",
        b: "styles",
        c: "styling",
        d: "class",
        correct: "a"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        a: "color",
        b: "font-color",
        c: "fgcolor",
        d: "text-color",
        correct: "a"
    },
    {
        question: "Which CSS property controls the text size?",
        a: "text-size",
        b: "font-size",
        c: "text-font",
        d: "font-style",
        correct: "b"
    },
    {
        question: "Who is making the Web standards?",
        a: "Microsoft",
        b: "The world wide web consortium",
        c: "Mozilla",
        d: "Google",
        correct: "b"
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const nextbtn = document.getElementById('next');


let currentQuestion = 0;
let score = 0;

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
    document.getElementById("message").innerHTML = "";
}

function enableOptions() {
    document.getElementById("a").disabled = false;
    document.getElementById("b").disabled = false;
    document.getElementById("c").disabled = false;
    document.getElementById("d").disabled = false;
}

function disableOptions() {
    if(document.getElementById("a").checked == true) {
        document.getElementById("b").disabled = true;
        document.getElementById("c").disabled = true;
        document.getElementById("d").disabled = true;
    }
    else if(document.getElementById("b").checked == true) {
        document.getElementById("a").disabled = true;  
        document.getElementById("c").disabled = true;
        document.getElementById("d").disabled = true;
    }
    else if(document.getElementById("c").checked == true) {
        document.getElementById("a").disabled = true;
        document.getElementById("b").disabled = true;  
        document.getElementById("d").disabled = true;
    }
    else if(document.getElementById("d").checked == true) {
        document.getElementById("a").disabled = true;
        document.getElementById("b").disabled = true;
        document.getElementById("c").disabled = true;
    }
}

function loadQuiz() {

    deselectAnswers();
    enableOptions();
    disableNextbtn();

    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuestion+1 +". "+currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
loadQuiz();

function disableNextbtn() {
    document.getElementById("next").disabled = true;
}
function enableNextbtn() {
    document.getElementById("next").disabled = false;
}

function getSelected() {
    let answer;
    disableOptions();
    for(var i=0;i<answerEls.length;i++)
    {
        if(answerEls[i].checked) {
            enableNextbtn();
            answer = answerEls[i].id;
        } 
    }
    
    return answer;
}

document.getElementById("message").style.paddingLeft = "10px";
function getMessage() {
    const answer = getSelected();
        if(answer === quizData[currentQuestion].correct) {
            document.getElementById("message").innerHTML = "Correct";
            document.getElementById("message").style.color = "green";
            
        }
        else {
            document.getElementById("message").innerHTML = "Incorrect";
            document.getElementById("message").style.color = "orange";
        }
}

nextbtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer === quizData[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;

    if(currentQuestion < quizData.length) {
        loadQuiz();
    }
    else {

        document.getElementById("quiz-next").style.display = "none";
        document.getElementById("quiz").style.height = "auto";
        document.getElementById("quiz").style.margin = "18% 28%";
        quiz.innerHTML =`
        <h2 style = "text-align:center"> You answered ${score}/${quizData.length} questions correctly</h2>

        <button id="retake" onclick="location.reload()">Retake Test</button>
        <button id="thankYou">Thank You &#127881</button>
        `
        var retaketest = document.getElementById("retake");
        retaketest.setAttribute('style',"background-color: #e60b038f;border-radius: 5px;color: white;border: none;width: 40%;font-size: 25px;padding: 10px;margin: auto;margin-bottom: 5px;cursor: pointer;display: block;");
    
        var thanks = document.getElementById("thankYou");
        thanks.setAttribute('style',"background-color: #e60b038f;border-radius: 5px;color: white;border: none;width: 40%;font-size: 25px;padding: 9px;margin: auto;margin-bottom: 5px;display: block;");
        
    }
})

