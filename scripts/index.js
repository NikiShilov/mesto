let profile = document.querySelector('.profile');
let profileEdit = profile.querySelector('.profile__edit');
let profileName = profile.querySelector('.profile__name');
let profileText = profile.querySelector('.profile__text');
let popup = document.querySelector('.popup');
let popupContainer = popup.querySelector('.popup__container');
let popupClose = popupContainer.querySelector('.popup__close');
let nameInput = popupContainer.querySelector('.popup__input_type_name');
let jobInput = popupContainer.querySelector('.popup__input_type_text');
let cards = document.querySelector('.cards');
function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileText.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileText.textContent = jobInput.value;
    closePopup();
}

profileEdit.addEventListener('click', openPopup);

popupClose.addEventListener('click', closePopup);

form.addEventListener('submit', handleFormSubmit);

