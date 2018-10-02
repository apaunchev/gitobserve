import { map } from "lodash";
import React, { Component } from "react";

import RepositoryItem from "../RepositoryItem";
import FetchMore from "../../FetchMore";
import Loading from "../../Loading";

import { makeAPICall } from "../../api";
import { STATUS, LOCAL_STORAGE_KEY } from "../../consts";
import { getWatchedRepositories } from "../queries";

import "./style.css";

class RepositoryList extends Component {
  state = {
    status: STATUS.INITIAL,
    error: null,
    data: null
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = cursor => {
    this.setState({ status: STATUS.LOADING });

    const storedToken = localStorage.getItem(LOCAL_STORAGE_KEY.GITHUB_TOKEN);

    if (!storedToken) {
      return this.setState({
        error: "GitHub token missing.",
        status: STATUS.READY
      });
    }

    makeAPICall(getWatchedRepositories(cursor), storedToken).then(response => {
      const { data } = response.data;

      this.setState(prevState => {
        let newStateData = {};

        if (!prevState.data) {
          newStateData = data;
        } else {
          newStateData = {
            viewer: {
              ...prevState.data.viewer,
              watching: {
                ...prevState.data.viewer.watching,
                edges: [...prevState.data.viewer.watching.edges, ...data.viewer.watching.edges],
                pageInfo: {
                  ...prevState.data.viewer.watching.pageInfo,
                  ...data.viewer.watching.pageInfo
                }
              }
            }
          };
        }

        return {
          data: newStateData,
          status: STATUS.READY
        };
      });
    });
  };

  render() {
    const { status, data, error } = this.state;

    if (status !== STATUS.READY && !data) {
      return <Loading isCenter={true} />;
    }

    if (error) {
      return (
        <div className="flash flash-error">
          <button onClick={this.fetchData} className="btn btn-sm primary flash-action">
            Retry
          </button>
          {error}
        </div>
      );
    }

    const {
      watching,
      watching: {
        pageInfo: { hasNextPage, endCursor }
      }
    } = data.viewer;
    const repositories = map(watching.edges, "node");

    return (
      <>
        <ol className="RepositoryList">
          {repositories.map(repository => (
            <div key={repository.id} className="RepositoryItem">
              <RepositoryItem {...repository} />
            </div>
          ))}
        </ol>

        {status === STATUS.LOADING && <Loading />}

        <FetchMore
          loading={status === STATUS.LOADING}
          hasNextPage={hasNextPage}
          cursor={endCursor}
          fetchMore={this.fetchData}
        >
          Repositories
        </FetchMore>
      </>
    );
  }
}

export default RepositoryList;
