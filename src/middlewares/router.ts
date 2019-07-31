export function routerMiddleware(history: any) {
    return (store: any) => (next: any) => (action: any) => {
        return next(action);
    };
}