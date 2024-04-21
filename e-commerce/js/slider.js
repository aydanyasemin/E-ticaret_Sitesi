//! slider start
let slideIndex = 1;
showSlider();

function plusSlide(n) {
    showSlider((slideIndex += n));
}
// n = parametre

setInterval(() => {
    showSlider((slideIndex += 1));
}, 4000);
// setınterval -> sürekli tekrar etmesini istediğimiz şeyler için 

function showSlider(n) {
    const slider = document.getElementsByClassName("slider-item");
    const sliderDots = document.getElementsByClassName("slider-dot");

    if (n > slider.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slider.length;
    }

    for (let i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
    }
    // tüm htmlleri consol kısmında yazdırdı

    for (let i = 0; i < sliderDots.length; i++) {
        sliderDots[i].className = sliderDots[i].className.replace(" active", "");
    } //8

    slider[slideIndex - 1].style.display = "flex";
    sliderDots[slideIndex - 1].className += " active"; //8
}
//8 ile active verdiğimiz ilk dots ilerleme ile diğerlerine verdik


//! slider finish  