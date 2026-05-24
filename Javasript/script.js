
AOS.init();

$(".my-slider").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 2,
    responsive: {
        320: {
            items: 1
        },

        576: {
            items: 1
        }
    }
})





const addOne = () => {
    let img = document.querySelector("#one");
    img.setAttribute("class", "img1")

}

const addTwo = () => {
    let img = document.querySelector("#one");
    img.setAttribute("class", "img2")
}

const addThree = () => {
    let img = document.querySelector("#one");
    img.setAttribute("class", "img3")
}

const addFour = () => {
    let img = document.querySelector("#one");
    img.setAttribute("class", "img4")
}

const addFive = () => {
    let img = document.querySelector("#one");
    img.setAttribute("class", "img5")
}

const addSix = () => {
    let img = document.querySelector("#one");
    img.setAttribute("class", "img6")
}


