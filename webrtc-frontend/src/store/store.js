import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk  from "redux-thunk";

const rootReducer = combineReducers({

})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;