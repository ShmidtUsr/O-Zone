import filter from './filter';

//фильтр акции
export default function actionPage() {
    const cards = document.querySelectorAll('.goods .card'),
     discountCheckbox = document.getElementById('discount-checkbox'),
     goods = document.querySelector('.goods'),
     min = document.getElementById('min'),
     max = document.getElementById('max'),
     search = document.querySelector('.search-wrapper_input'),
     searchBtn = document.querySelector('.search-btn');

    //фильтр по акции
     discountCheckbox.addEventListener('click', filter);

     //фильтр по цене
    //  function filterPrice() {
    //      cards.forEach((card) => {
    //          const cardPrice = card.querySelector('.card-price');
    //          const price = parseFloat(cardPrice.textContent);
    //          if((min.value && price < min.value) || (max.value && price > max.value)) {
    //              card.parentNode.remove();
    //              //card.parentNode.style.display = 'none';
    //          } else {
    //              goods.appendChild(card.parentNode);
    //              //card.parentNode.style.display = '';
    //          }
    //      });
    //  }
    
    min.addEventListener('change', filter);
    max.addEventListener('change', filter);



     //Поиск
    searchBtn.addEventListener('click', () => {
        const searchText = new RegExp(search.value.trim(), 'i'); //regexr.com
        console.log(searchText);
        cards.forEach((card) => {
            const title = card.querySelector('.card-title');
            console.log(title);
            if(!searchText.test(title.textContent)) {
                card.parentNode.style.display = 'none';
            } else {
                card.parentNode.style.display = '';
            }
            search.value = '';
        });
    });
    //end поиск
}
//end фильтр акции