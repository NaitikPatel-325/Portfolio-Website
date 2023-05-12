//CAROUSEL BUTTON
const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) {
      newIndex = slides.children.length - 1;
    }
    if (newIndex >= slides.children.length) {
      newIndex = 0;
    }
    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
    return false;
  });
});
//FEEDBACK FORM
function validateForm() {
  let x = document.forms["myForm"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  let y = document.forms["myForm"]["Mobile no"].value;
  if (isNaN(y) || y > 9999999999 || y < 1000000000) {
    alert("Check Your Number");
    return false;
  }
  let z = document.forms["myForm"]["Feedback"].value;
  if (z == "") {
    alert("Feedback must be filled out");
    return false;
  }
}
//dark mode and light mode
var toggleBtn = document.getElementById('toggleBtn');

function imagefun() {
  document.body.classList.toggle('dark-mode');

  var Image_Id = document.getElementById('getImage');
  if (Image_Id.src.match("dark.jpg")) {
    Image_Id.src = "light.png";
  }
  else {
    Image_Id.src = "dark.jpg";
  }
}
//contect form
function validateForm1() {
  let x = document.forms["MyForm"]["name"].value;
  if (x == " ") {
    alert("Name must be filled out");
    return false;
  }
  let y = document.forms["MyForm"]["Mobile no"].value;
  if (isNaN(y) || y > 9999999999 || y < 1000000000) {
    alert("Check Your Number");
    return false;
  }
  let z = document.forms["MyForm"]["Message"].value;
  if (z == "") {
    alert("Message must be filled out");
    return false;
  }
}
//button
var acc = document.getElementsByClassName("buttith");
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel1 = this.nextElementSibling;
    console.log(panel1);
    if (panel1.style.display === "block") {
      panel1.style.display = "none";
    } else {
      panel1.style.display = "block";
    }
  });
}
//one type of widjet
const links = document.querySelectorAll('li');
const content = document.querySelectorAll('.link-content');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target.className;
    content.forEach(item => {
      item.classList.remove('active');
      if (item.classList.contains(target)) {
        item.classList.add('active');
      }
    });
  });
});
//drag and drop
var rows = 2;
var columns = 2;

var curTile;
var otherTile;

window.onload = function () {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("img");
      tile.src = "images/blank.jpg";

      tile.addEventListener("dragstart", dragStart);
      tile.addEventListener("dragover", dragOver);
      tile.addEventListener("dragenter", dragEnter);
      tile.addEventListener("dragleave", dragLeave);
      tile.addEventListener("drop", dragDrop);
      tile.addEventListener("dragend", dragEnd);

      document.getElementById("board").append(tile);
    }
  }
  let pieces = [];
  for (let i = 1; i <= rows * columns; i++) {
    pieces.push(i.toString());
  }
  for (let i = 0; i < pieces.length; i++) {
    let tile = document.createElement("img");
    tile.src = "./images/" + pieces[i] + ".png";

    tile.addEventListener("dragstart", dragStart);
    tile.addEventListener("dragover", dragOver);
    tile.addEventListener("dragenter", dragEnter);
    tile.addEventListener("dragleave", dragLeave);
    tile.addEventListener("drop", dragDrop);
    tile.addEventListener("dragend", dragEnd);
    document.getElementById("pieces").append(tile);
  }
}

function dragStart(e) {
  curTile = this;
}
function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}
function dragLeave(e) {
  // do nothing
}

function dragDrop(e) {
  otherTile = this;
}

function dragEnd(e) {
  let curImg = curTile.src;
  let otherImg = otherTile.src;
  curTile.src = otherImg;
  otherTile.src = curImg;
}

//location
function geoFindMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");
  mapLink.href = "";
  mapLink.textContent = "";
  function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      status.textContent = "";
      mapLink.href =
          `https://www.openstreetmap.org/#map=18/${latitude}/${longitude
          } `;
      mapLink.textContent = `Latitude: ${latitude} °,
  Longitude: ${longitude} °`;
  }
  function error() {
      status.textContent = "Unable to retrieve your location";
  }
  if (!navigator.geolocation) {
      status.textContent = "Geolocation is not supported by your browser";
  } else {
      status.textContent = "Locating…";
      navigator.geolocation.getCurrentPosition(success, error);
  }
}
document.querySelector("#find-me").addEventListener("click",
geoFindMe)
