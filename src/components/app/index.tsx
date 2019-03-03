import * as React from "react";
import { render } from "react-dom";
import { Provider, connect } from 'react-redux';
import { createEpicMiddleware } from "redux-observable";
import { IntlProvider } from "react-intl";

// import { rootLocale } from "../locales";
import { getRootStore } from "../../store";
import { rootReducer } from "../../reducers";
import { rootEpic } from "../../middlewares";

import { ClickableButton } from "../functional/buttons";
import { Localizable } from "../commons/interface";

const epicMiddleware = createEpicMiddleware();
const store = getRootStore(true, rootReducer, epicMiddleware);
epicMiddleware.run(rootEpic);

const mapStateToProps = (state: any) => {
    console.log('state is: ')
    console.log(state)
    return {
        localize: state.localize
    };
};

const Core: React.FC<any> = (props:Localizable) => {
    return (
        <div>
            <p>This is my new react app</p>
            <ClickableButton name="actions.submit" href="/great" localize={props.localize}/>
        </div>
    );
};

const ConnectedCore = connect(mapStateToProps)(Core);

export const App = () => (
    <Provider store={store}>
        <IntlProvider>
            <ConnectedCore />
        </IntlProvider>
    </Provider>
);

export const renderApp = (rootElement: string = "app") => {
    render(<App />, document.getElementById(rootElement));
}
