console.log("Library Project Using ES6");

class ShowRoom {
    constructor(carName, carModel, carPrice, carType) {
        this.carName = carName;
        this.carModel = carModel;
        this.carPrice = carPrice;
        this.carType = carType;
    }

}

class ShowFormValues {
    constructor() {

    }

    add(car) {
        console.log("Adding");
        let table = document.getElementById("tableBody");
        let str = ` <tr>
                        <td>${car.carName}</td>
                        <td>${car.carModel}</td>
                        <td>${car.carPrice}</td>
                        <td>${car.carType}</td>
                    </tr>`
        table.innerHTML += str;
    }

    clear() {
        let form = document.getElementById("showRoomForm");
        form.reset();
    }

    test(car) {
        if (car.carName.length < 3 || car.carModel.length < 4 || car.carPrice.length < 6) {
            return false;
        }
        else {
            return true;
        }
    }

    message(type, displayMessage) {
        let text = document.getElementById('message');
        text.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>Message:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">X</span>
                                </button>
                            </div>`;
        setTimeout(function () {
            text.innerHTML = ''
        }, 3500);
    }
}

let carName = document.getElementById("carName");
carName.addEventListener("blur", function(){
    if(carName.value === ""){
        carName.classList.add("is-invalid");
    }
    else{
        carName.classList.remove("is-invalid");
    }
});

let carModel = document.getElementById("carModel");
carModel.addEventListener("blur", function(){
    let regex = /^([0-9]){4}$/;
    let str = carModel.value;
    if(regex.test(str)){
        carModel.classList.remove("is-invalid");
    }
    else{
        carModel.classList.add("is-invalid");
    }
});

let carPrice = document.getElementById("carPrice");
carPrice.addEventListener("blur", function(){
    let regex = /^[0-9]{5}/;
    let str = carPrice.value;
    if(regex.test(str)){
        carPrice.classList.remove("is-invalid");
    }
    else{
        carPrice.classList.add("is-invalid");
    }
});

let submit = document.getElementById("submit");
submit.addEventListener("click", carDetails);

function carDetails(e) {
    e.preventDefault();
    let carName = document.getElementById("carName").value;
    let carModel = document.getElementById("carModel").value;
    let carPrice = document.getElementById("carPrice").value;
    let ctHatch = document.getElementById("hatchbackId");        // ct is for Car Type
    let ctSedan = document.getElementById("sedanId");
    let ctCrossover = document.getElementById("crossoverId");
    let ctSuv = document.getElementById("suvId");
    let carType;

    if (ctHatch.checked) {
        carType = ctHatch.value;
    }
    else if (ctSedan.checked) {
        carType = ctSedan.value;
    }
    else if (ctCrossover.checked) {
        carType = ctCrossover.value;
    }
    else if (ctSuv.checked) {
        carType = ctSuv.value;
    }

    let car = new ShowRoom(carName, carModel, carPrice, carType);

    let values = new ShowFormValues();
    if (values.test(car)) {
        values.add(car);
        values.clear();
        values.message("success", 'Car has been placed Successfully');
        let detailCar = localStorage.getItem("carDetail");
        if (detailCar == null){
            carArr = [];
        }
        else{
            carArr = JSON.parse(detailCar);
        }
        carArr.push(car);
        console.log(carArr);
        localStorage.setItem("carDetail", JSON.stringify(carArr));
    }
    else {
        values.message("danger", "Car Has not been placed Successfully");
    }

}