const bannerContainerContacts = document.querySelector(".banner__container-contancts");
const bannerContainerContactsHiden = document.querySelector(".banner__container-contancts_hidden");


const bannerButton = document.querySelector(".banner__button");


bannerButton.addEventListener("click", () => {  
       
    bannerContainerContacts.classList.remove("banner__container-contancts_hidden");  
    bannerButton.classList.add("banner__button_bc");
})