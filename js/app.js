/* Remember scroll position */

// window.onscroll = function () {
//     let scrollPos = window.pageYOffset;
//     localStorage.setItem("scrollPos", scrollPos);
//     console.log(scrollPos)
// }

window.onload = function () {
    console.log("Loaded")
    setTimeout((e) => {
        console.log("Remembered location : ", localStorage.getItem("scrollPos"))
        window.scrollTo(0, localStorage.getItem("scrollPos"))
    }
        , 1000)
}

window.addEventListener("beforeunload", (e)=>{
    console.log("UNLOADING!")
    let scrollPos = window.pageYOffset;
    localStorage.setItem("scrollPos", scrollPos);
})