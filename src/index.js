import { createContent } from "./createPage";
import "./style.css";
import { menuPage } from "./menuPage";
import { clearPage } from "./clearPage";
import { homePage } from "./homePage";
import { contactPage } from "./contactPage"


console.log("Hello Goose");

//createContent();
//page container id
const content = document.getElementById("content");

//Create a navbar
const navbar = document.createElement('nav');
const navbarList = document.createElement('ul');
navbarList.classList.add("navbar")
//appending content to page
content.appendChild(navbar);

navbar.appendChild(navbarList);
const home = document.createElement('li');
const menu = document.createElement('li');
const contact = document.createElement('li');
const lineBreak = document.createElement('hr');    
lineBreak.id = "lineBreak";
home.innerHTML = "Home";
menu.innerHTML = "Menu";
menu.id = "menuLink"
contact.innerHTML = "Contact Us";
home.classList.add('link');
home.id = "homeLink";
menu.classList.add('link');
contact.classList.add('link');
contact.id = "contactLink";
navbarList.appendChild(home);
navbarList.appendChild(menu);
navbarList.appendChild(contact);
navbar.appendChild(lineBreak);




//add function to links to clear pages
const links = document.querySelectorAll('.link');
links.forEach(link => {
    link.addEventListener("click", () =>{
        console.log("Clickaroo");
        document.getElementById('pageContent')
        clearPage();
    })
    
});

//homepage link
const homeLink = document.getElementById('homeLink');

homeLink.addEventListener("click", (e)=>{
    createContent();
    homePage();
});



//add function to call menu when link is clicked
const menuLink = document.getElementById('menuLink')

menuLink.addEventListener("click", (e)=>{
    menuPage();
});


//add function to call contact when link is clicked
const contactLink = document.getElementById('contactLink');

contactLink.addEventListener("click", (e)=>{
    contactPage();
});

//Call to create page
createContent();
homePage();