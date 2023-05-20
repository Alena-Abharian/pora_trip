//pop-up

const form = document.querySelector('.forma');

//open
document.getElementById('open-pop-up').addEventListener('click', function () {
    const submit = e => {
        e.preventDefault();
        if(e.currentTarget.phone.value){
            document.getElementById("backdrop").classList.add("is-hidden")
        }
    }
    form.addEventListener('submit', submit)
})


//close
document.getElementById('close-pop-up').addEventListener('click', function () {
    document.getElementById("backdrop").classList.remove("is-hidden")
})