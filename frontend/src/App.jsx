import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Booking from "./pages/Booking/Booking";
import VanDetails from "./pages/VanDetails/VanDetails";
import PlacesToGo from "./pages/PlacesToGo/PlacesToGo";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/home" component={Home} />
        <Route path="/booking" component={Booking} exact />
        <Route path="/van-details" component={VanDetails} />
        <Route path="/about" component={About} />
        <Route path="/places-to-go" component={PlacesToGo} />
        <Route path="/contact" component={Contact} />
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
