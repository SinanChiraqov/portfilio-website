const left = document.querySelector('.left__button');
const right = document.querySelector('.right__button');
const slideBox = document.querySelector('.slider__body')

const sliderData = [
  {
    id: 1,
    span: "New arrivals",
    title1: "sport eddition",
    title2: "best choise of the year",
    shippinginfo: "discount 20% on productes & free shipping",
    imgPath: "slider1.jpg"
  },
  {
    id: 2,
    span: "New arrivals",
    title1: "sport eddition",
    title2: "best choise of the year",
    shippinginfo: "discount 20% on productes & free shipping",
    imgPath: "slider2.jpg"
  },
  {
    id: 3,
    span: "New arrivals",
    title1: "sport eddition",
    title2: "best choise of the year",
    shippinginfo: "discount 20% on productes & free shipping",
    imgPath: "slider3.jpg"
  },
];


let id = 1;

const slide = (index) => {
  var findedData = sliderData.find(item => item.id === index);
  slideBox.style.backgroundImage = `url("./assets/images/${findedData.imgPath}")`;
}

const prevSlide = () => {
  id--;
  if (id <= 0) {
    id = sliderData.length;
  }
  slide(id)
}


const nextSlide = () => {
  id++;
  if (id > sliderData.length) {
    id = 1;
  }
  slide(id);
}


left.addEventListener('click', prevSlide)
right.addEventListener('click', nextSlide)