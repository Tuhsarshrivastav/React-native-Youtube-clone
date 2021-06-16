const initState = [];
export const reducer = (state = initState, action) => {
  if (action.type == "add") {
    return action.payload;
  }
  return state;
};
