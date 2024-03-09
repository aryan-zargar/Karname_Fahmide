import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom"
import Mainpage from './components/mainpage';
import AddStd from './components/AddStd';
import ChangeStd from './components/changestd';
import Karname from './components/karname';
import GetKarname from './components/getkarname';
import GetKarnameA from './components/getkarnameA';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Mainpage></Mainpage>
          </Route>
          <Route exact path="/addstd">
            <AddStd></AddStd>
          </Route>
          <Route path="/changestd">
            <ChangeStd/>
          </Route>
          <Route path="/changeKarname">
              <Karname/>
          </Route>
          <Route path="/getkarnameB">
              <GetKarname/>
          </Route>
          <Route path="/getkarnameA/:cls">
              <GetKarnameA/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
