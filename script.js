//CAROUSEL BUTTON
const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) {
      newIndex = slides.children.length - 1;}
    if (newIndex >= slides.children.length) {
      newIndex = 0;}
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
  if(isNaN(y)||y>9999999999 || y<1000000000){
    alert("Check Your Number");
    return false;
  }
  let z = document.forms["myForm"]["Feedback"].value;
  if (z == "") {
    alert("Feedback must be filled out");
    return false;
  }
} 
//DARK AND LIGHT MODE
// const toggle = document.getElementById('toggleDark');
// const body = document.querySelector('body');

// toggle.addEventListener('click', function(){
//     console.log('hello');
//     this.classList.toggle('bi-moon');
//     if(this.classList.toggle('bi-brightness-high-fill')){
//         body.style.background = 'white';
//         body.style.color = 'black';
//         body.style.transition = '2s';
//     }else{
//         body.style.background = 'black';
//         body.style.color = 'white';
//         body.style.transition = '2s';
//     }
// });

var toggleBtn = document.getElementById('toggleBtn');

    function imagefun() {
        document.body.classList.toggle('dark-mode');

        var Image_Id = document.getElementById('getImage');
        if (Image_Id.src.match("dark_img-removebg-preview.png")) {
            Image_Id.src = "248.avif";
        }
        else {
            Image_Id.src = "248.avif";
        }
    }
 