const chatInput = document.querySelector(".modal2Input");
const chatBtn = document.querySelector(".uploadCommentBtn");
const chatContainer = document.querySelector(".commentContainer");
const chatBox = document.querySelector(".commentBox");

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();

//금지어
const BANWORD = ["사랑", "합격"];

//도배 방지를 위한 댓글 갯수
let oneUserOneChat = 0;

//삭제 함수
const handleDeleteChatList = (e) => {
  const item = e.target;
  if (item.classList[0] === "svg-inline--fa") {
    const list = item.parentElement.parentElement.parentElement;
    list.remove();
    oneUserOneChat--;
  }
};

//금지어 함수
const findBanWord = () => {
  const inputValue = chatInput.value;
  for (let i = 0; i < BANWORD.length; i++) {
    const find = BANWORD[i];
    if (inputValue.indexOf(find) >= 0) {
      return alert("금지어가 있습니다");
    }
  }
  if (true) {
    addChat();
  }
};

//댓글 추가 함수
const addChat = () => {
  const timeValue = year + "." + month + "." + date + "." + hour + ":" + minute;
  const inputValue = chatInput.value;

  if (inputValue === "") {
    return alert("내용을 입력해 주세요");
  } else if (oneUserOneChat === 0) {
    const chatDiv = document.createElement("div");
    chatDiv.classList.add("commentBox");
    chatDiv.innerHTML = `<div class="commentUserInfo">
  <div class="commentInfoLeft">
    <div class="commentUserImg"></div>
    <div class="commentUserSNS">
      <i class="fab fa-facebook-f"></i>
    </div>
    <div class="commentUserId">USER ID</div>
    <div class="commentGoToUser">
      <i class="fas fa-chevron-right"></i>
    </div>
    <div class="commentTime">${timeValue}</div>
  </div>
  <div class="commentInfoRight">
    <i class="fas fa-ellipsis-h"></i>
  </div>
</div>
<div class="commentText"><span id="spanspan">${inputValue}</span></div>
<div class="commentOption">
  <div class="commentOptionLeft">		
    <button class="commentChatBtn">		
      <i class="far fa-comment"></i>&nbsp;0
    </button>
  </div>
  <div class="commentOptionRight">
    <button class="commentLikeBtn">
      <i class="far fa-thumbs-up"></i>&nbsp;
      <span id='likeCount'>0</span>
    </button>
    <button class="commentHateBtn">
      <i class="far fa-thumbs-down"></i>&nbsp;
      <span id='hateCount'>0</span>
    </button>
    <button class="commentShareBtn">
      <i class="fas fa-share"></i>&nbsp;0
    </button>
  </div>
</div>`;
    chatContainer.append(chatDiv);
    chatInput.value = "";
    oneUserOneChat++;

    //자신의 좋아요 싫어요 버튼
    const myLikeBtn = chatDiv.querySelector(".commentLikeBtn");
    const myHateBtn = chatDiv.querySelector(".commentHateBtn");
    myLikeBtn.addEventListener("click", () => {
      alert("자신의 좋아요 버튼은 누를 수 없습니다.");
    });
    myHateBtn.addEventListener("click", () => {
      alert("자신의 싫어요 버튼은 누를 수 없습니다.");
    });

    //삭제 실행
    const deleteChatList = chatDiv.querySelector(".commentInfoRight");
    deleteChatList.addEventListener("click", (e) => handleDeleteChatList(e));

    //댓글 수정 함수
    const rewriteChat = () => {
      const newWrite = prompt("수정하시오");
      const currentValue = chatDiv.querySelector("#spanspan");
      currentValue.innerHTML = newWrite;
    };

    //수정 실행
    const rewriteChatBtn = chatDiv.querySelector(".commentChatBtn");
    rewriteChatBtn.addEventListener("click", () => rewriteChat());
  } else if (oneUserOneChat === 1) {
    alert("도배 방지"); //도배방지
  }
};

//댓글 추가 실행
const handleChatBtn = () => {
  chatBtn.addEventListener("click", () => findBanWord());
};

handleChatBtn();
