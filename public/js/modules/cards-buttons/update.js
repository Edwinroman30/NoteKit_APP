// Defining references to modal update fields.

let $cardTitle = document.getElementById('up-card-title'),
$cardDescription = document.getElementById('up-card-description'),
$cardUrl = document.getElementById('up-card-img'),
$cardCategory = document.getElementById('up-card-category');

const loadValuesCards = async (card = {}) =>{


    $cardTitle.value = card.title;
    $cardDescription.value = card.description;
    $cardUrl.value = 'https://placeimg.com/200/200/any';

    const cardCategories = await fetch('http://localhost:8120/v1/api/category'),
    result = await cardCategories.json();
    
    let options = '';

    result.data.forEach( (catg) => {
        
            if(card._id == catg._id)
               options += `<option value="${catg._id} " selected>${catg.categoryName}</option>`;
            else
               options += ` <option value="${catg._id}">${catg.categoryName}</option> `;
    });

    console.log(options);
    $cardCategory.insertAdjacentHTML('afterbegin', options);
    
}

export const updateCardsLoad = async (e) => {

    try {

        if(e.target.getAttribute('id') == 'updateCardsLoad'){
            
           let uniqueIdentifier = e.target.parentElement.parentElement.parentElement.getAttribute('uid') ;

           const resultCards = await fetch(`http://localhost:8120/v1/api/note/${uniqueIdentifier}`);
           const data = await resultCards.json();
           
           if(data.success){
               //Call the function.
               loadValuesCards(data.data);
           }
    
        }
        
    } catch (error) {

        console.error(error);
    }
}

/*TODO 
    - Implement the button and the functionality to update the note.
*/