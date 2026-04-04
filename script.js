let name = document.getElementById("name");
let email = document.getElementById("email");
let loc = document.getElementById("loc");
let msg = document.getElementById("msg");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let fname = name.value;
    let femail = email.value;
    let floc = loc.value;
    let fmsg = msg.value;
    let arr = [fname, femail, floc, fmsg];
    
    console.log(arr);
    form.reset();
})

const images = [
  "assets/images/hero.webp",
  "assets/images/pricing-bg.webp"
];

let loadedCount = 0;
const totalImages = images.length;

function imageLoaded() {
  loadedCount++;

  if (loadedCount === totalImages) {
    const loader = document.getElementById("loader");

    // small delay = smoother feel
    setTimeout(() => {
      loader.classList.add("hide");

      document.body.classList.remove("loading");
      setTimeout(() => {
        loader.style.display = "none";
      }, 700);

    }, 300);
  }
}

// preload images
images.forEach(src => {
  const img = new Image();
  img.src = src;
  img.onload = imageLoaded;
  img.onerror = imageLoaded;
});
