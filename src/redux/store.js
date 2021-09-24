import { combineReducers, createStore } from "redux";
import pokemonsListReducer from "./pokemonsListReducer";

const reducers = combineReducers({
  pokemonsListPage: pokemonsListReducer,
});

const store = createStore(reducers);

export default store;
