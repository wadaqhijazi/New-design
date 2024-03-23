// toggel we want to put the open class onthe setting box and fa-spin tho toggel

document.querySelector(".gear").onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".setting-box").classList.toggle("open");
};

// Random Background Option
let backgroundOption = true;

// Variable To Control The Background Interval
let backgroundInterval;

// Check If There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

// Check If Random Background Local Storage Is Not EMpty
if (backgroundLocalItem !== null) {
  // Remove Active Class From All Spans
  document.querySelectorAll(".random-background span").forEach((element) => {
    element.classList.remove("active");
  });

  if (backgroundLocalItem === "true") {
    backgroundOption = true;

    document.querySelector(".random-background .yes").classList.add("active");
  } else {
    backgroundOption = false;

    document.querySelector(".random-background .no").classList.add("active");
  }
}

// color  setting switch the active color
const colorList = document.querySelectorAll(".color-lists li");

colorList.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.target.dataset.color);
    // document of element its the root
    document.documentElement.style.setProperty(
      "--main-color",
      e.currentTarget.dataset.color
    );
    window.localStorage.setItem("color-option", e.currentTarget.dataset.color);
    handelActive(e);
  });
});

if (window.localStorage.getItem("color-option")) {
  document.documentElement.style.setProperty(
    "--main-color",
    window.localStorage.getItem("color-option")
  );
  document.querySelectorAll(".color-lists li").forEach((element) => {
    element.classList.remove("active");
    if (element.dataset.color === window.localStorage.getItem("color-option")) {
      element.classList.add("active");
    }
  });
}

// setting switch the active yse or  no

const randomeBackground = document.querySelectorAll(".random-background span");

randomeBackground.forEach((span) => {
  span.addEventListener("click", (e) => {
    e.currentTarget.parentElement
      .querySelectorAll(".active")
      .forEach((element) => {
        element.classList.remove("active");
      });
    e.target.classList.add("active");

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      window.localStorage.setItem("background_option", true);
      randomeiz();
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
      window.localStorage.setItem("background_option", false);
    }
  });
});

// select landing page element
let landingPage = document.querySelector(".landing-page");
// arra of imgs
let imgArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
// randome background option

function randomeiz() {
  if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
      let randome = Math.floor(Math.random() * imgArray.length);
      landingPage.style.backgroundImage =
        'url("imgs/' + imgArray[randome] + '")';
    }, 1000);
  }
}

randomeiz();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let skills = document.querySelector(".skills");
window.onscroll = function () {
  let skillsOffsetTop = skills.offsetTop;
  // this.console.log(skillsOffsetTop)/
  let skillsOffsetheight = skills.offsetHeight;

  // this.console.log(skillsOffsetheight)
  // windo of height

  let windowHeight = this.innerHeight;
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > skillsOffsetTop + skillsOffsetheight - windowHeight) {
    let allskills = document.querySelectorAll(
      ".skills-box .skill-proggres span"
    );
    allskills.forEach((skills) => {
      skills.style.width = skills.dataset.proggres;
    });
  }
};

// Galleery
let ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    //  creat overlay element
    let overlay = document.createElement("div");

    // add class to overlay
    overlay.className = "popup-overlay";

    // append overlay to  body
    document.body.appendChild(overlay);
    // creat the popup box
    let popupBox = document.createElement("div");
    // add class name
    popupBox.className = "popup-box";
    // creat close span
    let closeButton = document.createElement("span");
    // creat close tage
    let closeText = document.createTextNode("X");
    closeButton.className = "close-button";
    closeButton.appendChild(closeText);
    popupBox.appendChild(closeButton);
    document.body.appendChild(popupBox);
    if (img.alt !== null) {
      // creat heading
      let imgHeading = document.createElement("h5");
      // creat text alt
      let imgText = document.createTextNode(img.alt);
      // append the alt to heading
      imgHeading.appendChild(imgText);
      //  append the imgheading to popup box
      popupBox.appendChild(imgHeading);
    }
    // creat img
    let imgPopup = document.createElement("img");
    // set img source
    imgPopup.src = img.src;
    // add img to popup
    popupBox.appendChild(imgPopup);
    document.body.appendChild(popupBox);
  });
});
// close popup
document.addEventListener("click", (e) => {
  if (e.target.classList == "close-button") {
    // /remove the calsslist
    e.target.parentNode.remove();
    document.querySelector(".popup-overlay").remove();
  }
});

let timeline = document.querySelector(".year");

// start bullets
let bullets = document.querySelectorAll(".nav-bullets .bullets");

let links = document.querySelectorAll(".links a");

function goTothelinks(element) {
  element.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

goTothelinks(bullets);
goTothelinks(links);

function handelActive(ev) {
  ev.currentTarget.parentElement
    .querySelectorAll(".active")
    .forEach((element) => {
      element.classList.remove("active");
    });
  ev.target.classList.add("active");
}

//  we mack the function to controle the codes
document.querySelector(".reset-option").onclick = function () {
  localStorage.removeItem("background-option");
  localStorage.removeItem("color-option");

  window.location.reload();
};

//
let i = document.querySelector(".links-container i");
let linksToggel = document.querySelector(".links");

i.onclick = function (e) {
  e.stopPropagation();

  // Toggle Class "menu-active" On Button
  this.classList.toggle("menu-active");

  // Toggle Class "open" On Links
  linksToggel.classList.toggle("open");
}


document.addEventListener("click",(e)=>
{
  if(e.target !==i && e.target !==linksToggel){
    // Check If Menu Is Open
    if (linksToggel.classList.contains("open")) {
      // Toggle Class "menu-active" On Button
      i.classList.toggle("menu-active");

      // Toggle Class "open" On Links
      linksToggel.classList.toggle("open");
    }
  }
})
// Stop Propagation On Menu 
linksToggel.onclick = function (e) {
  e.stopPropagation();
}