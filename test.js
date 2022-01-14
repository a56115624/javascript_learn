// var password =56115624;
// var input;
// var count = 0;
// var count_limit = 6;
// var out_of_limit = false;

// while(password!=input && count<=count_limit){
//     count++
//     if(count<=count_limit){
//     input =prompt("請輸入密碼")
//     }
//     else{
//         out_of_limit = true
//     }
// }
// if(out_of_limit){
//     alert("亂七八糟")
//     document.write("7414")
// } 
// else{
//     alert("恭喜妳")
//     document.write("歡迎來到我的王國")
// }

// for (i=0 ; i<10 ; i++){
//     document.write(i);
//     document.write('</br>')
// }

var questions = [
    {
        prompt:"今天星期幾",
        answer:"4"
    },
    {
        prompt:"我想睡覺",
        answer:"YES"
    },
    {
        prompt:"我中午吃什麼",
        answer:"水餃"
    }
]
var score = 0;
for(var i=0; i<questions.length; i++){
    var input=prompt(questions[i].prompt);
    if(input==questions[i].answer){
        score++;
        alert("答對了");
    }
    else{
        alert("答錯了");
    }
}
alert("總共答對"+score+"題")
