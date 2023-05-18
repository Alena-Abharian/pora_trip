window.addEventListener("DOMContentLoaded", function (){

    const videos = document.querySelectorAll(".video_youtube");

    videos.forEach(function (video, index){
        const blocHidden = document.querySelector(".video_wrap-" + (index + 1));

        video.addEventListener("click", function (){

            if( video.classList.contains('ready')){
                return
            }

            video.classList.add('ready')
            blocHidden.classList.add("hidden")

            const src = video.dataset.src

            video.insertAdjacentHTML("afterbegin", "<iframe class='video_youtube-player' src="+src+" " +
                "frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>")
        })

    })

})

