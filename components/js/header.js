const template = document.createElement(`template`)

template.innerHTML = `
    <menu>
        <ul>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Платформа</a></li>
            <li><a href="#">Курсы</a></li>
            <li><a href="#">Лекции</a></li>
            <li><a href="#">Тарифы</a></li>
            <li><a href="#">Блог</a></li>
            <li><a href="#">Контакты</a></li>
        </ul>
    </menu>
    `

document.body.appendChild(template.content)