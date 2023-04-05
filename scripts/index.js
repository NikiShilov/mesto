let profile = document.querySelector('.profile');
let profileEdit = profile.querySelector('.profile__edit');
let profileName = profile.querySelector('.profile__name');
let profileText = profile.querySelector('.profile__text');
let popup = document.querySelector('.popup');
let popupContainer = popup.querySelector('.popup__container');
let popupClose = popupContainer.querySelector('.popup__close');
let form = popupContainer.querySelector('.popup__form');
let nameInput = popupContainer.querySelector('.popup__input_type_name');
let jobInput = popupContainer.querySelector('.popup__input_type_text');
let cards = document.querySelector('.cards');
let profileAdd = profile.querySelector('.profile__add-button');
let addPopup = document.querySelector('#popup__add');
let addContainer = addPopup.querySelector('.popup__container');
let formAdd = addContainer.querySelector('.popup__form');
let addClose = addContainer.querySelector('.popup__close');
let cardNameInput = addPopup.querySelector('.popup__input_type_name');
let imageInput = addPopup.querySelector('.popup__input_type_text');
let imagePopup = document.querySelector('#popup__open-image');
let imageContainer = imagePopup.querySelector('.popup__image-container');
let imageImage = imageContainer.querySelector('.popup__image');
let imageCaption = imageContainer.querySelector('.popup__image-caption');
let imageClose = imageContainer.querySelector('.popup__close');


function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileText.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function toggleAdd() {
    addPopup.classList.toggle('popup_opened');
}





function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileText.textContent = jobInput.value;
    closePopup();
}

profileEdit.addEventListener('click', openPopup);

popupClose.addEventListener('click', closePopup);

profileAdd.addEventListener('click', toggleAdd);

addClose.addEventListener('click', toggleAdd);

form.addEventListener('submit', handleFormSubmit);

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];




function addCard(item) {
    const cardTemplate = document.querySelector("#cards__template").content;
    const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
    const cardName = cardElement.querySelector('.cards__name');
    const cardImage = cardElement.querySelector('.cards__image');
    cardName.textContent = item.name;
    cardImage.src = item.link;
    cardImage.alt = item.name;
    const cardLike = cardElement.querySelector('.cards__like');
    const cardDelete = cardElement.querySelector('.cards__delete');
    cardDelete.addEventListener('click', () => {
        cardElement.remove();
    })
    cardLike.addEventListener('click', function (evt) {
        evt.target.classList.toggle('cards__like_active');
    })
    cardImage.addEventListener('click', () => {
        openImage(item);
    })
    return cardElement;
}

initialCards.forEach(element => {
    let newCard = addCard(element);
    cards.append(newCard);
});

function handleAddSubmit(evt) {
    evt.preventDefault();
    const newCard = addCard({
        name: cardNameInput.value,
        link: imageInput.value
    });
    cards.prepend(newCard);
    toggleAdd();
};
formAdd.addEventListener('submit', handleAddSubmit);

function openImage(item) {
    imageImage.src = item.link;
    imageCaption.textContent = item.name;
    imagePopup.classList.add('popup_opened');
}

function closeImage() {
    imagePopup.classList.remove('popup_opened');
}

imageClose.addEventListener('click', closeImage);