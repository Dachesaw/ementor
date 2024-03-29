document.addEventListener('DOMContentLoaded', function () {


    const template = document.createElement(`template`)

    template.innerHTML = `
<footer>
        <div class="column">
            <ul>
                <li>
                    <div class="logo"><img src="components/img/logo.svg" alt="">
                        E-Mentor
                    </div>
                </li>
                <li class="p-block">Образовательная онлайн-платформа <br> для развития и тренировки навыков <br>
                    в сфере информационных технологий</li>
                <li>
                    <div class="f-svg-container">
                        <ul>
                            <li>
                                <a href=""><img src="components/img/facebock-g.svg" alt=""></a>
                            </li>
                            <li>
                                <a href=""><img src="components/img/vk-g.svg" alt=""></a>
                            </li>
                            <li>
                                <a href=""><img src="components/img/instagram-g.svg" alt=""></a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div class="column">
            <ul>
                <li>
                    <h4>Обучение</h4>
                </li>
                <li><a href="">Курсы</a></li>
                <li><a href="">Вебинары</a></li>
                <li><a href="">Тренажеры</a></li>
                <li><a href="">Воркшопы</a></li>
            </ul>
        </div>
        <div class="column">
            <ul>
                <li>
                    <h4>О нас</h4>
                </li>
                <li><a href="">О платформе</a></li>
                <li><a href="">Преподаватели</a></li>
                <li><a href="">Тарифы</a></li>
                <li><a href="">Отзывы</a></li>
            </ul>
        </div>
        <div class="column">
            <ul>
                <li>
                    <h4>Контакты</h4>
                </li>
                <li><a href="">Связаться с нами</a></li>
                <li><a href="">Консультация</a></li>
                <li><a href="">Реквизиты</a></li>
                <li><a href="">Поддержка</a></li>
            </ul>
        </div>
        <div class="column">
            <ul>
                <li>
                    <h4>Возникли вопросы?</h4>
                </li>
                <li>Напишите нам на почту <br> <a href="">
                        education@ementor.info</a></li>
            </ul>
        </div>
    </footer>
    <div class="footer-block">
        <p>E-Mentor © 2021 Все права защищены</p>
        <div>
            <p>Политика обработки персональных данных</p>
            <p>Публичная оферта</p>
        </div>
    </div>
    `;

    document.body.appendChild(template.content)

});