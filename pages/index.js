const editButton = document.querySelector('.profile__edit');
const closeButton = document.querySelector('.popup__button');
const addElementButton = document.querySelector('.profile__add-button');
const addCloseButton = document.querySelector('.popup__button_new-item');
const imagePopupWindow = document.querySelector('.popup_type_image');
const elementWindow = document.querySelector('.popup_type_new-item');
const form = document.querySelector('.form');
const nameInput = document.querySelector('.form__input_type_name');
const aboutInput = document.querySelector('.form__input_type_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__description');
const popup = document.querySelector('.popup');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__image-title')
const formNewItem = document.querySelector('.form_type_new-item');
const closeImagePopup = imagePopupWindow.querySelector('.popup__close-button');
const titleInput = elementWindow.querySelector('.form__input_type_title');
const linkInput = elementWindow.querySelector('.form__input_type_link');
const createButton = document.querySelector('.form__button-create');

function togglePopup(popup) {
  popup.classList.toggle('popup__open');
};

function openImagePopup() {
  imagePopupWindow.classList.add('.popup__open');
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;

  popup.classList.toggle('popup__open');
    
  } );


editButton.addEventListener('click', (a)=> {
  popup.classList.toggle('popup__open');
  
} );

closeButton.addEventListener('click', (a)=> {
  popup.classList.toggle('popup__open');
  
} );

addElementButton.addEventListener('click', (a)=> {
  elementWindow.classList.add('popup__open');
});

addCloseButton.addEventListener('click', (a)=> {
  elementWindow.classList.toggle('popup__open');
})



const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

const elementTemplate = document.querySelector('.element-template').content.querySelector('.element');
const list = document.querySelector('.elements');

const newElement = {
  name: titleInput.value,
  link: linkInput.value,
};

formNewItem.addEventListener('submit', (event) => {
  event.preventDefault;
  renderCard(createCard(newElement));
  console.log(initialCards);
});

function createCard(data) {
  const elementCard = elementTemplate.cloneNode(true);
  const elementImage = elementCard.querySelector('.element__image');
  const elementTitle = elementCard.querySelector('.element__title');
  const elementLikeButton = elementCard.querySelector('.element__button');
  const elementDeleteButton = elementCard.querySelector('.element__delete-button');

  elementTitle.textContent = data.name;
  elementImage.style.backgroundImage = `url(${data.link})`;

  elementLikeButton.addEventListener('click', (event) => {
    event.target.classList.toggle('element__button_active')
  });

  elementDeleteButton.addEventListener('click', (event) => {
    event.stopPropagation();
    elementCard.remove();
  });

  elementImage.addEventListener('click', () => {
    imagePopupWindow.classList.add('popup__open');
    popupImage.src = data.link;
    popupCaption.textContent = data.name;
  });

  return elementCard; 

}

closeImagePopup.addEventListener("click", () => {
  imagePopupWindow.classList.remove('popup__open');
  });

const renderCard = (card) => {
  list.prepend(card);
}

initialCards.forEach(data => {
  renderCard(createCard(data));
});

