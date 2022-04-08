const $cardContainer = document.getElementById('cardContainer');

import { likeFunction } from "./modules/cards-buttons/like.js";
import {paragraphShorter} from "./modules/helper/paragraphShorter.js";  


async function loadCards(){
    
    try{


        const petition = await window.fetch('http://localhost:8120/v1/api/note', {
            method: 'GET',
            headers: {
                "Content-type" : "application/json"
            }
        });
    
       const jsonCards = await petition.json();

        //const $cardSqueleton = document.createElement('DIV');
        //$cardSqueleton.classList.add( ['col-12', 'col-sm-6', 'mt-4'] );


        jsonCards.data.forEach((card) => {

                $cardContainer.insertAdjacentHTML('afterbegin', 
                    `
                    
                    <div class="col-12  col-sm-6  mt-4" uid='${card._id}'>
                        <div class="row">
                            
                            <!-- Img -->
                            <div class="col-12 col-md-12 col-lg-4">
                                <img src="https://placeimg.com/200/200/any" width="100%" class="img-fluid rounded-start" alt="...">
                            </div>
                            
                            <!-- Body Cards -->
                            <div class="col-12 col-md-12 col-lg-8">
                                <div class="card-body">
                                    <h5 class="card-title">${card.title}</h5>
                                    <p class="card-text">${ paragraphShorter( card.description ) }</p>
                                    <p class="card-text"><small class="text-muted">${card.registrationDate.toString()}</small></p>
                                </div>
                            </div>
                            
                            <!-- Icons -->
                            <div class="col-sm-12 mt-1">
                                
                                <a href="#" class="btn bg-info text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                </a>
            
                                <a href="#" class="btn bg-info text-white" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>
                                </a>
            
                                <a href="#" class="btn bg-info text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>
                                    </svg>
                                </a>
            
                                <a href="#" class="btn bg-info text-white" id="heart-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>


                `);

        });
   
    }
    catch(error){

       console.error(new Error(error))
       return new Error(error);
       
    }
}

loadCards();


//Eventos de los botones:

window.document.addEventListener('click', (e)=>{

   likeFunction(e);

});
