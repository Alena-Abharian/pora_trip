const sliderImg = document.querySelector('[data-img]');
const pagination = document.querySelector('.photo_count');

const imgArr = ['Mikli3.jpg','imgMikli.jpg', 'Mikli2.jpg', 'Mikli4.jpg'];
const numberArr = ['1/4','2/4', '3/4', '4/4'];

let i = 0; //current img index

//btn-1 prev
document.querySelector('.photo_btn-1').addEventListener('click', function () {
    if(i <= 0) i = imgArr.length;
    i--;
    return setImg();
})

//btn-2 next
document.querySelector('.photo_btn-2').addEventListener('click', function () {
    if(i >= imgArr.length-1) i = -1;
    i++;
    return setImg();
})



function setImg() {
        sliderImg.setAttribute('src', './image/' + imgArr[i])
        pagination.innerText = numberArr[i]
}