import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useState } from 'react';
//screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
//components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {
  const [sideToogle, setSideToogle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToogle(true)}/>
      <SideDrawer show={sideToogle} click={() => setSideToogle(false)}/>
      <Backdrop show={sideToogle} click={() => setSideToogle(false)}/>
      <main>
        <Switch>
          <Route exact path='/' component={HomeScreen}/>
          <Route path='/product/:id' component={ProductScreen}/>
          <Route path='/cart' component={CartScreen}/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
