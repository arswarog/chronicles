import { AnyAction } from 'redux';

export interface IRPCCall extends AnyAction {
    method: string;
    params?: any;
}
