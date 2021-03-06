//router
import { Switch, Route } from "react-router-dom";

//pages
import Home from "./components/Home";
import Movies from "./components/Movie";
import NotFound from "./components/NotFound";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/movie/:movieId" component={Movies} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Router;
