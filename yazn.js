let a = scrollY;
console.log(a);
let sc = document.querySelector(".ti-3");
let sc1 = document.querySelector(".ti-1");
let contenr = document.querySelector(".contenr")
sc.onclick = function () {
    window.scrollTo({
        top: 715.1875,
        behavior: "smooth"
    }
    )
}
sc1.onclick = function () {
    scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
let del = document.querySelector(".del");
let ti = document.querySelector(".ti");
window.onscroll = function () {
    if (window.scrollY > 60) {
        del.style.display = "flex";
        ti.style.top = "-8px"
        ti.style.color = "white"
        ti.style.textShadow = "11px 11px 9px rgb(0 0 0)"
        ti.style.border = "white 2px solid"
    }
    else {
        del.style.display = "none";
        ti.style.top = "25px"
        ti.style.color = "black"
        ti.style.textShadow = "11px 11px 9px rgb(0 0 0)"
        ti.style.border = "none"
    }

}
let sc2 = document.querySelector(".ti-2");
sc2.onclick = function () {
    window.scrollTo({
        top: 1900,
        behavior: "smooth"
    }
    )
}


let sc4 = document.querySelector(".ti-4");
sc4.onclick = function () {
    scrollTo({
        top: 2294,
        behavior: "smooth"
    })
}