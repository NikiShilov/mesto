const profile = document.querySelector('.profile');
const profileEdit = profile.querySelector('.profile__edit');
const profileName = profile.querySelector('.profile__name');
const profileText = profile.querySelector('.profile__text');
const profileAdd = profile.querySelector('.profile__add-button');
const popupProfile = document.querySelector('#popup__profile');
const popupProfileInputs = popupProfile.querySelectorAll('.popup__input');
const formButtonProfile = popupProfile.querySelector('.popup__save-button');
const popupProfileContainer = popupProfile.querySelector('.popup__container');
const popupProfileClose = popupProfileContainer.querySelector('.popup__close');
const formProfile = popupProfileContainer.querySelector('.popup__form');
const nameInput = popupProfileContainer.querySelector('.popup__input_name');
const jobInput = popupProfileContainer.querySelector('.popup__input_text');

const cards = document.querySelector('.cards');
const addPopup = document.querySelector('#popup__add');
const popupAddInputs = addPopup.querySelectorAll('.popup__input');
const formButtonAdd = popupProfile.querySelector('.popup__save-button');
const addContainer = addPopup.querySelector('.popup__container');
const formAdd = addContainer.querySelector('.popup__form');
const addClose = addContainer.querySelector('.popup__close');
const cardNameInput = addPopup.querySelector('.popup__input_name');
const imageInput = addPopup.querySelector('.popup__input_text');

const imagePopup = document.querySelector('#popup__open-image');
const imageContainer = imagePopup.querySelector('.popup__image-container');
const imageImage = imageContainer.querySelector('.popup__image');
const imageCaption = imageContainer.querySelector('.popup__image-caption');
const imageClose = imageContainer.querySelector('.popup__close');

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupClickEsc);
    popup.addEventListener('click', closePopupClickOvr);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupClickEsc);
    popup.removeEventListener('click', closePopupClickOvr);
}

function handleProfileSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileText.textContent = jobInput.value;
    closePopup(popupProfile);
}

popupProfileClose.addEventListener('click', function () {
    closePopup(popupProfile);
});

profileEdit.addEventListener('click', function () {
    nameInput.value = profileName.textContent;
    jobInput.value = profileText.textContent;
    disableButton(formButtonProfile, {inactiveButtonClass:configValidation.inactiveButtonClass});
    removeValidationErrors(popupProfile, popupProfileInputs, configValidation);
    openPopup(popupProfile);
});

profileAdd.addEventListener('click', function () {
    cardNameInput.value = '';
    imageInput.value = '';
    disableButton(formButtonAdd, {inactiveButtonClass:configValidation.inactiveButtonClass});
    removeValidationErrors(addPopup, popupAddInputs, configValidation)
    openPopup(addPopup);
}); 

addClose.addEventListener('click', function () {
    closePopup(addPopup);
});

formProfile.addEventListener('submit', handleProfileSubmit);

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

function createCardElement(item) {
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
    const newCard = createCardElement(element);
    cards.append(newCard);
});

function handleAddSubmit(evt) {
    evt.preventDefault();
    const newCard = createCardElement({
        name: cardNameInput.value,
        link: imageInput.value
    });
    cards.prepend(newCard);
    evt.target.reset();
    closePopup(addPopup);
};
formAdd.addEventListener('submit', handleAddSubmit);

function openImage(item) {
    imageImage.src = item.link;
    imageImage.alt = item.name;
    imageCaption.textContent = item.name;
    openPopup(imagePopup);
}

function closeImage() {
    closePopup(imagePopup);
}

imageClose.addEventListener('click', closeImage);


const closePopupClickEsc = (evt) => {
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_opened');
        closePopup(popupOpened);
    }
}

const closePopupClickOvr = (evt) => {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.currentTarget);
    }
}