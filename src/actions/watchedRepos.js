import { get, queries } from "../githubApi";

export const REQUEST_WATCHED_REPOS = "REQUEST_WATCHED_REPOS";
export const REQUEST_WATCHED_REPOS_LOADING = "REQUEST_WATCHED_REPOS_LOADING";
export const REQUEST_WATCHED_REPOS_SUCCESS = "REQUEST_WATCHED_REPOS_SUCCESS";
export const REQUEST_WATCHED_REPOS_FAILURE = "REQUEST_WATCHED_REPOS_FAILURE";
export const RESET_WATCHED_REPOS = "RESET_WATCHED_REPOS";

export const requestWatchedReposLoading = () => ({
  type: REQUEST_WATCHED_REPOS_LOADING,
});

export const requestWatchedReposSuccess = (data) => ({
  type: REQUEST_WATCHED_REPOS_SUCCESS,
  data,
});

export const requestWatchedReposFailure = (error) => ({
  type: REQUEST_WATCHED_REPOS_FAILURE,
  error,
});

export const requestWatchedRepos = (token) => async (dispatch) => {
  try {
    dispatch(requestWatchedReposLoading());
    let query = queries.watchedRepos();
    const initialResults = await get(query, token);
    let reposArray = initialResults.viewer.watching.edges;
    if (initialResults.viewer.watching.pageInfo.hasNextPage) {
      let paginate = true;
      while (paginate) {
        query = queries.watchedRepos(reposArray[reposArray.length - 1].cursor);
        const paginatedResults = await get(query, token);
        reposArray = [...reposArray, ...paginatedResults.viewer.watching.edges];
        paginate = paginatedResults.viewer.watching.pageInfo.hasNextPage;
      }
    }
    reposArray = reposArray.map((repo) => ({
      id: repo.node.id,
      name: repo.node.name,
      url: repo.node.url,
      owner: repo.node.owner,
      createdAt: repo.node.createdAt,
    }));
    dispatch(requestWatchedReposSuccess(reposArray));
  } catch (err) {
    dispatch(requestWatchedReposFailure(err));
  }
};

export const resetWatchedRepos = () => ({
  type: RESET_WATCHED_REPOS,
});
