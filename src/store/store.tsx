import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../reducer/rootReducer";

const logger = createLogger({
    predicate: () => process.env.NODE_ENV === "development",
});

const enhancer = compose(applyMiddleware(thunk, logger));
/**
* create new store
*/
const store: any = createStore(rootReducer, enhancer);



export default store;