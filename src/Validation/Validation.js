import React from 'react';

const Validation = (props) =>{
let validationMessage = 'text is long';
if(props.inputLength <= 5){
    validationMessage = 'text is short';
}

return(
            <div>
            <p>{validationMessage}</p>
               
            </div>
        );

};


    


export default Validation;