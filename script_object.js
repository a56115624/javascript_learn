/*物件 object

key  value

鍵    值

*/

var person = {
    name :"小白",
    age:23,
    is_male:true,
    print_name:function(){
        document.write(this.name);
        // this.name = person.name
    }
}
person.print_name()


// document.write(person.name);

// var phrase ="hello";
// document.write(phrase);