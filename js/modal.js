//modal


//open
document.getElementById('open_modal').addEventListener('click', function () {
            document.getElementById("backdrop_modal").classList.add("is-hidden")
})


//close
document.getElementById('close_modal').addEventListener('click', function () {
    document.getElementById("backdrop_modal").classList.remove("is-hidden")
})