AOS.init();

// TOP버튼 (컨트롤+ / 하면 // 주석 되는거 )
const html = document.documentElement;
const htmlPos = html.scrollHeight / 2;

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;

    if (scrollTop >= htmlPos) {
        bntTop.classList.add("active");
    } else {
        bntTop.classList.remove("active");
    }
});
