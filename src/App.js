import { useEffect, useState } from 'react';
import { Route } from 'react-router';
import './App.scss';
import { Header } from './component';
import { Basket, Home } from './pages';

function App() {

  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetch('http://localhost:3002/db.json')
    .then(res => res.json()
    .then(json => setPizzas(json.pizzas))
    )


  }, [])
  console.log(pizzas)

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path='/' render={()=> <Home pizzas={pizzas}/>} />
          <Route path='/basket' component={Basket} />
        </div>
      </div>
    </div>
  );
}

export default App;
