import * as React from 'react';

export function getStrictContext<T>(name = 'Context') {
    const Context = React.createContext<T | null>(null);
    Context.displayName = name;

    function useContext() {
        const context = React.useContext(Context);
        if (context === null) {
            throw new Error(`${name} must be used within a Provider`);
        }
        return context;
    }

    return [Context.Provider, useContext] as const;
}
