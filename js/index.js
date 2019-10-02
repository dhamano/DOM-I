const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let ctaH1 = document.querySelector(".cta-text h1");
ctaH1.textContent = siteContent.cta.h1;

let ctaBtn = document.querySelector(".cta-text button");
ctaBtn.textContent = siteContent.cta.button;

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

const nav01 = document.createElement('a');
const nav02 = document.createElement('a');
nav01.setAttribute("href","#");
nav02.setAttribute("href","#");

const navEl = document.querySelector("nav");
navEl.appendChild(nav01);
navEl.appendChild(nav02);

const navList = document.querySelectorAll("nav a");
navList.forEach( (arrayItem, i) => {
  arrayItem.textContent = siteContent.nav["nav-item-"+(i+1)];
})
navList.forEach( (arrayItem) => {
  arrayItem.setAttribute("style","color: green;")
})
nav01.innerText = "FAQ";
nav02.textContent = "Blog";
navEl.prepend(nav02);


const divMainContentH4 = document.querySelectorAll(".text-content h4");
divMainContentH4[0].textContent = siteContent["main-content"]["features-h4"];
divMainContentH4[1].textContent = siteContent["main-content"]["about-h4"];
divMainContentH4[2].textContent = siteContent["main-content"]["services-h4"];
divMainContentH4[3].textContent = siteContent["main-content"]["product-h4"];
divMainContentH4[4].textContent = siteContent["main-content"]["vision-h4"];
const divMainContentP = document.querySelectorAll(".text-content p");
divMainContentP[0].textContent = siteContent["main-content"]["features-content"];
divMainContentP[1].textContent = siteContent["main-content"]["about-content"];
divMainContentP[2].textContent = siteContent["main-content"]["services-content"];
divMainContentP[3].textContent = siteContent["main-content"]["product-content"];
divMainContentP[4].textContent = siteContent["main-content"]["vision-content"];

let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent.contact["contact-h4"];

let contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = siteContent.contact["address"];
contactP[1].textContent = siteContent.contact["phone"];
contactP[2].textContent = siteContent.contact["email"];

let footerP = document.querySelector("footer p");
footerP.textContent = siteContent.footer.copyright;