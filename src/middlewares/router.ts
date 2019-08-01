export function routerMiddleware(history: any) {
    return (store: any) => (next: any) => (action: any) => {
        if (action.type === '@@router/LOCATION_CHANGE')
            console.log('PATH:', action.payload.location.pathname);

        return next(action);
    };
}
