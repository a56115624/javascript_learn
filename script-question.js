// 製作一個問答程式

var question = [
{
    prompt:"香蕉是什麼顏色?\n (a)紅色 (b)黃色 (c)綠色",
    answer:"b"
},
{
    prompt:"草莓是什麼顏色?\n (a)紅色(b)青色(c) 粉色",
    answer:"a"
},
{
    prompt:"1公尺等於幾公分?\n(a) 1 (b) 10 (c) 100",
    answer:"c"
}
]
var score = 0;
for(var i=0; i<question.length; i++){
    var input = prompt(question[i].prompt);
    if(input== question[i].answer){
        score++;
        alert("答對了!");
    }
    else{
        alert("答錯了");
    }
}
alert("總共答對了"+score+"題")