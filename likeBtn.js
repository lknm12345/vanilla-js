const likeBtn = document.querySelector(".commentLikeBtn");
const hateBtn = document.querySelector(".commentHateBtn");

let likeCount = document.querySelector("#likeCount");
let hateCount = document.querySelector("#hateCount");
let handleLikeBtn = false;
let handleHateBtn = false;

//댓글 좋아요 싫어요 버튼
const changeLikeValue = () => {
  if (!handleLikeBtn) {
    handleLikeBtn = true;
    likeCount.textContent++;
    likeBtn.classList.add("commentLikeBtnActive");
    likeBtn.classList.remove("commentLikeBtn");
  } else {
    handleLikeBtn = false;
    likeCount.textContent--;
    likeBtn.classList.add("commentLikeBtn");
    likeBtn.classList.remove("commentLikeBtnActive");
  }
};

const changeHateValue = () => {
  if (!handleHateBtn) {
    handleHateBtn = true;
    hateCount.textContent++;
    hateBtn.classList.add("commentHateBtnActive");
    hateBtn.classList.remove("commentHateBtn");
  } else {
    handleHateBtn = false;
    hateCount.textContent--;
    hateBtn.classList.add("commentHateBtn");
    hateBtn.classList.remove("commentHateBtnActive");
  }
};

const activeBtn = () => {
  likeBtn.addEventListener("click", () => changeLikeValue());
  hateBtn.addEventListener("click", () => changeHateValue());
};

activeBtn();
