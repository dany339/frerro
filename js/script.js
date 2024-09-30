const brandItem = $(".brand-list > li");

brandItem.eq(0).addClass("active");

brandItem.on("mouseenter", function () {
    brandItem.removeClass("active");
    $(this).addClass("active");
});

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-menu .tab-link");

    tabs.forEach(function (tab) {
        tab.addEventListener("click", function (event) {
            event.preventDefault();

            // 모든 탭에서 active 클래스 제거
            tabs.forEach(function (t) {
                t.classList.remove("active");
            });

            // 클릭한 탭에 active 클래스 추가
            this.classList.add("active");
        });
    });
});

window.addEventListener("scroll", function () {
    const breadcrumb = document.querySelector(".breadcrumb");
    const qualityItem = document.querySelector(".quality-item");
    const effortItem = document.querySelector(".effort-item");
    const visionSection = document.getElementById("vision");
    const historySection = document.getElementById("history");
    const qualitySection = document.getElementById("quality");
    const effortSection = document.getElementById("effort");

    const header = document.querySelector("header"); // 헤더 요소 선택

    const headerHeight = header.offsetHeight; // 헤더의 높이 계산
    const scrollPosition = window.scrollY; // 현재 스크롤 위치
    const breadcrumbTop = 10.7 * 10; // 빵조각의 원래 위치 (10.7rem = 107px)

    // 고정 위치 관리
    if (scrollPosition >= breadcrumbTop) {
        breadcrumb.classList.add("sticky");
    } else {
        breadcrumb.classList.remove("sticky");
    }

    // 헤더와 겹칠 때 빵조각 고정 해제
    if (scrollPosition <= headerHeight) {
        breadcrumb.classList.remove("sticky");
        breadcrumb.style.position = "absolute";
        breadcrumb.style.top = `${breadcrumbTop}px`; // 원래 자리로 돌아감
        qualityItem.style.display = "none";
        effortItem.style.display = "none";
    }
    // 비전 섹션에 도달했을 때
    if (scrollPosition >= visionSection.offsetTop && scrollPosition < qualitySection.offsetTop) {
        breadcrumb.classList.add("sticky");
        breadcrumb.style.position = "fixed";
        breadcrumb.style.top = "0"; // 상단에 고정
        qualityItem.style.display = "none";
        effortItem.style.display = "none";
    }
    // 품질 관리 섹션에 도달했을 때
    else if (scrollPosition >= qualitySection.offsetTop && scrollPosition < effortSection.offsetTop) {
        breadcrumb.classList.add("sticky");
        breadcrumb.style.position = "fixed";
        breadcrumb.style.top = "0"; // 상단에 고정
        qualityItem.style.display = "inline"; // 품질 관리 표시
        effortItem.style.display = "none"; // 지속가능성 숨김
    }
    // 지속 가능성 섹션에 도달했을 때
    else if (scrollPosition >= effortSection.offsetTop) {
        breadcrumb.classList.remove("sticky");
        breadcrumb.style.position = "absolute";
        breadcrumb.style.top = `${effortSection.offsetTop + 50}px`; // effort 섹션 상단에 고정
        qualityItem.style.display = "none"; // 품질 관리 숨김
        effortItem.style.display = "inline"; // 지속가능성 표시
    } else {
        // 초기 상태 (스크롤이 위쪽에 있을 때)
        breadcrumb.classList.remove("sticky");
        qualityItem.style.display = "none";
        effortItem.style.display = "none";
    }
});
