let reviews = [
    {
        id: 1,
        name: "Mr. A",
        img: "images/img.jpg",
        job: "UI design",
        text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex voluptates iure. ",

    },
    {
        id: 2,
        name: "Mr. B",
        img: "images/img.jpg",
        job: "Ux design",
        text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex voluptates iure. ",

    },
    {
        id: 3,
        name: "Mr. C",
        img: "images/img.jpg",
        job: "Graphic design",
        text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex voluptates iure. ",

    },
    {
        id: 4,
        name: "Mr. D",
        img: "images/img.jpg",
        job: "Web design",
        text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex voluptates iure. ",

    },
];

// select items
let img = document.getElementById("person-img");
let author = document.getElementById("author");
let job = document.getElementById('job');
let info = document.getElementById('info');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let random = document.getElementById('random');

let currentItem = 0;
window.addEventListener('DOMContentLoaded', function (e) {
    showPerson(currentItem)
});

// show person function 

function showPerson(person) {
    let item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

next.addEventListener('click', function (e) {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }

    showPerson(currentItem);
});


prev.addEventListener('click', function (e) {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }

    showPerson(currentItem);
});


function randomNumber() {
    return Math.floor(Math.random() * reviews.length)
};

random.addEventListener('click', function (e) {
    showPerson(randomNumber());

});
