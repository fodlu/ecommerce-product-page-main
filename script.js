const next = document.querySelectorAll("next");
const previous = document.querySelectorAll("previous");
const navlinks = document.querySelector(".navlinks");
const links = navlinks.querySelectorAll("a");
const bigImage = document.querySelector(".bigImage");
const smallImage = document.querySelector(".smallImage");
const small = document.querySelectorAll(".small");
const lightSmallImg = document.querySelectorAll(".lightSmallImg");
const overlay = document.querySelector(".overlay");
const lightBox = document.querySelector(".lightBox");
const lightSmall = document.querySelector(".lightSmall");
const lightHero = document.querySelector(".lightHero");
const closeBtn = document.querySelectorAll(".closeBtn");
const lightNext = document.querySelector(".lightNext");
const lightPre = document.querySelector(".lightPre");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const itemCount = document.querySelector(".itemCount");
const addToCart = document.querySelector(".addToCart");
const cartNum = document.querySelector(".cartNum");
const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cartList");
const filled = document.querySelector(".filled");
const empty = document.querySelector(".empty");
const checkout = document.querySelector(".checkout");
const total = document.querySelector(".total");
const number = document.querySelector(".number");
let cost = document.querySelector(".cost");
const prices = document.querySelector(".prices");
const clear = document.querySelector(".delete");
const lightpreM = document.querySelector(".lightpreM");
const lightNexM = document.querySelector(".lightNexM");
const ham = document.querySelector(".ham");

smallImage.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("small")) {
    small.forEach((smalls) => {
      smalls.classList.remove("active");
    });
    target.classList.add("active");
    bigImage.src = `images/image-product-${target.dataset.tab}.jpg`;
  }
});

lightSmall.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("lightSmallImg")) {
    lightSmallImg.forEach((smalls) => {
      smalls.classList.remove("active");
    });
    target.classList.add("active");
    lightHero.src = `images/image-product-${target.dataset.tab}.jpg`;
  }
});

bigImage.addEventListener("click", () => {
  overlay.classList.toggle("active");
  lightBox.classList.toggle("active");
});

let count = 1;
lightNext.addEventListener("click", () => {
  lightHero.src = `images/image-product-${count + 1}.jpg`;
  count++;

  lightSmallImg.forEach((smalls) => {
    smalls.classList.remove("active");
  });
  lightSmallImg[count - 1].classList.add("active");

  if (count === 4) count = 0;
});

lightPre.addEventListener("click", () => {
  count--;
  if (count === 0) count = 4;

  lightHero.src = `images/image-product-${count}.jpg`;

  lightSmallImg.forEach((smalls) => {
    smalls.classList.remove("active");
  });
  lightSmallImg[count - 1].classList.add("active");
});

closeBtn.forEach((close) => {
  close.addEventListener("click", () => {
    overlay.classList.remove("active");
    lightBox.classList.remove("active");
    navlinks.classList.remove("active");
    close.classList.remove("active");
  });
});

let item = 0;
plus.addEventListener("click", () => {
  item++;
  itemCount.textContent = item;
});
minus.addEventListener("click", () => {
  item--;
  if (item < 0) {
    item = 0;
  }
  itemCount.textContent = item;
});

addToCart.addEventListener("click", () => {
  if (item > 0) cartNum.classList.add("active");
  cartNum.textContent = item;
  cartList.classList.remove("active");
});

cart.addEventListener("click", () => {
  if (item > 0) {
    cartList.classList.toggle("active");
    filled.classList.remove("hidden");
    checkout.classList.remove("hidden");
    empty.classList.add("hidden");

    number.textContent = item;
    cost = prices.textContent;

    cost.textContent = prices.textContent;

    total = total.textContent = `${cost * item}.00`;
  } else {
    cartList.classList.toggle("active");
    filled.classList.add("hidden");
    checkout.classList.add("hidden");
  }
});

clear.addEventListener("click", () => {
  empty.classList.remove("hidden");
  filled.classList.add("hidden");
  checkout.classList.add("hidden");
  item = 0;
  cartNum.textContent = 0;
  itemCount.textContent = 0;
});

lightNexM.addEventListener("click", () => {
  bigImage.src = `images/image-product-${count + 1}.jpg`;
  count++;

  if (count === 4) count = 0;
});

lightpreM.addEventListener("click", () => {
  count--;
  if (count === 0) count = 4;

  bigImage.src = `images/image-product-${count}.jpg`;
});

ham.addEventListener("click", () => {
  navlinks.classList.add("active");
  closeBtn.forEach((close) => close.classList.add("active"));
  overlay.classList.add("active");
});
