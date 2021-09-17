import { domUtil } from "./util";
import gravyImage from "./images/gravy.png";
import hotSauceImage from "./images/hot-sauce.png";
import butteredToastImage from "./images/buttered-toast.jpeg";
import frenchToastImage from "./images/french-toast.jpg";
import jawbreakerImage from "./images/jawbreaker.png";

function createMenuCard(itemName, description, price, imgSrc, imgAlt) {
    // parent
    const menuCard = domUtil.create('div', '', { class: [ 'menu', 'card']});

    // children
    const h3 = domUtil.create('h3', itemName);
    const descriptionP = domUtil.create('p', description, { class: 'description' });
    const priceP = domUtil.create('p', `$${price}`, { class: 'price' });
    const img = domUtil.create('img', '', {
        attributes: {
            src: imgSrc,
            alt: imgAlt
        }
    });

    // append children to parent
    const children = [ h3, descriptionP, priceP, img ];
    domUtil.appendChildren(menuCard, children);

    return menuCard;
}

function createDrinksContainer() {
    // parent
    const drinksContainer = domUtil.create('div', '', { class: 'items-container' });

    // children
    const gravyCard = createMenuCard(
        'Gravy',
        "Ed's delicious homemade gravy straight from the tub. Yum!",
        3,
        gravyImage,
        'A tub of gravy'
    );

    const hotSauceCard = createMenuCard(
        'Armenian Secret Hot Sauce',
        'A real, grade-A gut burner. (Tacos not included)',
        10,
        hotSauceImage,
        'Eddy holding a jug of hot sauce'
    );

    // append children to parent
    const children = [ gravyCard, hotSauceCard ];
    domUtil.appendChildren(drinksContainer, children);

    return drinksContainer;
}

function createToastsContainer() {
    // parent
    const toastsContainer = domUtil.create('div', '', { class: 'items-container' });

    // children
    const butteredToastCard = createMenuCard(
        'Buttered Toast',
        'Buttered toast! The cornerstone of the breakfast bar menu.',
        5,
        butteredToastImage,
        "Buttered toast"
    );

    const frenchToastCard = createMenuCard(
        'French Toast',
        'Buttered toast for those who are feeling extra fancy.',
        7,
        frenchToastImage,
        'French toast'
    );

    // append children to parent
    const children = [ butteredToastCard, frenchToastCard ];
    domUtil.appendChildren(toastsContainer, children);

    return toastsContainer;
}

function createDessertContainer() {
    // parent
    const dessertContainer = domUtil.create('div', '', { class: 'items-container' });

    // children
    const jawbreakerCard = createMenuCard(
        'Jawbreaker',
        "The Cul-de-Sac's treasured hard candy. Don't bite down!",
        1,
        jawbreakerImage,
        'Ed eating a jawbreaker while also holding one'
    );

    // append children to parent
    const children = [ jawbreakerCard ];
    domUtil.appendChildren(dessertContainer, children);

    return dessertContainer;
}

function createMenuContainer() {
    // parent
    const menuContainer = domUtil.create('div', '', { id: 'menu-container' });

    // children
    const drinksH2 = domUtil.create('h2', 'Drinks');
    const drinksContainer = createDrinksContainer();
    const hr1 = domUtil.create('hr', '');

    const toastsH2 = domUtil.create('h2', 'Toasts');
    const toastsContainer = createToastsContainer();
    const hr2 = domUtil.create('hr', '');

    const dessertH2 = domUtil.create('h2', 'Dessert');
    const dessertContainer = createDessertContainer();

    // append children to parent
    const children = [ 
        drinksH2, 
        drinksContainer, 
        hr1, 
        toastsH2, 
        toastsContainer, 
        hr2, 
        dessertH2, 
        dessertContainer    
    ];
    domUtil.appendChildren(menuContainer, children);

    return menuContainer;
}

function createMenuContent() {
    // parent
    const menuContent = domUtil.create('div', '', { class: 'content-wrapper' });

    // children
    const h1 = domUtil.create('h1', 'Menu');
    const menuContainer = createMenuContainer();

    // append children to parent
    const children = [ h1, menuContainer ];
    domUtil.appendChildren(menuContent, children);
    
    return menuContent;
}

export { createMenuContent };