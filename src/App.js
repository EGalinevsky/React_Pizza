import React, { useEffect } from 'react';
import { Route } from 'react-router';

import './App.scss';
import { Header } from './component';
import { Basket, Home } from './pages';


function App() {

  return (

    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path='/' component={Home} />
          <Route path='/basket' component={Basket} />
        </div>
      </div>
    </div>
  );
}

export default App;
// class App extends React.Component {

//   componentDidMount(){
//     axios.get('http://localhost:3000/db.json').then(resp => {
//       this.props.setPizzas(resp.data.pizzas)
//     });  
//   }

//   render(){
//     return (

//       <div className="App">
//         <div className="wrapper">
//           <Header />
//           <div className="content">
//             <Route exact path='/' render={() => <Home pizzas={this.props.items} />} />
//             <Route path='/basket' component={Basket} />
//           </div>
//         </div>
//       </div>
//     );
//   }

// }


// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzasAction(items))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
