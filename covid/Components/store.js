import {createStore, combineReducers} from 'redux';
import taskReducer from '../Components/taskReducer';

const rootReducer = combineReducers({
  task: taskReducer,
});

const configureS = () => {
  createStore(rootReducer);
};

export default configureS;
