
import CardList from './components/card_list/card_list.component';
import React, { Component }  from 'react';
import './App.css';
import SearchBox from './components/search_box/search_box.component';


class App extends  Component {
  constructor(){
     super();
     this.state = {
       monsters: [],
       searchField: ''
     }
   }


   componentDidMount(){
     fetch('http://localhost:5300/monsters')
      .then(response => response.json())
      .then(data => this.setState({monsters: data}))
      .catch(err => console.log(err))
     }

/*you canot use normal function like myHandleChange(e){.......}
  nor you can use const myHandleChange = (e)=>{..........}
*/
  myHandleChange = (e) => {
      this.setState({searchField: e.target.value});
  }


  render(){
    const { monsters, searchField }  = this.state;
    const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
    <div className="App">
     <h1>Monsters Rolodex</h1>
     <SearchBox placeholder="Enter name of monster to search for"  handleChange={ this.myHandleChange } />
     <CardList monsters={filteredMonsters} />
    </div>
  );
 }
}

export default App;
