import React from 'react'

const charComponent = (props) => {
    let style ={
        backgroundColor: '#cdcdee',
        border: '1px solid black',
        cursor: 'pointer',
        display: 'inline-block',
        margin: '16px',
        padding: '16px',
        textAlign: 'center'
    }
    
    return (
        <span style={style} onClick={props.click}>{props.char}</span>
    );
}


export default charComponent;