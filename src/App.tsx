import { Navigation } from "./Components/Navigation";
import GlobalStyles from "./Styles/globals";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./services/routes";

function App() {
  return (
    <Router>
        <Navigation/>
      <div className="dashboard">
        <Routes/>
      </div>
      <GlobalStyles/>
    </Router>
  );
}

export default App;
