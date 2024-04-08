console.log("Notes Web App Project");
showNotes();

// Functionqlity to add notes
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function() {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    // console.log(notesObj);
    addTxt.value = "";
    showNotes();
});
// Function to showNotes from Local Storage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html;
    notesObj.forEach(function(element, index) {
        html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text"> ${element}</p>
                    <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>`;
    })
    let notesElm = document.getElementById("notes");
    if(notesObj.length != 0){
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML = `<b>Empty. Add Notes To Show</b>`;
    }
}

// Function to delete Note
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    // console.log("deleting", index);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

// Function to search Notes
let search = document.getElementById("searchTxt");
search.addEventListener("input", function() {
    let inputVal = search.value.toLowerCase();
    // console.log("Value is", inputVal);
    let noteCard = document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block"; // Shows that note(element) which is searched
        }
        else{
            element.style.display = "none"; // Displays nothing if element is not found
        }
        // console.log(cardTxt);
    });
})