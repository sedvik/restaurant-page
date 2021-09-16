import { domUtil } from "./util";
import culDeSacImage from "./images/cul-de-sac.png";

function createQuote(quote, author) {
    // parent
    const quoteContainer = domUtil.create('div', '', { class: 'quote-container' });

    // children
    const quoteP = domUtil.create('p', quote, { class: 'quote' });
    const quoteAuthorP = domUtil.create('p', `- ${author}`, { class: 'author' });

    // append children to parent
    const children = [ quoteP, quoteAuthorP ]
    domUtil.appendChildren(quoteContainer, children);

    return quoteContainer;
}

function createDay(day) {
    // Hours for each day:
    let hours;
    if (day === 'Saturday') {
        hours = '07:00AM - 11:00AM';
    } else if (day === 'Sunday') {
        hours = '08:00AM - 12:00PM';
    } else {
        hours = 'Closed*';
    }

    // parent
    const dayContainer = domUtil.create('div', '', { class: 'day' });

    // children
    const dayP = domUtil.create('p', `${day}: `, { class: 'bold' });
    const hoursP = domUtil.create('p', hours);

    // append children to parent
    const children = [ dayP, hoursP ];
    domUtil.appendChildren(dayContainer, children);

    return dayContainer;
}

function createHoursContainer() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    // parent
    const hoursContainer = domUtil.create('div', '', { class: 'hours-container' });

    // children
    const dayElems = days.map(day => {
        return createDay(day);
    });

    // append children to parent
    domUtil.appendChildren(hoursContainer, dayElems);
    
    return hoursContainer;
}

function createFigure() {
    // parent
    const figure = domUtil.create('figure', '', { id: 'cul-de-sac-fig' });

    // children
    const img = domUtil.create('img', '', { attributes: {
        src: culDeSacImage,
        alt: "Photo of The Cul-de-Sac"
    }
    });
    const figCaption = domUtil.create('figcaption',
        "Breakfast bar located at the pink house with the light-brown roof. You can't miss it.")

    // append children to parent
    const children = [ img, figCaption ];
    domUtil.appendChildren(figure, children);

    return figure;
}

function createAboutCard() {
    // parent
    const card = domUtil.create('div', '', { class: [ 'home', 'card' ]});

    // children
    const h2 = domUtil.create('h2', 'About');
    const p = domUtil.create('p', 'PLACEHOLDER');

    // append children to parent
    const children = [ h2, p ];
    domUtil.appendChildren(card, children);

    return card;
}

function createTestimonialsCard() {
    // parent
    const card = domUtil.create('div', '', { class: [ 'home', 'card' ]});

    // children
    const h2 = domUtil.create('h2', 'Testimonials');
    const quote1 = createQuote('EXAMPLE QUOTE', 'Ralph');
    const quote2 = createQuote('This is a quote', 'Jimmy');

    // append children to parent
    const children = [ h2, quote1, quote2 ];
    domUtil.appendChildren(card, children);

    return card;
}

function createHoursCard() {
    // parent
    const card = domUtil.create('div', '', { class: [ 'home', 'card' ]});

    // children
    const h2 = domUtil.create('h2', 'Hours');
    const hoursContainer = createHoursContainer();
    const p = domUtil.create('p', '*Note: Closed Monday - Friday due to school conflicts', {
        class: 'aside'
    });

    // append children to parent
    const children = [ h2, hoursContainer, p ];
    domUtil.appendChildren(card, children);
    
    return card;
}

function createLocationCard() {
    // parent
    const card = domUtil.create('div', '', { class: [ 'home', 'card' ]});

    // children
    const h2 = domUtil.create('h2', 'Location');
    const p = domUtil.create('p', 'Located at the prestigious Cul-de-Sac');
    const figure = createFigure();

    // append children to parent
    const children = [ h2, p, figure ];
    domUtil.appendChildren(card, children);

    return card;    
}

// Creates div that houses About, Testimonials, Hours, and Location cards
function createHomeContainer() {
    // parent
    const homeContainer = domUtil.create('div', '', { id: 'content-wrapper' })

    // children
    const aboutCard = createAboutCard();
    const testimonialsCard = createTestimonialsCard();
    const hoursCard = createHoursCard();
    const locationCard = createLocationCard();

    // append children to parent
    const children = [ aboutCard, testimonialsCard, hoursCard, locationCard ];
    domUtil.appendChildren(homeContainer, children);

    return homeContainer;
}

// Creates homepage content wrapper, which contains all page content
function createHomepageContent() {
    // Create content wrapper div
    const homepageContent = domUtil.create('div', '', { class: 'content-wrapper' });
    
    // Create homepage h1
    const h1 = domUtil.create('h1', "Ed, Edd, n Eddy's Breakfast Bar");

    // Create home container div
    const homeContainer = createHomeContainer();

    // Append homepageContent children
    const children = [ h1, homeContainer ];
    domUtil.appendChildren(homepageContent, children);

    return homepageContent;
} 

export { createHomepageContent };