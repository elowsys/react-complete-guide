import React from 'react';
import './Person.css';

//presentational or functional components
const person = (props) => {
    //Use the children attribute to render the contents between the tag outside attributes    
    return (
        <div className="Person">
            <p onClick={props.click} style={props.style}><span>Hi, I am {props.name}<br/>I {props.mood}</span></p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default person;



/*Using RADIUM*/

// import React from 'react';
// import './Person.css';
// import Radium from 'radium';

// //presentational or functional components
// const person = (props) => {

//     const style = {
//         '@media (min-width: 500px)': {
//             width: '450px',
//         },
//         '@media (max-width: 400px)': {
//             backgroundColor: 'salmon'
//         }
//     };
//     //Use the children attribute to render the contents between the tag outside attributes    
//     return (
//         <div className="Person" style={style}>
//             <p onClick={props.click} style={props.style}><span>Hi, I am {props.name}<br/>I {props.mood}</span></p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name} />
//         </div>
//     );
// };

// export default Radium(person);