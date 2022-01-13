// 物件 object
var moive ={
    title:"刻在你心底的名子",
    maker:"氧氣電影",
    duration:114,
    actors:[
        {
            name:"謝明劭",
            age:29,
            is_male:true
        },
        {
            name:"王好狗",
            age:18,
            is_male:false
        }
    ]
};

document.write(moive.duration);
document.write("</br>");
document.write(moive.actors[0].name);
document.write("</br>");
document.write(moive.actors[1].is_male);