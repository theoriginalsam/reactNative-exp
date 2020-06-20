export const createtask = (state, action) => {
  console.log('Hi');
  return [...state, action.payload];
};
