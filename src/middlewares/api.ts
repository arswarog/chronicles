import { ERROR, START, SUCCESS } from '../common/constants';
import { IRPCCall } from '../common/api';

export function apiMiddleware(baseUrl: string) {
    return (store: any) => (next: any) => async (action: IRPCCall) => {
        if (!action.method)
            return next(action);

        const {method, type, ...rest} = action;

        try {
            next({...rest, type: type + START});

            await sleep(500);

            const rawRes = await fetch(baseUrl + action.method);
            const result = await rawRes.json();

            next({...rest, type: type + SUCCESS, result});
        } catch (error) {
            next({...rest, type: type + ERROR, error});
        }
    };
}

export function sleep(timeout = 0) {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
