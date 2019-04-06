import { get, queries } from "../githubApi";

export const REQUEST_PULL_REQUESTS = "REQUEST_PULL_REQUESTS";
export const REQUEST_PULL_REQUESTS_LOADING = "REQUEST_PULL_REQUESTS_LOADING";
export const REQUEST_PULL_REQUESTS_SUCCESS = "REQUEST_PULL_REQUESTS_SUCCESS";
export const REQUEST_PULL_REQUESTS_FAILURE = "REQUEST_PULL_REQUESTS_FAILURE";
export const SET_FILTERS = "SET_FILTERS";

export const requestPullRequestsLoading = () => ({
  type: REQUEST_PULL_REQUESTS_LOADING
});

export const requestPullRequestsSuccess = (newPrs, oldPrs) => ({
  type: REQUEST_PULL_REQUESTS_SUCCESS,
  newPrs,
  oldPrs
});

export const requestPullRequestsFailure = error => ({
  type: REQUEST_PULL_REQUESTS_FAILURE,
  error
});

export const requestPullRequests = (repoIds, token) => async (
  dispatch,
  getState
) => {
  const oldPrs = getState().dashboard.pullRequests;
  try {
    dispatch(requestPullRequestsLoading());
    const query = queries.pullRequestsForRepos(repoIds);
    const newPrs = await get(query, token);
    dispatch(requestPullRequestsSuccess(newPrs, oldPrs));
  } catch (err) {
    dispatch(requestPullRequestsFailure(err));
  }
};

export const setFilters = filters => ({
  type: SET_FILTERS,
  filters
});