/*Создать длинный текст,
 в конце поставить кнопку читать далее
При нажатии на эту кнопку - 
добавьте еще текст для продолжения чтения*/

const textElement = document.getElementById('text');
const readMoreBtn = document.getElementById('readMoreBtn');

// Массив с дополнительными абзацами текста
const additionalParagraphs = [
    `<p id="paragraph2">
    Катится колобок по дороге, а навстречу ему заяц:
     — Колобок, колобок! Я тебя съем!
     — Не ешь меня, косой зайчик! Я тебе песенку спою, — сказал колобок и запел:
     Я по коробу скребен,
     По сусеку метен,
     На сметане мешон
     Да в масле пряжон,
     На окошке стужон;
     Я от дедушки ушел,
     Я от бабушки ушел,
     От тебя, зайца, не хитро уйти!
     И покатился себе дальше; только заяц его и видел!.. </p>`,
];

let currentParagraphIndex = 0;

readMoreBtn.addEventListener('click', () => {
    if (currentParagraphIndex < additionalParagraphs.length) {
        textElement.innerHTML += additionalParagraphs[currentParagraphIndex];
        currentParagraphIndex++;
    }
});

