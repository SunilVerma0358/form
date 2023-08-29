let accordionOne = document.querySelectorAll(".accordionOne")

accordionOne.forEach(function(show) {
    show.addEventListener("click", function() {
        const hide = document.querySelector(".active")
        show.classList.toggle("active")
        hide && hide.classList.remove("active")
    })
})