
export const  likeFunction = (e) => {

    if(e.target.getAttribute('id') == 'heart-button'){
    
        alert(`A usted le gusto ${e.target.parentElement.parentElement.children[1].children[0].children[0].textContent}`);
        
    }           

}
