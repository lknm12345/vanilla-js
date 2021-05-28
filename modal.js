const modalBtn = document.getElementById("addComment");
const modalBg = document.querySelector(".modalBg");
const modalContent = document.querySelector(".modal");
const modalContent2 = document.querySelector(".modal2");
const deleteModalBtn = document.querySelector(".facebookBtn");
const deleteModalBtn2 = document.querySelector(".uploadCommentBtn");

const USERTOKEN = localStorage.getItem("USER");

const addModalStyle = () => {
  modalBg.classList.add("modalBgActive");

  if (USERTOKEN === "TOKEN") {
    modalContent.classList.add("modalActive");
    modalContent2.classList.remove("modal2");
    modalContent2.classList.add("modal2Active");
  }
};

const removeModalStyle = () => {
  modalBg.classList.remove("modalBgActive");
};

const setToken = () => {
  localStorage.setItem("USER", "TOKEN");
};

const reloading = () => {
  window.location.reload();
};

const openModal = () => {
  modalBtn.addEventListener("click", () => addModalStyle());
};

const closeModal = () => {
  deleteModalBtn.addEventListener("click", () => removeModalStyle());
  deleteModalBtn.addEventListener("click", () => setToken());
  deleteModalBtn.addEventListener("click", () => reloading());
  deleteModalBtn2.addEventListener("click", () => removeModalStyle());
};

const init = () => {
  openModal();
  closeModal();
};

init();
