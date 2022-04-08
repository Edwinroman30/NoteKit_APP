export const paragraphShorter  = (paragraph = '') => {
            
    if(!paragraph)
        return '*';
    
    const SHORT_TO = 100;

    if(paragraph.length > SHORT_TO){
        let shortedString = `${paragraph.slice(0, SHORT_TO)}...`;
       return shortedString;
    }

    return paragraph;

}
