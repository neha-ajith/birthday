import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import News from "./news";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App bg-body font-body w-full text-white h-full overflow-auto md:h-screen">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
