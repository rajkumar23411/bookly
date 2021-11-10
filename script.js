window.onscroll = () => {
    if (window.scrollY > 60) {
        document.querySelector('header .header-2').classList.add('active');
    } else {
        document.querySelector('header .header-2').classList.remove('active');
    }
}

window.onload = () => {
    if (window.scrollY > 60) {
        document.querySelector('header .header-2').classList.add('active');
    } else {
        document.querySelector('header .header-2').classList.remove('active');
    }
}



const profileBtn = document.querySelector('.profile'),
    cross = document.querySelector('#cross'),
    signInForm = document.querySelector('.signInForm');


profileBtn.addEventListener('click', () => {
    profileBtn.style.color = "#219150";
    signInForm.classList.add('showForm');
    cross.classList.add('showForm');
});

cross.addEventListener('click', () => {
    profileBtn.style.color = "#000";
    signInForm.classList.remove('showForm');
    cross.classList.remove('showForm');
});


const searchBtn = document.querySelector('#searchBtn'),
    searchBar = document.querySelector('.searchBar'),
    headerOne = document.querySelector('.header-1');

searchBtn.addEventListener('click', () => {
    searchBar.classList.toggle('showSearchBar');
    headerOne.classList.toggle('showSearchBar');

    if (headerOne.classList.contains('showSearchBar')) {
        searchBtn.style.color = "27ae60";
    } else {
        searchBtn.style.color = "#000";
    }
});



var swiper = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInnteration: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInnteration: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".book-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    autoplay: {
        delay: 9500,
        disableOnInnteration: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    autoplay: {
        delay: 9500,
        disableOnInnteration: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
var swiper = new Swiper(".blog-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    autoplay: {
        delay: 9500,
        disableOnInnteration: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});