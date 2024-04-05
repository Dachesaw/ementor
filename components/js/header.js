const template = document.createElement(`template`)

template.innerHTML = `
<menu>
<div class="logo" id="log">
        <img src="components/img/logo.svg" alt="">
        <span class="spa">E-Mentor</span>
</div>
<div class="menu-container">
            <div class="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" for="menu__toggle">
                    <span></span>
                </label>

                <ul class="menu__box">
                    <li><a class="menu__item" href="#">О нас</a></li>
                    <li><a class="menu__item" href="#">Платформа</a></li>
                    <li><a class="menu__item" href="#">Курсы</a></li>
                    <li><a class="menu__item" href="#">Лекции</a></li>
                    <li><a class="menu__item" href="#">Тарифы</a></li>
                    <li><a class="menu__item" href="#">Блог</a></li>
                    <li><a class="menu__item" href="#">Контакты</a></li>
                </ul>
            </div>
        </div>
    <ul class="ul-header">
        <li><a class="a-header" href="#">О&nbspнас</a></li>
        <li><a class="a-header" href="#">Платформа</a></li>
        <li><a class="a-header" href="#">Курсы</a></li>
        <li><a class="a-header" href="#">Лекции</a></li>
        <li><a class="a-header" href="#">Тарифы</a></li>
        <li><a class="a-header" href="#">Блог</a></li>
        <li><a class="a-header" href="#">Контакты</a></li>
    </ul>
</menu>
    `;

document.body.appendChild(template.content)