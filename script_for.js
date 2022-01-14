// for 迴圈


//下面這個適用while來寫
// var i = 0
// while(i<10){
//     document.write(i);
//     document.write("<br/>");
//     i++;
// }

//嘗試用for改寫

// for(var i = 0; i<=10; i++){
//     document.write(i);
//     document.write("<br/>");
// }

// 取出陣列裡面所有的值
var friends = ["小黑","小白","小黃","小綠"];
for(var i=0; i<friends.length ;i++){
    document.write(friends[i]);
    document.write("<br/>");
}