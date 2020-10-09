import { combineReducers, createStore } from "redux";
import Reducers from "../reducers/Reducers";

const AppReducers = combineReducers({
  Reducers,
});

const ConfigStore = createStore(AppReducers);
export default ConfigStore;
