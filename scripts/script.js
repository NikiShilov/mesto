let profile = document.querySelector('.profile');
let profileEdit = profile.querySelector('.profile__edit');
let profileName = profile.querySelector('.profile__name');
let profileText = profile.querySelector('.profile__text');
let popup = document.querySelector('.popup');
let popupContainer = popup.querySelector('.popup__container');
let popupClose = popupContainer.querySelector('.popup__close');
let popupSave = popupContainer.querySelector('.popup__savebutton');
let nameInput = popupContainer.querySelector('.popup__name')
let jobInput = popupContainer.querySelector('.popup__text')
function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileText.textContent;
}

profileEdit.addEventListener('click', openPopup);

function closePopup() {
    popup.classList.remove('popup_opened');
}

popupClose.addEventListener('click', closePopup);


function handleFormSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileText.textContent = jobInput.value;
    closePopup();
}


popupSave.addEventListener('click', handleFormSubmit);

