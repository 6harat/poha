import { applyMiddleware, compose, createStore, Middleware, Reducer } from "redux";

const preloadedState = {
};

export const getRootStore = (enableDebugMode = false, rootReducer: Reducer, ...middlewares: Middleware[]) => {
    const composeEnhancer = 
            enableDebugMode && 
            typeof(window) !== "undefined"  && 
            (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
    
    return createStore(
        rootReducer, 
        preloadedState, 
        composeEnhancer(
            applyMiddleware(...middlewares)
        )
    );
}