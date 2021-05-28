const likeBtn = document.querySelector(".commentLikeBtn");
const hateBtn = document.querySelector(".commentHateBtn");

let likeCount = document.querySelector("#likeCount");
let hateCount = document.querySelector("#hateCount");
let handleLikeBtn = false;
let handleHateBtn = false;

//기존 댓글 좋아요 싫어요 버튼
const changeLikeValue = () => {
  if (handleHateBtn) {
    handleLikeBtn = true;
    likeCount.textContent++;
    likeBtn.classList.add("commentLikeBtnActive");
    likeBtn.classList.remove("commentLikeBtn");

    handleHateBtn = false;
    hateCount.textContent--;
    hateBtn.classList.add("commentHateBtn");
    hateBtn.classList.remove("commentHateBtnActive");
  } else if (handleLikeBtn) {
    handleLikeBtn = false;
    likeCount.textContent--;
    likeBtn.classList.add("commentLikeBtn");
    likeBtn.classList.remove("commentLikeBtnActive");
  } else if (!handleLikeBtn) {
    handleLikeBtn = true;
    likeCount.textContent++;
    likeBtn.classList.add("commentLikeBtnActive");
    likeBtn.classList.remove("commentLikeBtn");
  }
};

const changeHateValue = () => {
  if (handleLikeBtn) {
    handleHateBtn = true;
    hateCount.textContent++;
    hateBtn.classList.add("commentHateBtnActive");
    hateBtn.classList.remove("commentHateBtn");

    handleLikeBtn = false;
    likeCount.textContent--;
    likeBtn.classList.add("commentLikeBtn");
    likeBtn.classList.remove("commentLikeBtnActive");
  } else if (handleHateBtn) {
    handleHateBtn = false;
    hateCount.textContent--;
    hateBtn.classList.add("commentHateBtn");
    hateBtn.classList.remove("commentHateBtnActive");
  } else if (!handleHateBtn) {
    handleHateBtn = true;
    hateCount.textContent++;
    hateBtn.classList.add("commentHateBtnActive");
    hateBtn.classList.remove("commentHateBtn");
  }
};

const activeBtn = () => {
  if (localStorage.getItem("USER")) {
    likeBtn.addEventListener("click", () => changeLikeValue());
    hateBtn.addEventListener("click", () => changeHateValue());
  }
};

activeBtn();
