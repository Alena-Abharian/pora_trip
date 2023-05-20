//pop-up

const form = document.querySelector('.forma');

const submit = e => {
    e.preventDefault();
    // console.log(e.currentTarget.phone.value);
    document.getElementById('open-pop-up').addEventListener('click', function () {
        document.getElementById("backdrop").classList.add("is-hidden")
    })
}
form.addEventListener('submit', submit)


//------------------------------------------------------------------


document.getElementById('close-pop-up').addEventListener('click', function () {
    document.getElementById("backdrop").classList.remove("is-hidden")
})