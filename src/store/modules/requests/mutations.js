export default {
  addRequest(state, paylaod) {
    state.requests.push(paylaod);
  },
  setRequests(state, payload) {
    state.requests = payload;
  },
};
