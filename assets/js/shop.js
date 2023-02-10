/////////// SHOP PAGE ////////////
let shopBtns = Array.from(document.querySelectorAll(".shop-pop .btns .btn"));
let shopRows = Array.from(document.querySelectorAll(".shop-pop .slide"));
let currentSelect = document.querySelector(".select .current");
let selectList = document.querySelector(".select .list");
let selectListItems = document.querySelectorAll(".select .list li");
currentSelect.addEventListener("click", () => {
  selectList.classList.toggle("active");
});
shopBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    RemoveActives(shopBtns);
    btn.classList.add("active");
    RemoveActives(shopRows);
    shopRows[idx].classList.add("active");
  });
});
selectListItems.forEach((li) => {
  li.addEventListener("click", () => {
    currentSelect.textContent = li.textContent;
    RemoveActives(selectListItems);
    li.classList.add("active");
  });
});

function RemoveActives(arr) {
  arr.forEach((el) => {
    el.classList.remove("active");
  });
}
