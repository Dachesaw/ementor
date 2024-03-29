const template = document.createElement(`template`)

template.innerHTML = `
<menu>
    <ul class="ul-header">
        <li><a class="a-header" href="#">О нас</a></li>
        <li><a class="a-header" href="#">Платформа</a></li>
        <li><a class="a-header" href="#">Курсы</a></li>
        <li><a class="a-header" href="#">Лекции</a></li>
        <li><a class="a-header" href="#">Тарифы</a></li>
        <li><a class="a-header" href="#">Блог</a></li>
        <li><a class="a-header" href="#">Контакты</a></li>
    </ul>
</menu>
    `

document.body.appendChild(template.content)