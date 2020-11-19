import './css/App.css';
import HomeComponent from './component/Home'
import LoginComponent from './component/Login'
import NotFoundComponent from './component/NotFound'
import PostComponent from './component/Post';
import RegisterComponent from './component/Register'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <div >
        <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/posts">
            <PostComponent />
          </Route>
          <Route path="/register">
            <RegisterComponent />
          </Route>
          <Route exact path="/">
            <HomeComponent />
          </Route>
          <Route path="/login">
            <LoginComponent />
          </Route>
          <Route>
            <NotFoundComponent />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
