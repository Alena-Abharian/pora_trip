//modal
const form = document.querySelector('.form');

function hideModal () {
    document.getElementById("backdrop_modal").classList.remove("is-hidden")
}

const submitForm = e => {
    e.preventDefault();

    const {name, tel, comment} = form;
    const values = {
        name: name.value,
        tel: tel.value,
        comment: comment.value
    }
    console.log(values)
    form.reset()
    hideModal()
}
form.addEventListener('submit', submitForm)

//open
document.getElementById('open_modal').addEventListener('click', function () {
      document.getElementById("backdrop_modal").classList.add("is-hidden")
})

//close
document.getElementById('close_modal').addEventListener('click', function () {
    hideModal()
})

//close outside the window
document.querySelector("#backdrop_modal .modal" ).addEventListener('click', evt => {
    evt._isClickWithInModal = true
});

document.getElementById("backdrop_modal").addEventListener('click', evt => {
    if(evt._isClickWithInModal) return;
    evt.currentTarget.classList.remove('is-hidden')
})

//close esc
window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
       document.getElementById("backdrop_modal").classList.remove("is-hidden")
    }
})