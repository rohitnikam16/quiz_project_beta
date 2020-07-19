function Quiz(questions) {
	this.questions = questions;
	this.questionIndex = 0;
	let score = 0;
	
	this.guess = function(answer) {
	
	if(this.getQuestionByIndex().correctAnswer(answer)) {
		score++;
		}
	this.questionIndex++;
}
	this.getScore = function(){
		return score;
	}
}

Quiz.prototype.getQuestionByIndex = function() {
	return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function() {
	return this.questions.length === this.questionIndex ;
}

