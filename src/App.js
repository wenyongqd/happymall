import Home from "./page/home/index.js";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Layout from "./component/layout";
import Login from "./page/login";
import UserList from "./page/user";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
      
        <Route
          path="/"
          render={(props) => (
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/product" component={Home} />
                <Route path="/product.category" component={Home} />
                <Route path="/user/index" component={UserList} />  
                <Redirect exact from="/user" to="/user/index"/>              
              </Switch>
            </Layout>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
