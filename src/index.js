'use strict';

import renderCards from './modules/renderCards';
import renderCatalog from './modules/renderCatalog';
import toggleCheckBox from './modules/toggleCheckBox';
import toggleCart from './modules/toggleCart';
import addCart from './modules/addCart';
import actionPage from './modules/actionPage';
import getData from './modules/getData';


// getData().then((data) => {
//     renderCards(data);
//     renderCatalog();
//     toggleCheckBox();
//     toggleCart();
//     addCart();
//     actionPage();
// });

//Ассинхронная функция
(async function(){
    const db = await getData();
    renderCards(db);
    renderCatalog();
    toggleCheckBox();
    toggleCart();
    addCart();
    actionPage();
}());
