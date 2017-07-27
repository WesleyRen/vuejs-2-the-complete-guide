// not really a double counter, but to have the same name getter as in counter.js module
// so we know namespace is working.
export const doubleCounter = state => {
    return state.fakeCounter;
};
