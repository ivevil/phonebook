import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import SearchBox from './components/SearchBox/SearchBox.js';
import Body from './components/Body/Body.js';
import Footer from './components/Footer/Footer.js';
import Dividers from './components/Dividers/Dividers.js';

import NewItem from './model/NewItem';
import AddNew from './model/AddNew';

class App extends React.Component {

  constructor(props) {
  super(props);

  this.phonebook = new AddNew();

  this.state = {
    items: this.phonebook.items,
    searchfield: '',
    currentDivider: '',
    alphabet: ["ALL", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  };

  this.createItem = this.createItem.bind(this);
  this.deleteItem = this.deleteItem.bind(this);
  this.showItem = this.showItem.bind(this);

  }

  componentDidMount() {
    this.showItem(this.state);
  }

  createItem(firstname, lastname, number) {
    let item;
    let items;
    if(firstname !== '' && lastname !== '' && number !== '') {
      item = new NewItem(firstname, lastname, number, new Date());
      items = this.phonebook.add(item);
      this.setState({ items });
      document.getElementsByTagName("p")[0].innerHTML = "";
    } else {
      document.getElementsByTagName("p")[0].innerHTML = "ERROR: All fields must be filled up!";
    }
  }

  deleteItem(item) {
    let items = this.phonebook.delete(item);
    this.setState({ items });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  showItem = (props, e) => {
    this.setState({ currentDivider: props.divider });
    if(e !== undefined) {
      var element = document.querySelector('.divider.active');
      if(element !== null) {
        element.classList.remove('active');
      }
      e.target.classList.add('active');
    }
  }

  render () {

    const { items, searchfield, currentDivider } = this.state;
    let filteredItems = items;
    if(currentDivider !== undefined) {
      filteredItems = items.filter(item => {
        if(item.lastname[0].toUpperCase() === currentDivider && currentDivider !== "ALL") {
          return item.lastname.toLowerCase();
        } else {
          return '';
        }
      })
      if(currentDivider === "ALL") {
        filteredItems = items.filter(item => {
            return item.lastname.toLowerCase();
          })
      }
    }
    if(searchfield !== '') {
      filteredItems = items.filter(item => {
        return item.lastname.toLowerCase().includes(searchfield.toLowerCase());
      })
    }

    return (<div id="app-container">
      <Header></Header>
      <SearchBox searchChange={this.onSearchChange} />
      <Body items={filteredItems} onDeleteItem={this.deleteItem}></Body>
      <Footer createItem={this.createItem}></Footer>
      <Dividers dividers={this.state.alphabet} onDividerClick={this.showItem}></Dividers>
    </div>);
  }
}

export default App;
