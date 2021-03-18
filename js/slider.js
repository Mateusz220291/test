let activeElement = 0;
const timeChange = 6000;

const userImg = document.querySelector('.container__img');
const h3Html = document.querySelector('.container__title');
const pHtml = document.querySelector('.container__info');


const colorImages = ['images/x.jpg', 'images/y.jpg', 'images/z.jpg'];
const names = ['Firma X', 'Firma Y', 'Firma Z',];
const opinions = ['Wywodząca sie z X specjalizuje się w produkcji nowoczesnych paneli winylowych, które dzięki wytrzymałości i łatwości montażu zdobywają coraz większe uznanie.', 'Firma Y posiada kilkudziesięcioletnią tradycję w produkcji parkietów i podłóg drewnianych. Jej produkty mimo upływu lat cieszą się dużym zainteresowaniem klientów', 'Firma o międzynarodowym zasięgu, która specjalizuje się w produkcji ekskluzywnych podłóg. Solidne wykonanie i liczna kolekcja wzorów zadowoli gusta najbardziej wymagających klientów'];

function changeElement() {
    activeElement++;
    if (activeElement == colorImages.length) {
        activeElement = 0;
    }
    userImg.src = colorImages[activeElement];
    h3Html.textContent = names[activeElement];
    pHtml.textContent = opinions[activeElement];

}

setInterval(changeElement, timeChange)