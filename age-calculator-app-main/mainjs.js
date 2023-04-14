//input dates
const dayIn = document.getElementById("day");
const monthIn = document.getElementById("month");
const yearIn = document.getElementById("year");
//output dates
const dayOut = document.querySelector(".dayOut");
const monthOut = document.querySelector(".monthOut");
const yearOut = document.querySelector(".yearOut");
//errors
const dayError = document.querySelector(".day_error");
const monthError = document.querySelector(".month_error");
const yearError = document.querySelector(".year_error");
const inputError = "This field is required";
const dayInputError = "Must be a valid day";
const monthInputError = "Must be a valid month";
const yearInputError = "Must be in the past";
const resultButton = document.querySelector(".submit_btn");

function dayChecker(){
    let value = dayIn.value;
    if(value == ""){
        dayError.innerHTML = inputError;
        return false;
    }
    else if(value < 1 || value > 31){
        dayError.innerHTML = dayInputError;
        return false;
    }
    else{
        dayError.innerHTML = "";
        return true
    }
}
function monthChecker(){
    let value = monthIn.value;
    if(value == ""){
        monthError.innerHTML = inputError;
        return false;
    }
    else if(value < 1 || value > 12){
        monthError.innerHTML = monthInputError;
        return false;
    }
    else{
        monthError.innerHTML = "";
        return true
    }
}

function yearChecker(){
    let value = yearIn.value;
    let currentYear = new Date().getFullYear();
    if(value == ""){
        yearError.innerHTML = inputError;
        return false;
    }
    else if(value > currentYear){
        yearError.innerHTML = yearInputError;
        return false;
    }
    else{
        yearError.innerHTML = "";
        return true
    }
}

function ageCalculator(birthday){
    var birthDate = new Date(birthday);
    var currentDate = new Date ();
    var years = currentDate.getFullYear() - birthDate.getFullYear();
    var months = currentDate.getMonth() - birthDate.getMonth();
    var days = currentDate.getDate() - birthDate.getDate();
    
    if(months < 0 ||(months === 0 && days < 0)){
        years--;
        if(months === 0){
            months = 11
        }
        else{
            months = 12 + months;
        }
        days = 30 + days
    }
    yearOut.innerHTML = years;
    monthOut.innerHTML = months;
    dayOut.innerHTML = days;
}


resultButton.addEventListener ('click', function (calc) {
        calc.preventDefault();
        let day = dayChecker();
        let month = monthChecker();
        let year = yearChecker();
        if (!day || !month || !year)
            return;
        let birthday = `${monthIn.value}/${dayIn.value}/${yearIn.value}`;
        ageCalculator(birthday);
    })