import React from 'react';
import { RequestDemoFormMode } from 'src/@types/shared.d';
import { setObjFromPath } from 'src/utils';

export type AppStateType = {
  videos: {
    allPaused: boolean;
  };
  requestDemoForm: {
    mode: RequestDemoFormMode;
    open: boolean;
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SetAppStateType = (value: AppStateType | any, path?: string) => void;

export type AppStateContextType = {
  appState: AppStateType;
  setAppState: SetAppStateType;
};

const defaultAppState: AppStateType = {
  videos: {
    allPaused: false
  },
  requestDemoForm: {
    mode: RequestDemoFormMode.Demo,
    open: false
  }
};

// The context with a generic (non-functional) setting mechanism placeholder.
const AppStateContext = React.createContext<AppStateContextType>({
  appState: defaultAppState,
  setAppState: () => console.warn('no appState provider yet')
});

// Hook for components to use the state
export const useAppState = () => React.useContext(AppStateContext);

// AppState Provider
export const AppState = (props: Omit<React.ProviderProps<AppStateContextType>, 'value'>) => {
  const [appState, setAppStateBase] = React.useState(defaultAppState);

  // Transform the incoming state, rather than using the off-the-shelf state.
  const setAppState = React.useMemo<SetAppStateType>(
    () => (value, path) => {
      let updatedState: AppStateType;
      if (typeof path === 'string') {
        // Just a path to the value is provided
        updatedState = setObjFromPath(appState, path, value) as AppStateType;
      } else {
        // Clone the provided full-state object, rather than mutate
        updatedState = { ...value };
      }
      setAppStateBase(updatedState);
    },
    [appState, setAppStateBase]
  );

  return <AppStateContext.Provider {...props} value={{ appState, setAppState }} />;
};
