
 var TimeRemaining = 30;


  

     
 $(".startBtn").on("click",function(){
    timeout = setInterval(function(){
        TimeRemaining--
         console.log(TimeRemaining)
         $("#time-remaining").text(TimeRemaining)
    if(TimeRemaining < 1){
         clearInterval(timeout)}
        
     },1000
    
     );
     $(this).hide()
     $("#time").show()
    
 })
var questions = [
    { question1:"what your favority movie?",
    answer1:["Brave heart","RockyI","Titanic","Coming to america"],
    correctanswer1:0

    },

    { question2:"Which of these is not a name of an NBA player?",
    answer2:["Jordan","Obama","Lebron","Kobe"],
    correctanswer2:1

    },
    { question3:"which NBA team won 2019 title?",
    answer3:["Lakers","Celtics","Raptors","Thunder"],
    correctanswer2:2

    },

]
console.log(questions[2].question3)
// $('#myForm input').on('change', function() {
//     alert($('input[name=radioName]:checked', '#myForm').val()); 
//  });