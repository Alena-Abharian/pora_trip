//pop-up

const form = document.querySelector('.forma');

//open
document.getElementById('open_pop-up').addEventListener('click', function () {
    const submit = e => {
        e.preventDefault();
        if(e.currentTarget.phone.value){
            document.getElementById("backdrop_pop-up").classList.add("is-hidden")
            console.log(e.currentTarget.phone.value)
            form.reset()
        }
    }
    form.addEventListener('submit', submit)
})


//close
document.getElementById('close_pop-up').addEventListener('click', function () {
    document.getElementById("backdrop_pop-up").classList.remove("is-hidden")
})

//close outside the window
document.querySelector("#backdrop_pop-up .pop-up" ).addEventListener('click', evt => {
    evt._isClickWithInModal = true
});

document.getElementById("backdrop_pop-up").addEventListener('click', evt => {
    if(evt._isClickWithInModal) return;
    evt.currentTarget.classList.remove('is-hidden')
})

//close esc
window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
        document.getElementById("backdrop_pop-up").classList.remove("is-hidden")
    }
})