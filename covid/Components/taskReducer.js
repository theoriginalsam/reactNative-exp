export const foodReducer = (state = [], action) => {
  switch (action.type) {
    case 'add_task':
      return [...state, action.payload];

    case 'del_task':
      return;

    default:
      return state;
  }
};

// export const addTask = dispatch => {
//   return () => {
//     console.log('FUCK CONTINUE FROM HERE');
//     dispatch({type: 'add_task', payload: task});
//   };
// }; beacause we are using REDUX this method cant work here, this is for the useReducer hook
