
//create variables for each element
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal")

//open modal function
const openModal = function() {
    modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
}

//will do something for all show modal buttons
for( let i=0; i<btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener("click", openModal)
}

//close modal function
const closeModal = function() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden")

}

//close modal button
closeModalBtn.addEventListener("click", closeModal)

//close modal by clicking outside area of modal
overlay.addEventListener("click", closeModal)

//close modal by using esc key
document.addEventListener("keydown", function (e){
    if(e.key === 'Escape' && !modal.classList.contains("hidden")){
        closeModal()
    }
});