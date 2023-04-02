const shareMobile = document.getElementsByClassName("share-wrapper")[0];
const bottomContainer = document.getElementsByClassName("bottom-container")[0];
const bottomAcvitiyContainer = document.getElementsByClassName(
  "bottom-container-activity"
)[0];
const shareActivity = document.getElementById("share-activity-wrapper");

shareMobile.addEventListener("click", () => {
  if (window.innerWidth <= 1099) {
    bottomContainer.classList.toggle("remove");
    bottomAcvitiyContainer.classList.toggle("remove");
  }
});

shareActivity.addEventListener("click", () => {
  if (window.innerWidth <= 1099) {
    bottomContainer.classList.toggle("remove");
    bottomAcvitiyContainer.classList.toggle("remove");
  }
});

shareMobile.addEventListener("click", () => {
  if (window.innerWidth >= 1099) {
    bottomAcvitiyContainer.classList.toggle("remove");
  }
});

shareActivity.addEventListener("click", () => {
  if (window.innerWidth >= 1099) {
    bottomAcvitiyContainer.classList.toggle("remove");
  }
});
