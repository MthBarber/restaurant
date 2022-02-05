
import { createContent } from "./createPage";

export function menuPage(){
    //Create main content
    createContent();
    //Get ID for main container
    const container = document.getElementById('pageContent');

    //page header
    const header = document.createElement('h1');
    header.innerHTML = "Our Menu";
    container.appendChild(header);

    
    // container to put menu items
    const contentMenu = document.createElement('div');
    contentMenu.id = "menuContainer";
    container.appendChild(contentMenu);

    
    //create divs for menu items
    for(let i = 0; i < 6; i++){
        let item = document.createElement('div');
        item.classList.add('menuItems');
        item.id=`menuItem${i}`;
        contentMenu.appendChild(item);
    }

    //Menu Items
        
    const menuItem0 = document.getElementById('menuItem0');
    const menuItem0Pic = document.createElement('img');
    const menuItem0Text = document.createElement('p');
    menuItem0Text.innerHTML = `This our delicious corn-on-the-cob topped with chillis 
    cream cheese and fresh herbs. A delightfully light starter.`;    
    menuItem0Pic.src = "../src/food0.jpg";
    menuItem0.appendChild(menuItem0Pic);
    menuItem0.appendChild(menuItem0Text);

    const menuItem1 = document.getElementById('menuItem1');
    const menuItem1Pic = document.createElement('img');
    const menuItem1Text = document.createElement('p');
    menuItem1Text.innerHTML = `12oz grilled T-bone steak, served with a red wine sauce
    and a selection of fresh veg.`    
    menuItem1Pic.src = "../src/food1.jpg";
    menuItem1.appendChild(menuItem1Pic);
    menuItem1.appendChild(menuItem1Text);

    const menuItem2 = document.getElementById('menuItem2');
    const menuItem2Pic = document.createElement('img');
    const menuItem2Text = document.createElement('p');
    menuItem2Text.innerHTML = "Grilled pork chop with butternut squash and fresh veg.";    
    menuItem2Pic.src = "../src/food2.jpg";
    menuItem2.appendChild(menuItem2Pic);
    menuItem2.appendChild(menuItem2Text);

    const menuItem3 = document.getElementById('menuItem3');
    const menuItem3Pic = document.createElement('img');
    const menuItem3Text = document.createElement('p');
    menuItem3Text.innerHTML = `This is our delicious pasta served with crispy bacon, herbs 
    and sundried tomatoes.`;    
    menuItem3Pic.src = "../src/food3.jpg";
    menuItem3.appendChild(menuItem3Pic);
    menuItem3.appendChild(menuItem3Text);

    const menuItem4 = document.getElementById('menuItem4');
    const menuItem4Pic = document.createElement('img');
    const menuItem4Text = document.createElement('p');
    menuItem4Text.innerHTML = `Looking for the perfect starter? Well this is our creamy
    tomato soup, served with a selection of breads.`;    
    menuItem4Pic.src = "../src/food4.jpg";
    menuItem4.appendChild(menuItem4Pic);
    menuItem4.appendChild(menuItem4Text);

    const menuItem5 = document.getElementById('menuItem5');
    const menuItem5Pic = document.createElement('img');
    const menuItem5Text = document.createElement('p');
    menuItem5Text.innerHTML = `This is our salad served with couscous, pepper, sultanas and parsley.`;    
    menuItem5Pic.src = "../src/food5.jpg";
    menuItem5.appendChild(menuItem5Pic);
    menuItem5.appendChild(menuItem5Text);

   
}