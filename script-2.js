//如何使用字串 字串的用法
var phrase = "hello\" Mr.white"
document.write(phrase);


document.write("<br/>");

var phrase = "hello Mr.white"+ "haha";
var text = "哈哈";
document.write(phrase+text+"嘿嘿");

document.write("<br/>");
//算這段話裡有幾個字
document.write(phrase.length);


document.write("<br/>");
//toUpperCase() 把所有字母都變成大寫
document.write(phrase.toUpperCase());


document.write("<br/>");
//toLowerCase() 把所有字母都變成小寫
document.write(phrase.toLowerCase());



document.write("<br/>");
// 回傳pharse裡面的第幾位 
document.write(phrase.charAt(1));

document.write("<br/>");
// 回傳indexOf裡面的字在第幾位 
//indexOf 如果裡面是沒有的字,那他會回傳-1
document.write(phrase.indexOf("l"));


document.write("<br/>");
// 回傳substring h中間有的字串
document.write(phrase.substring(0,5));


