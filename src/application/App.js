import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout, NotFound } from "../ui";
import PrintCurriculum from "./print";
import PrintDebug from "./debug";
import EditProfile from "./profile-edit";
import UsernameChecker from "./username/UsernameChecker";
import { isDebuggingOn } from "../config";

import "semantic-ui-css/semantic.min.css";

const App = () => (
  <Layout>
    <UsernameChecker>
      <Switch>
        <Route exact path="/" component={PrintCurriculum} />
        <Route exact path="/profile/edit/:panel?" component={EditProfile} />
        {isDebuggingOn && (
          <Route exact path="/debug/:template?" component={PrintDebug} />
        )}
        <Route component={NotFound} />
      </Switch>
    </UsernameChecker>
  </Layout>
);

export default App;
