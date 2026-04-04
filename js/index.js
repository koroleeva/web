document.addEventListener("DOMContentLoaded", function() {
    const faqCards = document.querySelectorAll(".faq-card");

    const answers = [
        "Стандартные порции еды для банкетов — 1200-1500 г. на персону. Но важно учитывать тип мероприятия, количество гостей, их возраст и пол, продолжительность мероприятия, сезонность и аллергические реакции. Наша команда с радостью поможет Вам в этом вопросе!",
        "Мы принимаем оплату наличными, картой и по безналичному расчету.",
        "Чтобы сделать заказ, выберите интересующий Вас формат мероприятия и заполните анкету. Наши менеджеры перезвонят Вам в ближайшее время и помогут с выбором!",
        "Да, мы предоставляем дегустацию блюд перед заказом.",
        "Условия сотрудничества оговариваются индивидуально в зависимости от формата мероприятия.",
        "Бронирование и внесение изменений возможно до согласованных сроков, уточняйте у менеджера.",
        "Приносить свой алкоголь или еду можно только при согласовании с нашей командой.",
        "Да, мы можем организовать фотографа, видеографа, диджея и ведущего по Вашему запросу."
    ];

    faqCards.forEach((card, index) => {
        const question = card.querySelector(".faq-question");
        const icon = card.querySelector(".faq-icon");
        const header = document.createElement("div");
        header.classList.add("faq-header");

        header.appendChild(question);
        header.appendChild(icon);

        card.prepend(header);

        const answer = document.createElement("div");
        answer.classList.add("faq-answer");
        answer.textContent = answers[index];
        card.appendChild(answer);

        card.addEventListener("click", () => {
            const isActive = card.classList.contains("active");
            if (isActive) {
                answer.style.display = "none";
                card.classList.remove("active");
            } else {
                answer.style.display = "block";
                card.classList.add("active");
            }
        });
    });
});


const eventCards = document.querySelectorAll('.event-card');
const eventsImage = document.querySelector('.events-image');

const eventImages = [
    'img/wedding.jpg',
    'img/corporate.jpg',
    'img/new-year.jpg',
    'img/birthday.jpg',
    'img/childrens.jpg'
];

if (eventCards.length > 0) {
    eventCards[0].classList.add('selected');
    eventsImage.src = eventImages[0];
}

eventCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        eventCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        eventsImage.src = eventImages[index];
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.querySelector('.location-button');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closePopup');

    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.add('active');
    });

    const closePopup = () => {
        overlay.classList.remove('active');
    };

    closeBtn.addEventListener('click', closePopup);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closePopup();
        }
    });
});