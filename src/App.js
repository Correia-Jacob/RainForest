import React, { useEffect } from 'react';
import './css/App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Checkout from './Checkout';
import All from './All';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import Payment from './Payment';
import { useStateValue } from './StateProvider';
import Orders from './Orders';
import EchoDot from './Products/EchoDot';
import AppleWatch from './Products/AppleWatch';
import Ipad from './Products/Ipad';
import Hoodie from './Products/Hoodie';
import Jacket from './Products/Jacket';
import Shirt from './Products/Shirt';
import Pi from './Products/Pi';
import Airpods from './Products/Airpods';
import Arduino from './Products/Arduino';


function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {

      if (authUser) {

        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className='app'>
        <Header />
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/all'>
            <All />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/payment'>
            <Payment />
          </Route>
          <Route path='/orders'>
            <Orders />
          </Route>
          <Route path='/echodot'>
            <EchoDot />
          </Route>
          <Route path='/applewatch'>
            <AppleWatch />
          </Route>
          <Route path='/ipad'>
            <Ipad />
          </Route>
          <Route path='/hoodie'>
            <Hoodie />
          </Route>
          <Route path='/shirt'>
            <Shirt />
          </Route>
          <Route path='/jacket'>
            <Jacket />
          </Route>
          <Route path='/airpods'>
            <Airpods />
          </Route>
          <Route path='/pi'>
            <Pi />
          </Route>
          <Route path='/arduino'>
            <Arduino />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
