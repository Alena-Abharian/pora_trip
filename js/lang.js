import {landingText} from './failLang.js';

const allLangs = ['ru', 'en'];
let currentLang = localStorage.getItem('language') ||  checkBrowserLang() || 'en';
const langBtns= document.querySelectorAll('[data-btn]');

function changeLang(){
    for(const key in landingText){
        const elem = document.querySelector(`[data-lang=${key}]`)
        if(elem){
            elem.textContent = landingText[key][currentLang];
        }
    }
};

langBtns.forEach(btn=>{
    btn.addEventListener('click', (event)=>{
        currentLang = event.target.dataset.btn;
        localStorage.setItem('language',event.target.dataset.btn);
        resetActiveClass(langBtns, 'lang_active')
        btn.classList.add('lang_active');
        changeLang();

    })
});

console.log(localStorage.getItem('language'))
function resetActiveClass(arr, activeClass){
    arr.forEach(elem=>{
        elem.classList.remove(activeClass)
    })
}

function checkActiveLangBtn(){
    switch (currentLang){
        case "ru":
            document
                .querySelector('[data-btn="ru"]')
                .classList.add('lang_active');
            break;
        case "en":
            document
                .querySelector('[data-btn="en"]')
                .classList.add('lang_active');
            break;
        default:
                document
                    .querySelector('[data-btn="en"]')
                    .classList.add('lang_active');
                break;
    }
}

checkActiveLangBtn();

function checkBrowserLang(){
    const navLang = navigator.language.slice(0,2).toLowerCase();
    const result = allLangs.some((elem => {
        return elem ===navLang;
    }))
    if(result) {
        return navLang;
    }
}
