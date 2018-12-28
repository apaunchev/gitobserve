import React from "react";
import { Link, NavLink, Redirect, Route } from "react-router-dom";
import Octicon, {
  CloudUpload as CloudUploadIcon,
  Person as PersonIcon,
  Repo as RepoIcon
} from "@githubprimer/octicons-react";
import Account from "./Account";
import Repositories from "./Repositories";

const Settings = ({ match }) => (
  <>
    <div className="App-menu p-3 bg-gray-light border-bottom">
      <div className="container-lg d-flex flex-items-center">
        <div className="flex-auto">
          <h1 className="h3">Settings</h1>
        </div>
        <div>
          <Link to="/" className="btn btn-primary">
            <Octicon icon={CloudUploadIcon} /> Save
          </Link>
        </div>
      </div>
    </div>
    <main className="App-main">
      <div className="container-lg py-4 d-flex">
        <div className="col-3 pr-4">
          <nav className="menu">
            <NavLink
              to={`${match.url}/account`}
              className="menu-item"
              activeClassName="selected"
            >
              <Octicon icon={PersonIcon} /> Account
            </NavLink>
            <NavLink
              to={`${match.url}/repositories`}
              className="menu-item"
              activeClassName="selected"
            >
              <Octicon icon={RepoIcon} /> Repositories
            </NavLink>
          </nav>
        </div>
        <div className="col-9">
          <Route
            exact
            path={`${match.url}`}
            render={() => <Redirect to={`${match.url}/account`} />}
          />
          <Route path={`${match.url}/account`} component={Account} />
          <Route path={`${match.url}/repositories`} component={Repositories} />
        </div>
      </div>
    </main>
  </>
);

export default Settings;
