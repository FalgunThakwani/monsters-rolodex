import React ,{Component} from 'react';
import {Cardlist} from './components/card-list/card-list.component'
import {SearchBox} from './components/searchBox/searchbox.jsx'
import './App.css';
//import data from './data.json'





class App extends Component{
  constructor(){
    super();
    this.state= {
      searchField:'',
      monsters: [
   
    
    
    ]
    };
  }

  componentDidMount() {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(response => response.json())
       .then(user => this.setState({monsters:user}))
      //this.setState({monsters : data});

  }

  handleChange = e => {
    this.setState({searchField:e.target.value})
  }
    
  
  render(){
    
        const {monsters,searchField}=this.state;
        const filteredmonsters=monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase()) || monster.email.toLowerCase().includes(searchField.toLowerCase()) );
 
    return (
      <div className="App">
        <h1>Monsters-Rolodex</h1>

        <SearchBox placeholder="search monster" handleChange={this.handleChange}/>
       
        <Cardlist monsters={filteredmonsters}/>
    </div>
  );
    
  }
}

export default App;
