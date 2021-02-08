import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "./../reducers/index";
import EXAMPLE_REDUCER from "../reducers/example";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [EXAMPLE_REDUCER]                    //// Whitelist those reducers who are requied ot be persisted
};

const persistedReducer = persistReducer(persistConfig, reducers);

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE___ || compose; // for enabling Redux Dev Tools in browser

const middlewares = [thunk];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));
export let store = createStore(persistedReducer, enhancer);

let persistor = persistStore(store);

export default { store, persistor };
