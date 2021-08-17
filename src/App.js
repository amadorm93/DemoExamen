import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import {Navigation} from './Navigation';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
     <h3 className="m-3 d-flex justify-content-center">
       React JS Tutorial
     </h3>

     <Navigation/>

     <Switch>
       <Route path='/' component={Home} exact/>
       <Route path='/Department' component={Department}/>
       <Route path='/employee' component={Employee}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;