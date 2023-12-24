const imageArray =["../img/img1.jpg","../img/img2.jpg","../img/img3.jpg",]
img_slide = document.querySelector("#img_slide")
let imgIndex=0;
function slideShow() {
    img_slide.setAttribute("src", imageArray[imgIndex]);
    imgIndex++
    if (imgIndex >= imageArray.length) {
         imgIndex=0;
    }
}
setInterval(slideShow, 3000)

const Shikara_hostel_images = document.getElementById("Shikara_hostel")
const next = document.getElementById("next")
const previous = document.getElementById("previous")


let imageArray_shakira= ["../room/room1.jpg","../room/room2.jpg","../room/room3.jpg","../room/room4.jpg"]

let m =0;
function shakira_images_next() {
    img = imageArray_shakira[m]
    m++

    if (m >= imageArray_shakira.length) {
        return m=0
    }
    Shikara_hostel_images.src= img
}

function shakira_images_previous() {
    m--
    img = imageArray_shakira[m]
    if (m < 0) {
        return m= imageArray_shakira.length-1
    }
    Shikara_hostel_images.src= img
}

const visala_images = document.getElementById("visala_images")
let imageArra_Viysala = ["../room/room4.jpg","../room/room14.jpg","../room/room6.jpg","../room/room7.jpg"]

function visala_images_next() {
    img_one = imageArra_Viysala[m]
    m++

    if (m >= imageArra_Viysala.length) {
        return m=0
    }
    visala_images.src= img_one
}
function visala_images_previous(){
    m--
    img = imageArra_Viysala[m]
    if (m < 0) {
        return m= imageArra_Viysala.length-1
    }
    visala_images.src= img
}


const imageArraySlider =["../room/room14.jpg","../room/room9.jpg","../room/room10.jpg","../room/room12.jpg",
"../room/room1.jpg","../room/room2.jpg","../room/room13.jpg","../room/room4.jpg"]
hotel_slideshow = document.getElementById("hotel_slideshow")

let imgIndexe=0;
function slideShows() {
    hotel_slideshow.setAttribute("src", imageArraySlider[imgIndexe]);
    imgIndexe++
    if (imgIndexe >= imageArraySlider.length) {
         imgIndexe=0;
    }
}
setInterval(slideShows, 2000)