var myTimer;
function clock() {
     myTimer = setInterval(myClock, 1000);
     var c = 60;

     function myClock() {
       document.querySelector("#countdown").innerHTML = --c;
       if (c == 0) {
         clearInterval(myTimer);
         alert("Out of time!");
       }
     }
   }

(function() {
    const myQuestions = [
    {
        question: " ",
    },

      {
        question: "What band(s) did Jimi Hendrix play in?",
            answers: {
                a: "Jimmy James and the Blue Flames",
                b: "The Band of Gypsies",
                c: "The Jimi Hendrix Experience", 
                d: "All of these"
        },
        correctAnswer: "d"
      },

      {
         question: "Where was Jimi Hendrix born?",
            answers: {
                a: "Woodstock, New York",
                b: "Cleveland, OH",
                c: "Seattle, Washington",
                d: "Toronto, Canada"
        },
        correctAnswer: "c"
      },

      {
         question: "What was the name of Hendrix's debut album?",
            answers: {
               a: "Are You Experienced?",
               b: "Axis: Bold As Love",
               c: "Electric Ladyland", 
               d: "All Along the Watchtower"
        },
        correctAnswer: "a"
      },

      {
         question: "What was the name of the first band Jimi formed in the 50's?",
            answers: {
               a: "Electric Velvet",
               b: "The Velvetones",
               c: "The Overtones",
               d: "Jimi and The Velvets"
       },
       correctAnswer: "b"
     },

     {
        question: "What was Jimi's first single to be released in the UK?",
            answers: {
               a: "Little Wing",
               b: "Purple Haze", 
               c: "Hey Joe",
               d: "The Wind Cries Mary"
      },
      correctAnswer: "c"
    },

    {
        question: "On what date did Jimi die?",
            answers: {
               a: "September 18, 1970",
               b: "October 4, 1970", 
               c: "November 21, 1969",
               d: "January 2, 1971"
      },
      correctAnswer: "a"
    }    

];

    function buildQuiz() {
      const output = [];
  
      myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
  
        for (letter in currentQuestion.answers) {
          answers.push(
            `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
          );
        }
  
        output.push(
         ` <div class="slide">
             <div class="question col-md-12"> ${currentQuestion.question} </div>
             <div class="answers col-md-6"> ${answers.join("")} </div>
           </div>`
        );
      });
  
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      let numCorrect = 0;
  
      myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        if (userAnswer === currentQuestion.correctAnswer) {
          numCorrect++;
  
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;
      
      if (currentSlide === 0) {
        previousButton.style.display = "none";
        nextButton.style.display = "none";
      } 
      
      else {
        previousButton.style.display = "inline-block";
        nextButton.style.display = "inline-block";
      }
      
      if (currentSlide === slides.length - 1) {
        submitButton.style.display = "inline-block";
      } 
      
      else {
        submitButton.style.display = "none";
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    const quizContainer = document.querySelector(".quiz");
    const resultsContainer = document.querySelector(".results");
    const submitButton = document.querySelector(".submit");
  
    buildQuiz();
  
    const startBtn = document.querySelector(".start-btn");
    const previousButton = document.querySelector(".previous");
    const nextButton = document.querySelector(".next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(0);

    startBtn.addEventListener("click", showNextSlide);
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();

  var resultsContainer;
  localStorage.setItem('resultsContainer', JSON.stringify(resultsContainer));
  
  var retrievedObject = localStorage.getItem('resultsContainer');
  
  console.log('retrievedObject: ', JSON.parse(retrievedObject));