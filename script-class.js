//class


class Phone{
    constructor(number,years,is_waterproof){
        this.number=number;
        this.years = years;
        this.is_waterproof = is_waterproof; 
    }
    phone_age(){
        return 2021 - this.years;
    }

}
var phone1 = new Phone("123",2020,false);
var phone2 = new Phone("789",2020, true);
var phone3 = new Phone("798465",2016, true);
document.write(phone3.phone_age());

// var phone1 = {
//     number:"123",
//     years:2020,
//     is_waterproof:false,
//     phone_age:function(){
//         return 2021-this.years;
//     }
// }

// var phone2 = {
//     number:"456",
//     years:2018,
//     is_waterproof:false,
//     phone_age:function(){
//         return 2021 -this.years;
//     }
// }

// var phone3 = {
//     number:"789",
//     years:2018,
//     is_waterproof:true,
//     phone_age:function(){
//         return 2021 -this.years;
//     }
// }