//pop-up

const form = document.querySelector('.forma');

//open
document.getElementById('open_pop-up').addEventListener('click', function () {
    const submit = e => {
        e.preventDefault();
        if(e.currentTarget.phone.value){
            document.getElementById("backdrop_pop-up").classList.add("is-hidden")
        }
    }
    form.addEventListener('submit', submit)
})


//close
document.getElementById('close_pop-up').addEventListener('click', function () {
    document.getElementById("backdrop_pop-up").classList.remove("is-hidden")
})