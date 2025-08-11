let usersPhotoArr = [
  { url: 'photos/1.jpg', likes: 38, comments: [], description: 'Затусили с друзьями на море' },
  { url: 'photos/2.jpg', likes: 44, comments: [], description: 'Не обижайте всех словами...' },
  { url: 'photos/3.jpg', likes: 144, comments: [], description: 'Отдыхаем...' },
  { url: 'photos/4.jpg', likes: 28, comments: [], description: 'Цените каждое мгновенье.' },
  { url: 'photos/5.jpg', likes: 180, comments: [], description: 'Не обижайте всех словами...' },
  { url: 'photos/6.jpg', likes: 179, comments: [], description: 'Отдыхаем...' },
  { url: 'photos/7.jpg', likes: 31, comments: [], description: 'Отдыхаем...' },
  { url: 'photos/8.jpg', likes: 65, comments: [], description: 'Вот это тачка!' },
  { url: 'photos/9.jpg', likes: 171, comments: [], description: 'Цените каждое мгновенье.' },
  { url: 'photos/10.jpg', likes: 40, comments: [], description: 'Вот это тачка!' },
  { url: 'photos/11.jpg', likes: 113, comments: [], description: 'Цените тех, кто рядом с вами и отгоняйте все сомненья.' },
  { url: 'photos/12.jpg', likes: 197, comments: [], description: 'Затусили с друзьями на море' },
  { url: 'photos/13.jpg', likes: 63, comments: [], description: 'Цените каждое мгновенье.' },
  { url: 'photos/14.jpg', likes: 48, comments: [], description: 'Отдыхаем...' },
  { url: 'photos/15.jpg', likes: 100, comments: [], description: 'Тестим новую камеру!' },
  { url: 'photos/16.jpg', likes: 141, comments: [], description: 'Цените каждое мгновенье.' },
  { url: 'photos/17.jpg', likes: 123, comments: [], description: 'Как же круто тут кормят' },
  { url: 'photos/18.jpg', likes: 25, comments: [], description: 'Затусили с друзьями на море' },
  { url: 'photos/19.jpg', likes: 19, comments: [], description: 'Цените каждое мгновенье.' },
  { url: 'photos/20.jpg', likes: 82, comments: [], description: 'Не обижайте всех словами...' },
  { url: 'photos/21.jpg', likes: 53, comments: [], description: 'Затусили с друзьями на море' },
  { url: 'photos/22.jpg', likes: 99, comments: [], description: 'Вот это тачка!' },
  { url: 'photos/23.jpg', likes: 24, comments: [], description: 'Тестим новую камеру!' },
  { url: 'photos/24.jpg', likes: 181, comments: [], description: 'Затусили с друзьями на море' },
  { url: 'photos/25.jpg', likes: 41, comments: [], description: 'Не обижайте всех словами...' }
]
console.log(usersPhotoArr);

/* --- LIKES --- */

/* Генератор случайных чисел от minIndexArrLikes до maxIndexArrLikes */
let minIndexArrLikes = 15
let maxIndexArrLikes = 200
let likesArr = []
for (let i = 0; likesArr.length < usersPhotoArr.length; i++) {
  randomNumber = Math.floor(Math.random() * (maxIndexArrLikes - minIndexArrLikes + 1)) + minIndexArrLikes
  if (!likesArr.includes(randomNumber)) {
    likesArr.push(randomNumber);
  }
}
/* --- Вставка рандомного массива лайков в usersPhotoArr[i].likes ---*/
for (i = 0; i < usersPhotoArr.length; i++) {
  usersPhotoArr[i].likes = likesArr[i]
}

/* --- COMMENTS ---*/

let commentsArr = [ // варианты комментариев
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!'
]

/* Генератор случайных чисел от minIndexArrComments до maxIndexArrComments */
let minIndexArrComments = 0
let maxIndexArrComments = commentsArr.length - 1
let minIndexNumberComments = 1
let maxIndexNumberComments = 2

for (let i = 0; i < usersPhotoArr.length; i++) {
  numberComments = Math.floor(Math.random() * (maxIndexNumberComments - minIndexNumberComments + 1)) + minIndexNumberComments

  for (let a = 0; a < numberComments; a++) {
    randomNumber = Math.floor(Math.random() * (maxIndexArrComments - minIndexArrComments + 1)) + minIndexArrComments
    if (!usersPhotoArr[i].comments.includes(commentsArr[randomNumber])) {
      usersPhotoArr[i].comments.push(commentsArr[randomNumber]);
    }
  }
}

/* --- DESCRIPTION ---*/

let descArr = [  // варианты описания
  'Тестим новую камеру!',
  'Затусили с друзьями на море',
  'Как же круто тут кормят',
  'Отдыхаем...',
  'Цените каждое мгновенье.',
  'Цените тех, кто рядом с вами и отгоняйте все сомненья.',
  'Не обижайте всех словами...',
  'Вот это тачка!'
]

/* Генератор случайных чисел от minIndexArrDesc до maxIndexArrDesc */

let minIndexArrDesc = 0
let maxIndexArrDesc = descArr.length - 1
for (let i = 0; i < usersPhotoArr.length; i++) {
  randomNumber = Math.floor(Math.random() * (maxIndexArrDesc - minIndexArrDesc + 1)) + minIndexArrDesc
  usersPhotoArr[i].description = descArr[randomNumber]
}

/* --- отрисовка шаблона в документ --- */

let picturesArr = function (usersPhotoArr) {

  // получаем блок, куда будем отрисовывать фотографии pictures
  let pictures = document.querySelector('.pictures')
  // console.log(pictures);

  // получаем полный шаблон, по которому будем клонировать 
  let picturesTemplate = document.getElementById('picture')
  // console.log(picturesTemplate);

  for (let i = 0; i < usersPhotoArr.length; i++) {

    // получаем элемент шаблона и меняем SRC у img
    picturesTemplate.content.querySelector('.picture__img').src = usersPhotoArr[i].url

    // получаем элемент шаблона likes и меняем количество лайков
    picturesTemplate.content.querySelector('.picture__likes').textContent = usersPhotoArr[i].likes

    // получаем элемент шаблона likes и меняем количество комментариев
    picturesTemplate.content.querySelector('.picture__comments').textContent = usersPhotoArr[i].comments.length


    // заносим клон (дубликат) шаблона pictures в переменную
    let picturesTemplateClone = picturesTemplate.content.cloneNode(true)

    // клонируем клон (дубликат) шаблона в необходимое нам место
    pictures.appendChild(picturesTemplateClone)

  }

  // получаем блок, куда будем вставлять комментарии
  let socialComments = document.querySelector('.social__comments')
  socialComments.innerHTML = '';

  // получаем полный шаблон, по которому будем клонировать комментарии
  let socialCommentsTemplate = document.getElementById('comment')

  // получаем элемент шаблона social__picture и меняем src с рандомным аватаром

  for (let x = 0; x < usersPhotoArr[0].comments.length; x++) {
    let minIndexAvatar = 1
    let maxIndexAvatar = 6
    randomAvatar = Math.floor(Math.random() * (maxIndexAvatar - minIndexAvatar + 1)) + minIndexAvatar
    // получаем элемент шаблона и меняем src
    socialCommentsTemplate.content.querySelector('.social__picture').src = 'img/avatar-' + randomAvatar + '.svg'
    // получаем элемент шаблона и меняем alt
    socialCommentsTemplate.content.querySelector('.social__picture').alt = 'Аватар комментатора фотографии'
    // получаем элемент шаблона и меняем комментарий
    socialCommentsTemplate.content.querySelector('.social__text').textContent = usersPhotoArr[0].comments[x]

    // заносим клон (дубликат) шаблона comment в переменную
    let commentTemplateClone = socialCommentsTemplate.content.cloneNode(true)

    // клонируем клон (дубликат) шаблона в необходимое нам место
    socialComments.appendChild(commentTemplateClone)

  }
}
picturesArr(usersPhotoArr)

document.querySelector('.social__comment-count').classList.add('visually-hidden')
document.querySelector('.social__comments-loader').classList.add('visually-hidden')
document.querySelector('.comments-count').textContent = usersPhotoArr[0].comments.length
document.querySelector('.likes-count').textContent = usersPhotoArr[0].likes
document.querySelector('.social__caption').textContent = usersPhotoArr[0].description

let pictureList = document.querySelectorAll('.picture__img')
let bigPictureImg = document.querySelector('.big-picture__img>img')
let bigPicture = document.querySelector('.big-picture')

for (let i = 0; i < pictureList.length; i++) {
  pictureList[i].addEventListener('click', function () {
    bigPictureImg.src = usersPhotoArr[i].url
    bigPictureImg.alt = '#'
    bigPicture.classList.remove('hidden')
  })
}
let closeBigPictureBtn = bigPicture.querySelector('.big-picture__cancel')
console.log(closeBigPictureBtn);

function closeBigPicture() {
  bigPicture.classList.add('hidden')
}

closeBigPictureBtn.addEventListener('click', closeBigPicture) 
document.addEventListener('keydown', function(evt) {
  // Проверяем, что код клавиши равен 'Escape'
  if (evt.key === 'Escape') {
    // Код отсюда выполнится только при нажатии ESC
    closeBigPicture()
  }
})




