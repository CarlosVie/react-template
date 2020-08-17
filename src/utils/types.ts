import { Reducer, Store } from 'redux';
import { RouterState } from 'connected-react-router';

/**
 * Store of all App, auto-inject reducers and saga.
 */
export interface InjectedStore extends Store {
    injectedReducers: any;
    injectedSagas: any;

    runSaga(
        saga: (() => IterableIterator<any>) | undefined,
        args: any | undefined,
    ): any;
}

export interface InjectReducerParams {
    key: keyof ApplicationRootState;
    reducer: Reducer<any, any>;
}

export interface InjectSagaParams {
    key: keyof ApplicationRootState;
    saga: () => IterableIterator<any>;
    mode?: string | undefined;
}

/**
 * Main state interface. -> Add all reducers states here
 */
export interface ApplicationRootState {
    readonly router: RouterState;
    // readonly homePage: HomePageState,
    //readonly todo: TodoStateProps;
    // for testing purposes
    readonly test: any;
}
