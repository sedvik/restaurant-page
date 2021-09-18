import { domUtil } from "./util";
import eddyPhoto from "./images/eddy.png";
import edPhoto from "./images/ed.png";
import eddPhoto from "./images/edd.png";

function createNameContainer(name) {
    // parent
    const nameContainer = domUtil.create('div', '', { class: 'name-container' })

    // children
    const h2 = domUtil.create('h2', name);

    // append children to parent
    const children = [ h2 ];
    domUtil.appendChildren(nameContainer, children);

    return nameContainer;
}

function createContactContainer(occupation, phoneNumber, email) {
    // parent
    const contactContainer = domUtil.create('div', '', { class: 'contact-container' });

    // children
    const occupationP = domUtil.create('p', occupation, { class: 'occupation' });
    const phoneNumberP = domUtil.create('p', phoneNumber, { class: 'phone-number' });
    const emailP = domUtil.create('p', email, { class: 'email' });

    // append children to parent
    const children = [ occupationP, phoneNumberP, emailP ];
    domUtil.appendChildren(contactContainer, children);

    return contactContainer;    
}

function createInfoContainer(name, occupation, phoneNumber, email) {
    // parent
    const infoContainer = domUtil.create('div', '', { class: 'info-container' });

    // children
    const nameContainer = createNameContainer(name);
    const contactContainer = createContactContainer(occupation, phoneNumber, email);

    // append children to parent
    const children = [ nameContainer, contactContainer ];
    domUtil.appendChildren(infoContainer, children);

    return infoContainer;
}

function createPhotoContainer(imgSrc, imgAlt) {
    // parent
    const photoContainer = domUtil.create('div', '', { class: 'photo-container' });

    // children
    const img = domUtil.create('img', '', {
        class: 'profile-img',
        attributes: {
            src: imgSrc,
            alt: imgAlt
        }
    });

    // append children to parent
    const children = [ img ];
    domUtil.appendChildren(photoContainer, children);

    return photoContainer;
}

function createProfileCard(name, occupation, phoneNumber, email, imgSrc, imgAlt) {
    // parent
    const profileCard = domUtil.create('div', '', { class: [ 'profile', 'card' ]});

    // children
    const infoContainer = createInfoContainer(name, occupation, phoneNumber, email);
    const photoContainer = createPhotoContainer(imgSrc, imgAlt);

    // append children to parent
    const children = [ infoContainer, photoContainer ];
    domUtil.appendChildren(profileCard, children);

    return profileCard;
}

function createContactContent() {
    // parent
    const contactContent = domUtil.create('div', '', { class: 'content-wrapper' });

    // children
    const h1 = domUtil.create('h1', 'Contact Us');
    const eddyProfile = createProfileCard(
        'Eddy', 
        'Manager', 
        '555-GET-CASH', 
        'eddy@theculdesac.com',
        eddyPhoto,
        'Eddy looking dapper'
    );
    const edProfile = createProfileCard(
        'Ed',
        'Chef',
        '123-456-7890',
        'ed@theculdesac.com',
        edPhoto,
        'Ed looking off into the distance'
    );
    const eddProfile = createProfileCard(
        'Edd',
        'Web Developer',
        '555-555-5555',
        'edd@theculdesac.com',
        eddPhoto,
        'Edd with a magnifying glass'
    );

    // append children to parent
    const children = [ h1, eddyProfile, edProfile, eddProfile ];
    domUtil.appendChildren(contactContent, children);

    return contactContent;
}

export { createContactContent };