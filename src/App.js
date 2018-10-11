/*USING SCOPE CSS*/
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {

  //USE ONLY IN CLASSES WITH COMPONENT
  state = {
    people: [
      {name: 'Bigdadi', mood: '\'m diving deep into React!', id:'1'},
      {name: 'Bobie', mood: '\'m learning react at home', id:'2'},
      {name: 'Babie', mood: '\'m currently sleeping', id:'3'},
      {name: 'Ayomsie', mood: 'think I\'m smart!', id:'4'},
      {name: 'Mr Laluvia', mood: 'need to tighten my belt', id:'5'},
      {name: 'Ayemo', mood: 'hanging on the Lord', id:'6'}
    ],
    showPersons: false,
    inputText: ''
  };

  deletePersonHandler = (personIndex) => {
    //let newPeople = this.state.people.slice();
    let newPeople = [...this.state.people];

    //remove element at index position
    newPeople.splice(personIndex, 1);
    this.setState({people: newPeople});
  };

  nameChangedHandler = (event, id) => {
    //use the id to find the person in the array
    let index = this.state.people.findIndex(x => {
      return x.id === id;
    });
    
    //get the person object at the index position
    let newPerson = {
      ...this.state.people[index]
    };
    newPerson.name = event.target.value;

    //get the people array
    //let newPeople = this.state.people.slice();
    let newPeople = [...this.state.people];

    //get and set the changed value for selected person
    newPeople[index] = newPerson;

    this.setState({people: newPeople});
  };

  togglePersonHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  };

  inputFieldCharCountHandler = (event) => {
    var inputValue = event.target.value;
    this.setState({inputText: inputValue});
  };

  deleteCharItemHandler = (charIndex) => {
    let newChars = [...this.state.inputText.split('')];
    newChars.splice(charIndex, 1);
    this.setState({inputText: newChars.join('')});
  };

  render() {
    //scope level style
    const stylePointer = {
      cursor: 'pointer',
      ':hover':{
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }
    
    const style = {
      ...stylePointer,
      backgroundColor: 'green',
      color: '#fff',
      font: 'inherit',
      border: '1px solid lightblue',
      padding: '8px'
    };

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.people.map((person, index) => {
            return <Person 
              key={person.id}
              id={person.id}
              name={person.name} 
              mood={person.mood}  
              click={() => this.deletePersonHandler(index)} 
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: '#000'
      };
    }

    let charList = (
      <span>
        {this.state.inputText.split('').map((charitem, index) => {
          return <CharComponent
            key={index}
            char ={charitem}
            click={()=>this.deleteCharItemHandler(index)}
          />
        })}
      </span>
    );

    let classes = [];
    if(this.state.people.length <= 3){
      classes.push('red');
    }
    if(this.state.people.length <=1){
      classes.push('bold');
    }
    return (
        //this is jsx NOT HTML
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>Nested item</p>
          <button style={style} onClick={this.togglePersonHandler}>Toggle Person</button>
          {persons}
          <div>
            <input type="text" onChange={this.inputFieldCharCountHandler} value={this.state.inputText} />
            <p>{this.state.inputText}</p>
            <Validation inputLength={this.state.inputText.split('').length} />
            {charList}
          </div>
        </div>
    );

    // // is same as above
    // return React.createElement('div', { className: 'App'}, React.createElement('H1', null,'Hi, I\'m a React App!!!'));
  }
}

//inject radium
export default App;


/*USING RADIUM*/
// import React, { Component } from 'react';
// //import logo from './logo.svg';
// import './App.css';
// import Radium, {StyleRoot} from 'radium';
// import Person from './Person/Person';
// import Validation from './Validation/Validation'
// import CharComponent from './CharComponent/CharComponent'

// class App extends Component {

//   //USE ONLY IN CLASSES WITH COMPONENT
//   state = {
//     people: [
//       {name: 'Bigdadi', mood: '\'m diving deep into React!', id:'1'},
//       {name: 'Bobie', mood: '\'m learning react at home', id:'2'},
//       {name: 'Babie', mood: '\'m currently sleeping', id:'3'},
//       {name: 'Ayomsie', mood: 'think I\'m smart!', id:'4'},
//       {name: 'Mr Laluvia', mood: 'need to tighten my belt', id:'5'},
//       {name: 'Ayemo', mood: 'hanging on the Lord', id:'6'}
//     ],
//     showPersons: false,
//     inputText: ''
//   };

//   deletePersonHandler = (personIndex) => {
//     //let newPeople = this.state.people.slice();
//     let newPeople = [...this.state.people];

//     //remove element at index position
//     newPeople.splice(personIndex, 1);
//     this.setState({people: newPeople});
//   };

//   nameChangedHandler = (event, id) => {
//     //use the id to find the person in the array
//     let index = this.state.people.findIndex(x => {
//       return x.id === id;
//     });
    
//     //get the person object at the index position
//     let newPerson = {
//       ...this.state.people[index]
//     };
//     newPerson.name = event.target.value;

//     //get the people array
//     //let newPeople = this.state.people.slice();
//     let newPeople = [...this.state.people];

//     //get and set the changed value for selected person
//     newPeople[index] = newPerson;

//     this.setState({people: newPeople});
//   };

//   togglePersonHandler = () => {
//     this.setState({showPersons: !this.state.showPersons});
//   };

//   inputFieldCharCountHandler = (event) => {
//     var inputValue = event.target.value;
//     this.setState({inputText: inputValue});
//   }

//   deleteCharItemHandler = (charIndex) => {
//     let newChars = [...this.state.inputText.split('')];
//     newChars.splice(charIndex, 1);
//     this.setState({inputText: newChars.join('')});
//   };

//   render() {
//     //scope level style
//     const stylePointer = {
//       cursor: 'pointer',
//       ':hover':{
//         backgroundColor: 'lightgreen',
//         color: 'black'
//       }
//     }
    
//     const style = {
//       ...stylePointer,
//       backgroundColor: 'green',
//       color: '#fff',
//       font: 'inherit',
//       border: '1px solid lightblue',
//       padding: '8px'
//     };

//     let persons = null;
//     if(this.state.showPersons){
//       persons = (
//         <div>
//           {this.state.people.map((person, index) => {
//             return <Person 
//               key={person.id}
//               id={person.id}
//               name={person.name} 
//               mood={person.mood}  
//               click={() => this.deletePersonHandler(index)} 
//               changed={(event) => this.nameChangedHandler(event, person.id)} />
//           })}
//         </div>
//       );
//       style.backgroundColor = 'red';
//       style[':hover'] = {
//         backgroundColor: 'salmon',
//         color: '#000'
//       };
//     }

//     let charList = (
//       <span>
//         {this.state.inputText.split('').map((charitem, index) => {
//           return <CharComponent
//             key={index}
//             char ={charitem}
//             click={()=>this.deleteCharItemHandler(index)}
//           />
//         })}
//       </span>
//     );

//     let classes = [];
//     if(this.state.people.length <= 3){
//       classes.push('red');
//     }
//     if(this.state.people.length <=1){
//       classes.push('bold');
//     }
//     return (
//         //this is jsx NOT HTML
//       <StyleRoot>
//         <div className="App">
//           <h1>Hi, I'm a React App</h1>
//           <p className={classes.join(' ')}>Nested item</p>
//           <button style={style} onClick={this.togglePersonHandler}>Toggle Person</button>
//           {persons}
//           <div>
//             <input type="text" onChange={this.inputFieldCharCountHandler} value={this.state.inputText} />
//             <p>{this.state.inputText}</p>
//             <Validation inputLength={this.state.inputText.split('').length} />
//             {charList}
//           </div>
//         </div>
//       </StyleRoot>
//     );

//     // // is same as above
//     // return React.createElement('div', { className: 'App'}, React.createElement('H1', null,'Hi, I\'m a React App!!!'));
//   }
// }

// //inject radium
// export default Radium(App);
