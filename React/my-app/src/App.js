import './App.css';
import { Component } from 'react';
import ItemListPage from './Pages/ItemListPage'
import AddItemListPage from './Pages/AddItemPage'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

export class App extends Component{
 
  render(){
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
              <ItemListPage/>
          </Route>
          <Route exact path='/add-product'>
            <AddItemListPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
}

export default App;
