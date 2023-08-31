const bundle = [
    {
        id: 1,
        question: '1) The metal whose salts are sensitive to light is',
        opt1: 'Zinc',
        opt2: 'Silver',
        opt3: 'Aluminium',
        opt4: 'Copper',
        ans: 'Silver'
    },
    {
        id: 2,
        question: '2) Who has won the SPIRIT OF THE CRICKET AWARD OF THE DECADE( 2010-2020)',
        opt1: 'MS DHONI',
        opt2: 'KANE WILLIAMSON',
        opt3: 'SACHIN TENDULKAR',
        opt4: 'VIRAT KOHLI',
        ans: 'MS DHONI'
    },
    {
        id: 3,
        question: '3) Which of these physical quantities is a vector quantity',
        opt1: 'Temperature',
        opt2: 'Speed',
        opt3: 'Work',
        opt4: 'Gravitational Intensity',
        ans: 'Gravitational Intensity'
    },
    {
        id: 4,
        question: '4) Which planet is the hottest?',
        opt1: 'Earth',
        opt2: 'Mars',
        opt3: 'Venus',
        opt4: 'Mercury',
        ans: 'Venus'
    },
    {
        id: 5,
        question: '5) Ryder cup is related to which sports?',
        opt1: 'Polo',
        opt2: 'Golf',
        opt3: 'Tennis',
        opt4: 'Lawn Tennis',
        ans: 'Golf'
    },
    {
        id: 6,
        question: '6) How many bones does a shark have?',
        opt1: 'less than 100',
        opt2: 'More than 100',
        opt3: 'More than 500',
        opt4: 'None',
        ans: 'None'
    },
    {
        id: 7,
        question: '7) What are the three water signs in astrology?',
        opt1: 'Tarus, Aries and Gemini',
        opt2: 'Cancer, Scorpio and Pisces',
        opt3: 'Pisces, Gemini and Aquarius',
        opt4: 'Libra, Cancer and Leo',
        ans: 'Cancer, Scorpio and Pisces'
    },
    {
        id: 8,
        question: '8) What is the strongest muscle in the human body?',
        opt1: 'Biceps',
        opt2: 'Triceps',
        opt3: 'Deltoid',
        opt4: 'The Masseter',
        ans: 'The Masseter'
    },
    {
        id: 9,
        question: '9) Haematite & Magnetite are',
        opt1: 'Iron ores',
        opt2: 'Copper ores',
        opt3: 'Zinc ores',
        opt4: 'Calcium ores',
        ans: 'Iron ores'
    },
    {
        id: 10,
        question:  '10) Which among the following is the National Sports of USA?',
        opt1: 'Rugby',
        opt2: 'Cricket',
        opt3: 'Football',
        opt4: 'Baseball',
        ans: 'Baseball'
    },
    {
        id: 11,
        question: '11) Wife of MS Dhoni?',
        opt1: 'SAKSHI',
        opt2: 'PRIYANKA',
        opt3: 'SAKSI',
        opt4: 'PREYANKA',
        ans: 'SAKSHI'
    },
    {
        id: 10,
        question:  '12) What was the score of MS Dhoni in his last international match',
        opt1: '49',
        opt2: '50',
        opt3: '52',
        opt4: '48',
        ans: '50'
    },
    {
        id: 13,
        question: '13) Who is known as father of computer?',
        opt1: 'Bill Gates',
        opt2: 'DENNIS RITCHIE',
        opt3: 'James Gosling',
        opt4: 'Charles Babbage',
        ans: 'Charles Babbage'
    },
    {
        id: 14,
        question: '14) Another name for computer chip is',
        opt1: 'Execute',
        opt2: 'Micro chip',
        opt3: 'microprocessor',
        opt4: 'Select',
        ans: 'Micro Chip'
    },
    {
        id: 15,
        question: '15) What is not an internet protocol',
        opt1: 'HTTP',
        opt2: 'FTP',
        opt3: 'STP',
        opt4: 'IP',
        ans: 'STP'
    }

]
const mainQuestion = document.querySelector('.main-heading');
const opt1 = document.querySelector('.opt1');
const opt2 = document.querySelector('.opt2');
const opt3 = document.querySelector('.opt3');
const opt4 = document.querySelector('.opt4');
const submitBtn = document.querySelector('.submit-btn');
const options = document.querySelectorAll('.option');
const result = document.querySelector('.result');
const startBtn = document.querySelector('.start-btn');
const index = document.querySelector('.index');
const restartBtn = document.querySelector('.restart');
const correctAnswers = document.querySelector('.correct-answer');
const totalScore = document.querySelector('.total-score');
const loader = document.querySelector('.loader-bg');

let count = 0;
let marks = 0;
let flag = 0;
let click = 0;

window.addEventListener('DOMContentLoaded', function(){
    showContent();
});
function showContent(){
    mainQuestion.textContent = bundle[count].question;
    opt1.textContent = bundle[count].opt1;
    opt2.textContent = bundle[count].opt2;
    opt3.textContent = bundle[count].opt3;
    opt4.textContent = bundle[count].opt4;
}
startBtn.addEventListener('click', function(){
    index.classList.add('hide-index');
    loader.classList.add('play');
    setTimeout(function(){
        loader.classList.remove('play');
    }, 1500); });

options.forEach(function(option){
    option.addEventListener('click', function(e){
        let answer = bundle[count].ans;
        let currentValue = e.target.textContent;
        click = 1;

        options.forEach(function(item){
            if(item !== option){
                item.classList.remove('select');
            }
        })
        option.classList.add('select');

        if(currentValue == answer){
            flag = 1;
        }else{
            flag = 0;
        }
    });
});

submitBtn.addEventListener('click', function(){
    if(click == 1){
        if(count == 9){
            if(flag == 1){
                marks = marks + 1;
            }
            loader.classList.add('play');
            setTimeout(function(){
                loader.classList.remove('play');
            }, 1500);
            result.classList.remove('hide-result');
            totalScore.textContent = marks * 2;
            correctAnswers.textContent = marks;
        }else{
            count = count + 1;
            showContent();
            click = 0;
            options.forEach(function(option){
                option.classList.remove('select');
            })
        }
        if(flag == 1){
            marks = marks + 1;
        }
    
        console.log(marks);
    }else {
        alert('Choose a option');
    }
});

restartBtn.addEventListener('click', function(){

    index.classList.remove('hide-index');
    result.classList.add('hide-result');
    loader.classList.add('play');
    setTimeout(function(){
        loader.classList.remove('play');
    }, 1500);
    options.forEach(function(option){
        option.classList.remove('select');
    });
    count = 0;
    marks = 0;
    flag = 0;
    click = 0;
    showContent(bundle);
    console.clear();})

    



