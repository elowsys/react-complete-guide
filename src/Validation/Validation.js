import React from 'react'

const validation = (props) => {
    let validationMessage = "";
    let style = {
        fontStyle: 'italics',
        color: 'green'
    };
    if(props.inputLength > 0 && props.inputLength < 10){
        validationMessage = props.inputLength + " characters - Text too short";
        style.color = 'blue';
    }
    else if(props.inputLength > 20){
        validationMessage = props.inputLength + " characters - Text too long";
        style.color = 'red';
    }
    else{
        validationMessage = props.inputLength + " character(s)";
    }
    return (
        <p style={style}>{validationMessage}</p>
    );
}

export default validation;