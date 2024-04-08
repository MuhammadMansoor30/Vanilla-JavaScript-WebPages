console.log("CV Screener Project");

let dataCv = [
    {
        name: "Muhammad Muaz",
        age: 20,
        experience: 1,
        address: "Lahore",
        language: "Python",
        framework: "React",
        image: "https://randomuser.me/api/portraits/men/75.jpg"
    },

    {
        name: "Malik Asif",
        age: 25,
        experience: 3,
        address: "Faisalabad",
        language: "JavaScript",
        framework: "Angular",
        image: "https://randomuser.me/api/portraits/men/65.jpg"
    },

    {
        name: "Sher Khan",
        age: 35,
        experience: 10,
        address: "Peshawar",
        language: "C++",
        framework: false,
        image: "https://randomuser.me/api/portraits/men/35.jpg"
    },

    {
        name: "Maria Aftab",
        age: 27,
        experience: 4,
        address: "Quetta",
        language: "Ruby",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/women/26.jpg"
    },

    {
        name: "Javed Ahmed",
        age: 29,
        experience: 6,
        address: "Islamabad",
        language: "Java",
        framework: "Node",
        image: "https://randomuser.me/api/portraits/men/70.jpg"
    },

    {
        name: "Saba Akbar",
        age: 31,
        experience: 8,
        address: "Karachi",
        language: "JavaScript",
        framework: "Angular",
        image: "https://randomuser.me/api/portraits/women/31.jpg"
    },

    {
        name: "Nadia Malik",
        age: 35,
        experience: 9,
        address: "Islamabad",
        language: "Python",
        framework: "Flask",
        image: "https://randomuser.me/api/portraits/women/49.jpg"
    },

    {
        name: "Chaudhry Shafique",
        age: 32,
        experience: 10,
        address: "Sialkot",
        language: "JavaScript",
        framework: "React",
        image: "https://randomuser.me/api/portraits/men/58.jpg"
    },

];

// CV Iterator
function iteratorCv(cvProfiles) {
    let noOfCv = 0;
    return {
        next: function () {
            return noOfCv < cvProfiles.length ?
                {value: cvProfiles[noOfCv++], done: false } :
                {done: true }
        }
    };
}

let people = iteratorCv(dataCv);
nextCv();  // Used here to show first cv when the code executes

let btnNext = document.getElementById("next");
btnNext.addEventListener("click", nextCv);

function nextCv() {
    let currProfile = people.next().value;  // We have to use same function and value names as used inside iterator function
    let image = document.getElementById("image");
    let profile = document.getElementById("profile");
    if (currProfile != undefined) {
        image.innerHTML = `<img src='${currProfile.image}'>`;
        profile.innerHTML =`<ul class="list-group">
                                <li class="list-group-item">Name: ${currProfile.name}</li>
                                <li class="list-group-item">${currProfile.age} years old</li>
                                <li class="list-group-item">Has Experience of ${currProfile.experience} years</li>
                                <li class="list-group-item">Lives in ${currProfile.address}</li>
                                <li class="list-group-item">Code using ${currProfile.language}</li>
                                <li class="list-group-item">Uses ${currProfile.framework} framework</li>
                            </ul>`;
    }
    else{
        alert("Cv Profiles have been ended");
        location.reload();    // window object is global so it doesn't need to be written
    }
}