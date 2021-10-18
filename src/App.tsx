import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "reactstrap";
import { Provider } from "react-redux";
import "./assets/global/css/Global.module.css";
import configureStore from "./store/applicationStore";
import ErrorBoundary from "./utils/components/ErrorBoundary";
import Main from "./components/Main/Main";

const store = configureStore();


const App: React.FC = () => (
  <>
    <Provider store={store}>
      <ErrorBoundary>
        <Container
          data-testid="main"
          fluid={true}
          className="outerContainer"
        >
          <Container fluid={false} className="innerContainer">
            <Router>
              <Route
                exact={true}
                path="/"
                component={Main}
              />

              <Route
                exact={true}
                path="/main"
                component={Main}
              />
            </Router>
          </Container>
        </Container>
      </ErrorBoundary>
    </Provider>
  </>
);
export default App;
