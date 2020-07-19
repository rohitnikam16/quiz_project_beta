function populate() {
	if(quiz.isEnded()){
		showScores();
	}
	else {
		document.getElementById("question").innerHTML = quiz.getQuestionByIndex().text;
		var choices=quiz.getQuestionByIndex().choices;
		for(var i=0;i<choices.length;i++) {
			var element=document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn"+i,choices[i]);
		}
		showProgress();
	}
};

function showProgress(){
	var current= quiz.questionIndex+1;
	var element= document.getElementById("progress");
	element.innerHTML = "Question " + current + " of " + questions.length;
}

function guess( id, guess){
	document.getElementById(id).onclick = function(){
		quiz.guess(guess);
		populate();
	}
	
};

function showScores() {
	var gameOverHtml = "<h1>Result</h1>";
	gameOverHtml += "<h2 id='score'> Your score: " +quiz.getScore() + "</h2>" ;
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHtml ;
};

var questions = [
	new Question("Who invented ballpoint pen?", ["Biro Brothers","Waterman Brothers","Bicc Brothers","Write Brothers"],"Biro Brothers"),	
	new Question("The National police Academy is located at?", ["Abu Road","Dehradun","Hyderabad","Bangalore"],"Hyderabad"),	
	new Question("Which of these is favourite dish of Rohit?", ["rajma chawal","shahi paneer","sev tamatar","chhole"],"shahi paneer"),	
	new Question("Which country in India is the maximum consumer of water?", ["textile","engineering","paper and pulp","thermal power"],"thermal power"),	
	new Question("First woman to climb Mount Everest was?", ["chevza chi","Marie Perec","Junko Tabei","Indira Gandhi"],"Junko Tabei")	,
];

var quiz = new Quiz(questions);

populate();