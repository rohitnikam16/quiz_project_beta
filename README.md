# quiz_project
This is quiz app created to conduct quiz, main objective of this project is to apply Object Oriented Programming (OOP) concepts.

Concepts applied here are:

1- Polymorphism: guess function in quiz_controller.js and  app.js , function name is same
   in both but their functionality is different , here they are differentiated by type 
   and number of parameters passed.
   
2- Encapsulation: here quiz score is kept private (hiding details) and can be accessed 
   only by function getScore() which are present inside same object constructor, 
   thus we can say here that variable score and function are binded together 
   which is nothing but encapsulation.
   
3- Abstraction: meaning hiding implementation , here we have not implemented functions 
   inside app.js, rather functions are implemented separately and we get to see only 
   essential things in app.js which we need to know.
   
4- Association: meaning relationship between objects, here many question objects have 
   relationship with one quiz object. Here relationship is many-to-one.
