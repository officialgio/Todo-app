import { Component } from "react";
import './style.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list: []
    }
  }
updateInput(key, value){
  //update react state
  this.setState({
    [key]: value
  });
}
  addItem(){
    //create item with unique id
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    //copy of current list of items
    const list = [...this.state.list]

    //add new items to list
    list.push(newItem);

    //update state with new list and resent newItem input
    this.setState({
      list,
      newItem:""
    });

  }
  deleteItem(id){
    //copy current list of items
    const list = [...this.state.list];


    //filter out item being deleted
    const updateList = list.filter(item => item.id != id);


    this.setState({list: updateList});
  }
  render() {
  return (
    <div className="App">
      <div>
      <h1 className="app-title">TODO LIST</h1>
        
      <h2 className="description">Add an item...</h2>
      
      <input
        type="text"
        placeholder="Type item here"
        value={this.state.newItem}
        onChange={e => this.updateInput("newItem", e.target.value)}
      />
      <button className="add"
      onClick={() => this.addItem()} //call a function when button is clicked
      >
        Add
      </button>
      <br/>
      <ul>
        {this.state.list.map(item => {
          return(
            <li key={item.id} className="list">
              {item.value}
              <button className="button"
                onClick={() => this.deleteItem(item.id)}

              >
                X
              </button>
            </li>
          )
        })}
      </ul>
      </div>
    </div>
    );
  }
}

export default App;
