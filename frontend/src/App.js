import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SingleBookPage from './pages/SingleBookPage';
import NewBookPage from './pages/NewBookPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/books/:id" component={SingleBookPage} />
        <Route exact path="/new-book" component={NewBookPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;