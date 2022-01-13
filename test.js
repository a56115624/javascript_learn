var password =56115624;
var input;
var count = 0;
var count_limit = 6;
var out_of_limit = false;

while(password!=input && count<=count_limit){
    count++
    if(count<=count_limit){
    input =prompt("請輸入密碼")
    }
    else{
        out_of_limit = true
    }
}
if(out_of_limit){
    alert("亂七八糟")
    document.write("7414")
} 
else{
    alert("恭喜妳")
    document.write("歡迎來到我的王國")
}