import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Grades from './Grades';
import Discussion from './Discussion';
import Assignments from './Assignments';


const App = () => {

  return (
    <div className="layout type-all">
      <Router>
        <nav className="layout-nav">
          <div className="nav-user">
            <a href="#" className="user-btn btn"><img src="https://thispersondoesnotexist.com/image" alt="Random face" /></a>
          </div> 
          <ul className="nav-menu">
            <li><Link to="/" className="btn menu-btn material-icons type-all active">home</Link></li>
            <li><Link to="/" className="btn menu-btn material-icons type-announcement">announcement</Link></li>
            <li><Link to="/assignments" className="btn menu-btn material-icons type-assignment">assignment</Link></li>
            <li><Link to="/discussion" className="btn menu-btn material-icons type-chat">question_answer</Link></li>
            <li><Link to="/grades" className="btn menu-btn material-icons type-grade">check_circle</Link></li>
          </ul>
        </nav>
        <main className="layout-primary">
          <Route path="/" exact component={Home} />
          <Route path="/assignments" component={Assignments} />
          <Route path="/discussion" component={Discussion} />
          <Route path="/grades" component={Grades} />
        </main>
      </Router>
    </div>
  );
}

export default App;
