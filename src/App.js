import React from "react"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Homes/Home";
import CheckOutPage from './CheckOutPage/CheckOutPage';



function App() {

  return (
    <Router>
    <>
      <Switch>
     
        <Route exact path="/checkout">
          <Header/> 
           <CheckOutPage/>

        </Route>
        <Route exact path='/about'>
          <Header/>
          <h1>hello petre</h1>
        </Route>
        <Route >
          <Header/>
          <Home/>     
        </Route>
      </Switch>
    </>
    </Router>
  )
}
export default App;

