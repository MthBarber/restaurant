
import { createContent } from "./createPage";

export function contactPage() {

    createContent();
    //Header for restaurant contact
    const header = document.createElement('h1');
    header.innerHTML =  "Contact Us"
    header.classList.add("header");

    //appending content to page
    pageContent.appendChild(header);

    const contactContent = document.createElement('div');
    contactContent.id = "contactContent";
    pageContent.appendChild(contactContent);

    //staff images div
    const staffPictures = document.createElement('div');
    staffPictures.id = "staffPictures";
    contactContent.appendChild(staffPictures);

    //staff images 
    const ownerPicture = document.createElement('img');
    ownerPicture.classList.add('staffPics');
    ownerPicture.id = "ownerPicture";
    ownerPicture.src = "../src/owner.jpg";
    staffPictures.appendChild(ownerPicture);

    const chefPicture = document.createElement('img');
    chefPicture.classList.add('staffPics');
    chefPicture.id = "chefPicture";
    chefPicture.src = "../src/chef.jpg";
    staffPictures.appendChild(chefPicture);

    const managerPicture = document.createElement('img');    
    managerPicture.classList.add('staffPics');
    managerPicture.id = "managerPicture";
    managerPicture.src = "../src/manager.jpg";
    staffPictures.appendChild(managerPicture);

    //Staff Bio div
    const staffBios = document.createElement('div');
    staffBios.id = "staffBios";
    contactContent.appendChild(staffBios);

    //staff bio content
    const ownerBio = document.createElement('div');
    ownerBio.classList.add('staffBios');
    ownerBio.id = "ownerBio"; 
    ownerBio.innerHTML = `Meet Amanda the owner, she has a passion for fine dining and
    and is looking to deliver next level dining experiences for the restaurant.`  
    staffBios.appendChild(ownerBio);

    const chefBio = document.createElement('div');
    chefBio.classList.add('staffBios');
    chefBio.id = "chefBio";
    chefBio.innerHTML = `Meet Carlos he is our head Chef, he comes from Bolivia and is looking to bring
    that South American flair to our dishes.`    
    staffBios.appendChild(chefBio);

    const managerBio = document.createElement('div');    
    managerBio.classList.add('staffBios');
    managerBio.id = "managerBio";
    managerBio.innerHTML = `Meet Filipe, the manager of our restaurant, he is here to ensure
    that you receive the quality experience that you should expect when you visit.`    
    staffBios.appendChild(managerBio);

    //Details div
    const contactDetailsDiv = document.createElement('div');
    contactDetailsDiv.id = "contactDetailsDiv";    
    pageContent.appendChild(contactDetailsDiv);

    //Contact header
    const contactHeader = document.createElement('h2');
    contactHeader.id = "contactHeader";
    contactHeader.classList.add('contactDetails');
    contactHeader.innerHTML = "Contact Us:";
    contactDetailsDiv.appendChild(contactHeader);

    //phone number
    const phoneContact = document.createElement('p');
    phoneContact.classList.add('contactDetails');
    phoneContact.innerHTML = "For any enquiries or to make a reseveration. Call: 0117 8327429";
    contactDetailsDiv.appendChild(phoneContact);

    //Email address
    const emailContact = document.createElement('p');
    emailContact.classList.add('contactDetails');
    emailContact.innerHTML = "You can reach us via email at: finedining@gmail.com";
    contactDetailsDiv.appendChild(emailContact);



}