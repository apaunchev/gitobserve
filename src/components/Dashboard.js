import { orderBy } from "lodash";
import React from "react";
import { connect } from "react-redux";
import { requestPullRequests } from "../actions/dashboard";

class Dashboard extends React.PureComponent {
  componentDidMount() {
    if (this.props.selectedRepos.length > 0) {
      this.props.requestPullRequests(this.props.selectedRepos);
    }
  }

  render() {
    let sortedRepos = [];

    if (this.props.repositories.length > 0) {
      sortedRepos = orderBy(
        this.props.repositories,
        [repo => repo.pullRequests.length, repo => repo.name],
        ["desc", "asc"]
      );
    }

    if (this.props.githubError) {
      return <div>Error getting latest pull requests from GitHub.</div>;
    }

    return sortedRepos.map(repo => <div key={repo.id}>{repo.name}</div>);
  }
}

const mapStateToProps = state => ({
  selectedRepos: state.settings.selectedRepos,
  githubError: state.dashboard.githubError,
  repositories: state.dashboard.repositories
});

const mapDispatchToProps = dispatch => ({
  requestPullRequests: repoIds => {
    dispatch(requestPullRequests(repoIds));
  },
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
