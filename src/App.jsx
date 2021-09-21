import "./app.css";
import Home from "./pages/Home/Home";
import SinglePage from "./pages/singlePage/SinglePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movie/:title">
          <SinglePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
