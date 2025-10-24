const questions = [
  {
    type: "single",
    question: "When you see someone being treated unfairly, you:",
    options: [
        { text: "Take charge to de-escalate the situation.", scores: { L: 1 } },
        { text: "Feel for them and offer a kind word.", scores: { H: 1 } },
        { text: "Make a witty comment about the situation.", scores: { F: 1 } },
        { text: "Can't let it stand and speak up for what's right.", scores: { J: 2 } }
    ]
  },
  {
    type: "single", 
    question: "In a group project, your natural role is:",
    options: [
        { text: "The one who steps up to lead and coordinate.", scores: { L: 2 } },
        { text: "The one who checks on everyone's well-being.", scores: { H: 1, A: 1 } },
        { text: "The one who keeps everyone entertained.", scores: { F: 1 } },
        { text: "The one who makes sure all the rules are followed.", scores: { R: 2 } }
    ]
  },
  {
    type: "single",
    question: "What's your biggest weakness?",
    options: [
        { text: "I'm afraid of being ignored.", scores: { H: 1 } },
        { text: "I'm not very driven and easily distracted.", scores: { G: -1 } },
        { text: "I can be impatient and a bit controlling.", scores: { L: 1 } },
        { text: "I can be too rigid and by-the-book.", scores: { R: 1 } }
    ]
  },
  {
    type: "single",
    question: "When your carefully made plans fall apart, your first reaction is:",
    options: [
        { text: "\"Well, this is an interesting turn of events!\"", scores: { F: 1 } },
        { text: "\"Is everyone okay?\"", scores: { H: 2 } },
        { text: "\"Okay, what's our new strategy?\"", scores: { I: 1, G: 1 } },
        { text: "\"Who's responsible for this mess?\"", scores: { R: 1 } }
    ]
  },
  {
    type: "single",
    question: "Your ideal weekend is:",
    options: [
        { text: "Binge-watching shows with friends.", scores: { A: 2 } },
        { text: "Catching up on work and organizing your life.", scores: { R: 2 } },
        { text: "Working on personal projects or hobbies.", scores: { I: 1, G: 1 } },
        { text: "Volunteering at a local shelter.", scores: { H: 2 } }
    ]
  },
  {
    type: "single",
    question: "What motivates you the MOST?",
    options: [
        { text: "The desire to be in charge and make an impact.", scores: { L: 2 } },
        { text: "Helping others and making them smile.", scores: { H: 2 } },
        { text: "Having fun and enjoying life's simple pleasures.", scores: { F: 1, A: 1 } },
        { text: "A sense of duty and doing the correct thing.", scores: { R: 2 } }
    ]
  },
  {
    type: "single",
    question: "What's your humor style like?",
    options: [
        { text: "I often find myself in funny but awkward situations.", scores: { F: 1, A: 1 } },
        { text: "I'm always up-to-date on the latest memes and internet trends.", scores: { I: 1, F: 1 } },
        { text: "People say I'm naturally funny without even trying.", scores: { F: 2 } },
        { text: "I'm not really the one telling jokes.", scores: { F: -1 } }
    ]
  },
  {
    type: "single",
    question: "When facing a difficult long-term goal, you:",
    options: [
        { text: "Analyze the best possible path to success.", scores: { I: 1, G: 1 } },
        { text: "Hope your friends will give you some support.", scores: { H: 1, A: 1 } },
        { text: "Relax until two days before the deadline.", scores: { G: -1 } },
        { text: "Power through with sheer determination.", scores: { G: 2 } }
    ]
  },
  {
    type: "single",
    question: "What's your view on rules?",
    options: [
        { text: "They're so boring, aren't they?", scores: { F: 1 } },
        { text: "They should be bent if it helps someone.", scores: { H: 1 } },
        { text: "They are necessary for me to lead effectively.", scores: { L: 1, R: 1 } },
        { text: "They exist for a reason and must be followed.", scores: { R: 2 } }
    ]
  },
  {
    type: "single",
    question: "In a conversation, you're usually the one who:",
    options: [
        { text: "Tells a funny story or cracks a joke.", scores: { F: 2 } },
        { text: "Guides the topic and summarizes points.", scores: { L: 1 } },
        { text: "Listens warmly and offers encouragement.", scores: { A: 2 } },
        { text: "Keeps the discussion factual and on track.", scores: { R: 1 } }
    ]
  },

  
  {
    type: "multiple",
    question: "The values matter most to you in relationship are:",
    options: [
        { text: "Shared ambitions and supporting each other's goals.", scores: { R: 2 } },
        { text: "Loyalty and standing by each other.", scores: { H: 2 } },
        { text: "Fun, laughter, and not taking life too serious.", scores: { F: 2, A: 1 } },
        { text: "Intellectual stimulation and deep conversations.", scores: { I: 2, A: 1 } },
        { text: "Honesty and transparency at all times.", scores: { R: 2 } }
    ]
  },
  {
    type: "multiple",
    question: "When there's disagreement in a group, you tend to:",
    options: [
        { text: "Use humor to diffuse tension and redirect.", scores: { F: 2, A: 1 } },
        { text: "Defer to established rules or authority figures.", scores: { R: 2 } },
        { text: "Mediate and find a compromise that works for everyone.", scores: { H: 2, A: 1 } },
        { text: "Present logical arguements to support your position.", scores: { I: 2 } },
        { text: "Take charge and make a disicion call.", scores: { L: 2 } }
    ]
  },
  {
    type: "multiple", 
    question: "When learning something new, your approaches are:",
    options: [
        { text: "I follow step by step tutorials carefully.", scores: { R: 2 } },
        { text: "I make it fun by turning it into a game.", scores: { F: 2 } },
        { text: "I experiment and learn from trial and error.", scores: { G: 1, I: 2 } },
        { text: "I set ambitious goals and track my progress.", scores: { L: 1, G: 2 } },
        { text: "I find a mentor or join a kearnin group.", scores: { A: 2 } }
    ]
  },
  {
    type: "multiple",
    question: "My greatest strength is my:",
    options: [
        { text: "Leadership and decisiveness.", scores: { L: 2 } },
        { text: "Empathy and kindness.", scores: { H: 2 } },
        { text: "Ability to get along with anyone.", scores: { A: 2 } },
        { text: "Intelligence and adaptability.", scores: { I: 2 } },
        { text: "Integrity and reliability.", scores: { R: 2 } }
    ]
  },
  {
    type: "multiple",
    question: "In a crisis, my first instinct is to:",
    options: [
        { text: "Take command and give clear orders.", scores: { L: 2 } },
        { text: "Crack a joke to ease the tension.", scores: { F: 2 } },
        { text: "Make sure everyone is safe and calm.", scores: { H: 2 } },
        { text: "Find the rulebook or protocol to follow.", scores: { R: 2 } },
        { text: "Quickly analyze all the options.", scores: { I: 2 } }
    ]
  },
  {
    type: "multiple",
    question: "I value a partner who is:",
    options: [
        { text: "Fun-loving and has a great sense of humor.", scores: { F: 2 } },
        { text: "Ambitious and driven.", scores: { G: 2 } },
        { text: "Kind and emotionally supportive.", scores: { H: 2 } },
        { text: "Intelligent and stimulating to talk to.", scores: { I: 2 } },
        { text: "Trustworthy and has strong morals.", scores: { R: 1, J: 1 } }
    ]
  },
  {
    type: "multiple",
    question: "If I achieved a major success, I would think:",
    options: [
        { text: "\"This is just the beginning.\"", scores: { L: 1, G: 2 } },
        { text: "\"I'm so grateful for everyone who helped me.\"", scores: { H: 1, A: 1 } },
        { text: "\"Time to throw a huge party!\"", scores: { F: 2, A: 1 } },
        { text: "\"My strategy worked. What's next?\"", scores: { I: 1, G: 1 } },
        { text: "\"This proves that hard work pays off.\"", scores: { R: 2 } }
    ]
  },
  {
    type: "multiple",
    question: "I get annoyed by people who are:",
    options: [
        { text: "Incompetent or chaotic.", scores: { L: 2 } },
        { text: "Rude or aggressive.", scores: { A: 2 } },
        { text: "Cruel or mean-spirited.", scores: { H: 2 } },
        { text: "Illogical or ignorant.", scores: { I: 2 } },
        { text: "Cheaters or rule-breakers.", scores: { J: 2 } }
    ]
  },
  {
    type: "multiple",
    question: "My approach to life is:",
    options: [
        { text: "Set big goals and take charge of your destiny.", scores: { L: 1, G: 2 } },
        { text: "Don't take it too seriously; enjoy the ride.", scores: { F: 1, A: 1 } },
        { text: "Understand the system and use it to your advantage.", scores: { I: 2 } },
        { text: "Follow your heart and help others.", scores: { H: 2 } },
        { text: "Work hard, be honest, and good things will follow.", scores: { R: 2 } }
    ]
  },
  {
    type: "multiple",
    question: "Which Zootopia character qualities do you admire most?",
    options: [
        { text: "Judy Hopps's optimism and determination.", scores: { G: 1, J: 1 } },
        { text: "Clawhauser's friendliness and joy.", scores: { A: 2 } },
        { text: "Chief Bogo's authority and dedication to order.", scores: { R: 1, L: 1 } },
        { text: "Nick Wilde's wit and street smarts.", scores: { I: 1, F: 1 } },
        { text: "Mayor Lionheart's vision and leadership.", scores: { L: 1, G: 1 } }
    ]
  }
];


const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const progressElement = document.getElementById('progress');
const resultElement = document.getElementById('character-result');

document.addEventListener('DOMContentLoaded', function() {
    initQuiz();
});

function initQuiz() {
    document.getElementById('start-btn').addEventListener('click', startQuiz);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('prev-btn').addEventListener('click', prevQuestion);
    document.getElementById('restart-btn').addEventListener('click', restartQuiz);
}

function startQuiz() {
    currentQuestion = 0;
    scores = {H:0, R:0, I:0, L:0, G:0, A:0, F:0, J:0}; 
    userAnswers = {};
    hideAllSections();
    document.getElementById('quiz-section').classList.add('active');
    showQuestion();
}

function showQuestion() {
    if (currentQuestion >= questions.length) {
        showResult();
        return;
    }
    const question = questions[currentQuestion];
    questionElement.textContent = `${currentQuestion + 1}. ${question.question}`;
    optionsElement.innerHTML = '';
    const typeHint = document.createElement('div');
    typeHint.className = 'type-hint';
    typeHint.textContent = question.type === 'single' ? '(Choose one)' : '(Choose up to two)';
    optionsElement.appendChild(typeHint);
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        const isSelected = userAnswers[currentQuestion] && userAnswers[currentQuestion].includes(index);
        if (isSelected) {
            optionElement.classList.add('selected');
        } 
        optionElement.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
            <span class="option-text">${option.text}</span>
        `; 
        optionElement.addEventListener('click', () => selectOption(index, question.type));
        optionsElement.appendChild(optionElement);
    });
    updateProgress();
    updateNavigationButtons();
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');    
    if (prevBtn) {
        prevBtn.style.display = currentQuestion > 0 ? 'block' : 'none';
    }
    if (nextBtn) {
        nextBtn.textContent = currentQuestion === questions.length - 1 ? 'See Result' : 'Next Question';
    }
}

function nextQuestion(){
    const selectedOption = document.querySelector('.option.selected');
    if (!selectedOption){
        if(questions[currentQuestion].type==="single"){
            alert('Please choose one option!')
        }
        else if (questions[currentQuestion].type==="multiple"){
            if(!confirm("You haven't choose any options. Still continue?"))
            return;
        }
    }
    else{
        currentQuestion++
        showQuestion()
    }
}

function prevQuestion(){
    if(currentQuestion>0){
        currentQuestion--
    }
    showQuestion()
}

function removeQuestionScores(questionIndex) {
    if (userAnswers[questionIndex]) {
        const question = questions[questionIndex];
        const previousAnswers = userAnswers[questionIndex];
        previousAnswers.forEach(optionIndex => {
            const points = question.options[optionIndex].scores;
            for (const [trait, value] of Object.entries(points)) {
                scores[trait] = (scores[trait] || 0) - value;
            }
        });
    }
}

function selectOption(optionIndex, questionType) {
    const question = questions[currentQuestion];
    const optionElements = document.querySelectorAll('.option');
    
    console.log(`🎯 === 用户选择: 第${currentQuestion + 1}题 ===`);
    console.log(`选择: ${String.fromCharCode(65 + optionIndex)} - ${question.options[optionIndex].text}`);
    console.log('选择前分数:', JSON.parse(JSON.stringify(scores)));
    
    if (questionType === "single") {
        console.log('🔘 单选题处理中...');
        optionElements.forEach(element => element.classList.remove('selected'));
        optionElements[optionIndex].classList.add('selected');
        if (userAnswers[currentQuestion] && userAnswers[currentQuestion].length > 0) {
            const oldOptionIndex = userAnswers[currentQuestion][0];
            const oldPoints = question.options[oldOptionIndex].scores;
            console.log(`🗑️ 清除旧选择分数:`, oldPoints);
            
            for (const [trait, value] of Object.entries(oldPoints)) {
                scores[trait] = (scores[trait] || 0) - value;
                console.log(`   ${trait} -= ${value} → ${scores[trait]}`);
            }
        }
        const newPoints = question.options[optionIndex].scores;
        console.log(`➕ 添加新选择分数:`, newPoints);
        
        for (const [trait, value] of Object.entries(newPoints)) {
            scores[trait] = (scores[trait] || 0) + value;
            console.log(`   ${trait} += ${value} → ${scores[trait]}`);
        }
        
        userAnswers[currentQuestion] = [optionIndex];
        
    } else {
        console.log('☑️ 多选题处理中...');
        const optionElement = optionElements[optionIndex];
        const currentlySelected = userAnswers[currentQuestion] || [];
        const isCurrentlySelected = currentlySelected.includes(optionIndex);
        
        if (isCurrentlySelected) {
            console.log(`➖ 取消选择`);
            optionElement.classList.remove('selected');
            userAnswers[currentQuestion] = currentlySelected.filter(i => i !== optionIndex);
            
            const points = question.options[optionIndex].scores;
            console.log(`移除分数:`, points);
            
            for (const [trait, value] of Object.entries(points)) {
                scores[trait] = (scores[trait] || 0) - value;
                console.log(`   ${trait} -= ${value} → ${scores[trait]}`);
            }
        } else {
            if (currentlySelected.length < 2) {
                console.log(`➕ 新增选择`);
                optionElement.classList.add('selected');
                userAnswers[currentQuestion] = [...currentlySelected, optionIndex];
                
                const points = question.options[optionIndex].scores;
                console.log(`添加分数:`, points);
                
                for (const [trait, value] of Object.entries(points)) {
                    scores[trait] = (scores[trait] || 0) + value;
                    console.log(`   ${trait} += ${value} → ${scores[trait]}`);
                }
            } else {
                console.log('❌ 已达最大选择数(2个)');
                alert('You can only select up to 2 options for this question.');
            }
        }
    }
    
    console.log('选择后分数:', JSON.parse(JSON.stringify(scores)));
    console.log('当前题目答案:', userAnswers[currentQuestion]);
    console.log('📊 当前累计总分:', scores);
}

function addOptionScores(questionIndex, optionIndex) {
    const question = questions[questionIndex];
    const points = question.options[optionIndex].scores;
    
    for (const [trait, value] of Object.entries(points)) {
        scores[trait] = (scores[trait] || 0) + value;
    }
}

function removeOptionScores(questionIndex, optionIndex) {
    const question = questions[questionIndex];
    const points = question.options[optionIndex].scores;
    
    for (const [trait, value] of Object.entries(points)) {
        scores[trait] = (scores[trait] || 0) - value;
    }
}

function updateProgress() {
    const progress = (currentQuestion / questions.length) * 100;
    progressElement.style.width = `${progress}%`;
}

function showResult() {
    const character = calculateCharacter();
    resultElement.textContent = character;
    hideAllSections();
    document.getElementById('result-section').classList.add('active');
}

function calculateCharacter() {
    const { H=0, R=0, I=0, L=0, G=0, A=0, F=0, J=0 } = scores;
    const adjustedJ = J * 1.75; 
    console.log('原始分数:', scores);
    console.log('调整后正义感:', adjustedJ);

    const characterScores = {
        "🐰 Judy Hopps": 
            (G * 2.5) + (adjustedJ * 2.2) + (H * 1.5) + (R * 1.0) - (F * 0.5) - (I * 0.3),
        
        "🦊 Nick Wilde": 
            (I * 2.5) + (F * 2.0) + (A * 1.2) + (H * 0.8) - (R * 1.0) - (adjustedJ * 0.7),
        
        "🐃 Chief Bogo": 
            (R * 2.5) + (L * 2.0) + (adjustedJ * 1.5) + (G * 0.8) - (F * 1.2) - (A * 0.5),
        
        "🐆 Officer Clawhauser": 
            (A * 2.5) + (H * 2.0) + (F * 1.2) - (G * 1.5) - (R * 1.0) - (I * 0.5),
        
        "🦁 Mayor Lionheart": 
            (L * 2.5) + (G * 2.0) + (I * 1.2) + (A * 0.8) - (H * 0.8) - (adjustedJ * 0.8),
        
        "🐑 Dawn Bellwether": 
            (I * 2.5) + (G * 1.5) + (L * 1.0) - (A * 2.0) - (H * 1.5) - (adjustedJ * 1.2),
        
        "🐭 Fru Fru": 
            (A * 2.5) + (F * 2.0) + (H * 1.2) - (I * 1.0) - (L * 0.8) - (G * 0.5),
        
        "🦥 Flash": 
            (F * 2.5) + (A * 2.0) - (G * 2.5) - (R * 2.0) - (L * 1.0),
        
        "🦌 Gazelle": 
            (A * 2.0) + (H * 2.0) + (F * 1.2) + (adjustedJ * 1.0) - (I * 0.5) - (L * 0.3)
    };
    let maxScore = -Infinity;
    let resultCharacter = "🦌 Gazelle";
    for (const [character, score] of Object.entries(characterScores)) {
        if (score > maxScore) {
            maxScore = score;
            resultCharacter = character;
        }
    }
    console.log('各角色最终得分:', characterScores);
    console.log('获胜角色:', resultCharacter, '得分:', maxScore);
    return resultCharacter;
}

function restartQuiz() {
    currentQuestion = 0;
    scores = { H: 0, R: 0, D: 0 };
    hideAllSections();
    document.getElementById('name-section').classList.add('active');
}

function backToTest() {
    hideAllSections();
    document.getElementById('result-section').classList.add('active');
}

function hideAllSections() {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
}