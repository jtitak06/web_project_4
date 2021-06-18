const editButton = document.querySelector('.profile__edit');
const closeButton = document.querySelector('.popup__button');
const saveButton = document.querySelector('.form__button');
const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault()
  
  const nameInput = document.querySelector('.form__input_type_name');
  const aboutInput = document.querySelector('.form__input_type_about');
  
  const profileName = document.querySelector('.profile__name');
  const profileAbout = document.querySelector('.profile__description');
  
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  
  console.log('submit!!!!', nameInput.Value, aboutInput.value);
                      })

editButton.addEventListener('click', function() {
  const popup = document.querySelector('.popup');
  popup.classList.add('popup__open');
  
} )

closeButton.addEventListener('click', function() {
  const popup = document.querySelector('.popup');
  popup.classList.remove('popup__open');
  
} )

saveButton.addEventListener('click', function() {
  const popup = document.querySelector('.popup');
  popup.classList.remove('popup__open');
  
} )