//import { createContent } from "./createPage";

export function homePage() {
    //Call main page features
    
    //restaurant description

    //Header for restaurant name
    const header = document.createElement('h1');
    header.innerHTML =  "Welcome To The Eaterie!"
    header.classList.add("header");
    

    //appending content to page
    pageContent.appendChild(header);
    const description = document.createElement('div');
    description.id = "description";
    description.classList.add('scrim');
    pageContent.appendChild(description);
    const text = document.createElement('p');
    text.innerHTML = `This is some text content about our wonderful restaurant, you should eat here as we have a Michelin star chef. \n
     You may even bump into some famous people here. Feel free to browse some of our menu and contact us to make a reservation. our \n
     speciality dishes include fish, salads and meats grilled to perfection.`;
    //appending content to page
    description.appendChild(text);

    
}