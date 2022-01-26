import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";

import { reducers } from "./../reducers";

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

//subscribe
store.subscribe(() => console.log(store.getState())); // تمامی تغییرات توی state رو log میکنه
