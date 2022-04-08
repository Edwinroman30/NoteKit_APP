import { loadCards } from "./cards-display.js";
import { likeFunction } from "./modules/cards-buttons/like.js";
import { updateCardsLoad } from "./modules/cards-buttons/update.js";


loadCards();

window.document.addEventListener('click', (e)=>{
    
    updateCardsLoad(e);
    likeFunction(e);
 
});
 