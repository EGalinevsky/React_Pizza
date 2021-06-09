import { Route } from 'react-router';
import './App.scss';
import { Header } from './component';
import { Basket,Home } from './pages';

function App() {


  return (
    <div className="App">


      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path='/' component={Home} />
          <Route  path='/basket' component={Basket} />
        </div>
      </div>

    </div>
  );
}

export default App;
