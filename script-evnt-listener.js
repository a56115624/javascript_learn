// event listener  監聽監控使用者是否有用我的程式
// function handle_click(element){
//     element.innerText = "按屁阿";
//     element.style.color = "red";
    // alert("叫妳給我按");
    // console.log(element);

    

var btn = document.getElementById("btn");
btn.addEventListener("click",function(){
    alert("叫妳按就按阿");
    this.innerText = "按屁阿";
    this.style.color = "red";
})