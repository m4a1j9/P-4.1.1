"use strict"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlockBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlockBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

// Сенсор иои пк
if (isMobile.any()) {
    document.body.classList.add('_touch');
    // Клик по стрелочке
    let menuArrows = document.querySelectorAll('.lang');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.classList.toggle('_active');
            });
        }
    }
} else {
    document.body.classList.add('_pc');
}

//---------------------------------------------------------------------------------

// Меню бургер
const iconMenu = document.querySelector('.menu__icon'),
    menuNav = document.querySelector('.menu__nav');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.documentElement.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuNav.classList.toggle('_active');

    });
}

//---------------------------------------------------------------------------------

// Прокрутка + подсветка навигации
jQuery(function ($) {

    let section = $('.section'),
        nav = $('.menu__nav');

    $(window).on('scroll', function () {
        const position = $(this).scrollTop() + 300;

        section.each(function () {
            const top = $(this).offset().top,
                bottom = top + $(this).outerHeight();

            if (position >= top && position <= bottom) {
                nav.find('a').removeClass('_illumination');

                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('_illumination');

                // Анимация Skills
                if ($(this).attr('id') == 'skills') {
                    $(this).find('._anim-items-4').addClass('_animate');
                };

            }
        });
    });

    nav.find('a').on('click', function () {
        const id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 1000);

        $('.nav').removeClass('_active');

        return false;
    });

});

//---------------------------------------------------------------------------------

// Прокрутка мини-навигации
jQuery(function ($) {
    let miniNav = $('.slide__mini-slides');

    miniNav.find('a').on('click', function () {
        const id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 1000);

        return false;
    });

});

//---------------------------------------------------------------------------------

//Рандомная кнопка
//let rnd = Math.round(Math.random() * 10);

let
    btn = document.querySelector('.offer__button');
btn.addEventListener('click', getRandomValue);



function getRandomValue() {
    let
        img = document.querySelector('.offer__img');

    if (!(img.classList.contains('_walking'))) {
        let rnd = Math.round(Math.random() * 10);
        //console.log(rnd);

        if (rnd == 0) {
            // Jake
            img.src = "img/jake.gif";

        } else if (0 < rnd && rnd <= 3) {
            // TODO Кнопка меняется местами
            // Коддинг
            img.src = "img/code2.gif";

        } else if (3 < rnd && rnd <= 6) {
            // Коддинг
            img.src = "img/code2.gif";

        } else if (6 < rnd && rnd <= 9) {
            // Осмотр
            img.src = "img/QLg.gif";

        } else if (rnd == 10) {
            // Переворот сайна на 180 на 1 с
            document.documentElement.style.cssText = `transform: scaleX(-100%);`;
            img.style.cssText = `display: none`;
            setTimeout(_ => {
                document.documentElement.style.cssText = `transform: scaleX(100%);`
                img.style.cssText = `display: block`;
            }, 3000);
        }
    }


    img.classList.toggle('_walking');
}


//---------------------------------------------------------------------------------

// Мини-слайды
const projectsContainerSlides = document.querySelectorAll('.slide');

if (projectsContainerSlides.length > 0) {
    function createMiniSlide() {
        for (let index = 0; index < projectsContainerSlides.length; index++) {
            const
                miniSlideList = document.querySelector('.slide__mini-slides'),
                miniSlide = document.createElement('a');


            miniSlide.classList.add('slide__mini-slide');
            miniSlide.setAttribute('href', `#slide${[index]}`);
            miniSlideList.append(miniSlide);
        }
    }
    createMiniSlide();

}

//---------------------------------------------------------------------------------

// Координаты объекта
function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
    }
}

// Анимации при скролле
const animItems = document.querySelectorAll('._anim-items');
const animItems3 = document.querySelectorAll(`._anim-items-3`);

window.addEventListener('scroll', animOnScroll);

function animOnScroll() {
    if (animItems.length > 0) {
        for (let index = 0; index < animItems.length; index++) {
            const anim = animItems[index],
                animItemHeight = anim.offsetHeight,
                animItemOffset = offset(anim).top,
                animStart = 4;

            // Момент анимации
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                anim.classList.add('_animate');
            } else {
                anim.classList.remove('_animate');
            }
        }
    }

    if (animItems3.length > 0) {
        for (let index = 0; index < animItems3.length; index++) {
            const anim = animItems3[index],
                animItemHeight = anim.offsetHeight,
                animItemOffset = offset(anim).top,
                animStart = 4;

            // Момент анимации
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                anim.classList.add('_animate');
            }
        }
    }
}
setTimeout(() => {
    animOnScroll();
}, 500);


// Анимация мини-слайдов
if (projectsContainerSlides.length > 0) {
    window.addEventListener('scroll', switchMiniSlides);

    const minislides = document.querySelectorAll('.slide__mini-slide');
    const projectsContainerSlides = document.querySelectorAll('.projects__container-slide');

    function switchMiniSlides() {
        for (let i = 1; i <= projectsContainerSlides.length; i++) {
            const projectsContainerSlide = projectsContainerSlides[projectsContainerSlides.length - i],
                minislide = minislides[projectsContainerSlides.length - i],
                projectsContainerSlideOffsetTop = offset(projectsContainerSlide).top;

            if (document.documentElement.scrollTop > (projectsContainerSlideOffsetTop - window.innerHeight / 2 + 100)) {

                for (let i = 0; i < projectsContainerSlides.length; i++) {
                    const minislide = minislides[i];
                    minislide.classList.remove('_animate');
                }

                minislide.classList.add('_animate');
                return;
            } else {
                minislide.classList.remove('_animate');
            }
        }
    }
    switchMiniSlides();
}


// Анимации только при скролле и обратно
const animItems1 = document.querySelectorAll('._anim-items-1'),
    animItems2 = document.querySelectorAll('._anim-items-2');

if (animItems1.length > 0 || animItems2.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {

        // Меню
        if (animItems1.length > 0) {
            for (let index = 0; index < animItems1.length; index++) {
                const animItem = animItems1[index];
                if (pageYOffset > 100) {
                    animItem.classList.add('_animate');
                } else {
                    animItem.classList.remove('_animate');
                }
            }
        }

        // and wellcome
        if (animItems2.length > 0) {
            for (let index = 0; index < animItems2.length; index++) {
                const
                    animItem = animItems2[index],
                    animItemHeight = animItem.offsetHeight,
                    animItemOffset = offset(animItem).top,
                    animStart = 4;

                // Момент анимации
                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_animate');
                } else {
                    animItem.classList.remove('_animate');
                }
            }
        }
    }
}

// Прлоудер
let preloader = document.querySelector('.preloader')
document.documentElement.classList.add('_lock');
// Вертикальный parallax
window.onload = function () {
    const parallaxes = document.querySelectorAll('.parallax');
    preloader.classList.add('_loaded');
    document.documentElement.classList.remove('_lock');

    //высота документа
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );

    window.addEventListener('scroll', () => {

        parallaxes.forEach(parallax => {
            let speed = parallax.dataset.speed;

            if (typeof speed === 'undefined') {
                speed = 1;
            }

            let onePercent = scrollHeight / 100;
            parallax.style.cssText = `transform: translateY(${-((window.pageYOffset / onePercent / 10) * speed)}%);`;
        });

    });
}

// Активация параллакс-библиотеки
var move = document.getElementById('move');
var parallaxMove = new Parallax(move);

//---------------------------------------------------------------------------------

// Коприрование при клике
const copies = document.querySelectorAll('.work__contact');

for (let i = 0; i < copies.length; i++) {
    let copy = copies[i];
    copy.addEventListener('click', clickHandler);
}

function clickHandler(event) {
    let str = this.innerText,
        el = document.createElement('textarea');

    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    alertCopy();

    event.preventDefault();
}

function alertCopy() {
    let div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = "copied";
    document.body.append(div);
    setTimeout(_ => div.remove(), 1000);
}

//---------------------------------------------------------------------------------

// Смена языка
(function ($) {

    function Translate() {
        // инициализация
        this.init = function (attribute, lng) {
            this.attribute = attribute;
            this.lng = lng;
        };
        // Перевод
        this.process = function () {
            var _self = this;
            var xrhFile = new XMLHttpRequest();
            // подгрузка контента
            xrhFile.open("GET", "./translations/" + this.lng + ".json");
            xrhFile.onreadystatechange = function () {
                if (xrhFile.readyState === 4) {
                    if (xrhFile.status === 200 || xrhFile.status == 0) {
                        var LngObject = JSON.parse(xrhFile.responseText);
                        //console.log(LngObject["name1"]);
                        var allDom = document.getElementsByTagName("*");
                        for (var i = 0; i < allDom.length; i++) {
                            var elem = allDom[i];
                            var key = elem.getAttribute(_self.attribute);
                            if (key != null) {
                                //console.log(key);
                                elem.innerHTML = LngObject[key];
                            }
                        }
                    }
                }
            };
            xrhFile.send();
        };
    }

    // Смена языка
    function loadNewLang(new_lang) {
        var translate = new Translate();
        var currentLng = new_lang;
        var attributeName = 'data-lang';
        translate.init(attributeName, currentLng);
        translate.process();
    }

    loadNewLang('ru');

    $('.lang__switch').on('click', function (e) {
        e.preventDefault();
        $('.lang__switch').css('display', 'flex');

        let lang = $(this).attr('id'),
            oldLang = $('.lang__choose').attr('id'),
            flag = $(this).find('.switch__flag').attr('src');

        $('.lang__choose').toggleClass(`${oldLang} ${lang}`).text(lang).attr(`id`, lang);
        $('.lang__flag').attr(`src`, flag);

        switch (lang) {
            case 'ru':
                $('.slide__input').attr('placeholder', 'Ну, а зачем ты все это стер?');
                break;
            case 'en':
                $('.slide__input').attr('placeholder', 'Well, why did you erase it all?');
                break;
            case 'uk':
                $('.slide__input').attr('placeholder', 'Ну, а навіщо ти все це стер?');
                break;
            default:
                break;
        }

        $(this).css('display', 'none');

        loadNewLang(lang);

    });

    // скрыть уже выбранный язык при загрузке
    let newId = $('.lang__choose').attr('id');
    $(`.lang__switch#${newId}`).css('display', 'none');

})(jQuery);

//---------------------------------------------------------------------------------

