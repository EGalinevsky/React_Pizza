import { useEffect, useState } from 'react';
import { Route } from 'react-router';
import './App.scss';
import { Header } from './component';
import { Basket, Home } from './pages';
import axios from 'axios'

function App() {

  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(resp => {
      setPizzas(resp.data.pizzas)
    });
  }, [])

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path='/' render={() => <Home pizzas={pizzas} />} />
          <Route path='/basket' component={Basket} />
        </div>
      </div>
    </div>
  );
}

export default App;
