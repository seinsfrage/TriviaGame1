//begin function-obj1
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
    
  return this.questions[this.questionIndex];
    
};

Quiz.prototype.isEnded = function () {
    
    return this.questions.length = this.questionIndex;
    
};

Quiz.prototype.guess = function () {
    
    this.questionIndex++;
    
    if (this.getQuestionIndex() .correctAnswer(answer)) {
        
       this.score++; 
    }
    
};
//end function-obj1

//begin function-obj2
function Question (text, choices, answer) {
    
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}

Question.prototype.correctAnswer = function(choice) {
    
    return choice === this.answer;

}; 
//end function-obj2


//begin function-obj3
function populate() {
   
    
    if(quiz.isEnded()) {
        //showScores(); - need to add
    }
    
    else {
        // show question
        
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        
        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            
        element = document.getElementById("choice" + i);
        element.innerHTML = choices[i];
        }
    }
}

var questions = [
    
     new Question("What does gif stand for?", ["groovy informatic file", "gullible idiot fun-thing", "graphical image file", "graphic interchange format"], "graphic interchange format"),
    
     new Question("JavaScript is said to have been created in ___ days.", ["22", "10", "30", "5"], "10"), 
    
     new Question("The CSS property that affects whether an HTML element is seen or unseen is ___.", ["reveal", "disclose", "hidden", "visibility"], "visibility"), 
    
     new Question("Who is credited with inventing the World Wide Web?", ["Steve Jobs", "Bill Gates", "Tim Berners-Lee", "Kanye West"], "Tim Berners-Lee"), 
    
     new Question("DOM refers to ___.", ["document object model", "dynamic osscilating modulator", "doxastic object method", "developer off meds"], "document object model") 
    
]; //closes array

var quiz = new Question(questions);

populate();
//end function-obj3