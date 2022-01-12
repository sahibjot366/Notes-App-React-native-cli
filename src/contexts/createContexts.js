import React, {useReducer} from 'react';

export default (reducer, actions, initialState) => {
  const Context = React.createContext();
  const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    let actionFxns = {};
    for (let i in actions) {
      actionFxns[i] = actions[i](dispatch);
    }
    return (
      <Context.Provider value={{state, ...actionFxns}}>
        {children}
      </Context.Provider>
    );
  };
  return {Context, Provider};
};
