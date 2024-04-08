console.log("Form Validation Project");
let nameTest = false;
let emailTest = false;
let phoneTest = false;
let addressTest = false;
let destinTest = false;
let carTest = false;
let arr = [];
$('#success').hide();   // Hiding them at the start so that heading can go to its original place
$('#failue').hide();

let userName = document.getElementById("name");
userName.addEventListener("blur", ()=>{
    let regex = /^[a-zA-Z][a-zA-z0-9]{2,10}$/;
    let str = userName.value;
    arr.push(str);
    if(regex.test(str)){
        userName.classList.remove('is-invalid');
        localStorage.setItem("FormValue", JSON.stringify(arr));
        nameTest = true;
    }
    else{
        userName.classList.add('is-invalid');
        nameTest = false;
    }
});

let email = document.getElementById('email');
email.addEventListener('blur', ()=>{
    let regex = /^([a-zA-Z0-9\.\-]+)@([a-zA-Z0-9\_\.]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    arr.push(str);
    if(regex.test(str)){;
        email.classList.remove('is-invalid');
        localStorage.setItem("FormValue", JSON.stringify(arr));
        emailTest = true;
    }
    else{
        email.classList.add('is-invalid');
        emailTest = false;
    }
});

let phoneNumber = document.getElementById("phone");
phoneNumber.addEventListener('blur', ()=>{
    let regex = /^([0-9]){4}-([0-9]){7}$/;
    let str = phoneNumber.value;
    arr.push(str);
    if(regex.test(str)){
        phoneNumber.classList.remove('is-invalid');
        phoneTest = true;
        localStorage.setItem("FormValue", JSON.stringify(arr));
    }
    else{
        phoneNumber.classList.add('is-invalid');
        phoneTest = false;
    }
});

let address = document.getElementById("address");
address.addEventListener('blur', ()=>{
    let regex = /^([a-zA-Z0-9\ ]){10}/;
    let str = address.value;
    arr.push(str);
    if(regex.test(str)){
        addressTest = true;
        localStorage.setItem("FormValue", JSON.stringify(arr));
        address.classList.remove('is-invalid');
    }
    else{
        addressTest = false;
        address.classList.add("is-invalid");
    }
});

let destination = document.getElementById("destination");
destination.addEventListener('blur', ()=>{
    let regex = /^([a-zA-Z0-9\.]){5}/;
    let str = destination.value;
    arr.push(str);
    if(regex.test(str)){
        destinTest = true;
        destination.classList.remove("is-invalid");
        localStorage.setItem("FormValue", JSON.stringify(arr));
    }
    else{
        destinTest = false;
        destination.classList.add("is-invalid");
    }
});

let car = document.getElementById('car');
car.addEventListener('blur', ()=>{
    let str = car.value;
    arr.push(str);
    carTest = true;
    localStorage.setItem("FormValue", JSON.stringify(arr));
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();
    if(nameTest && emailTest && phoneTest && addressTest && carTest && destinTest){
        let success = document.getElementById("success");
        success.classList.add('show');
        $('#success').show();
        $('#failure').hide();
    }
    else{
        let failure = document.getElementById("failure");
        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();   // Jquery selectors. Faster than query selectors. For showing and hiding contents of an element.
    }
});
