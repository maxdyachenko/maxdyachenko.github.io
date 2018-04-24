export const loadState = (defaultState) => {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return defaultState;
    return JSON.parse(serializedState);
};

export const saveState = (state) => {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
};
