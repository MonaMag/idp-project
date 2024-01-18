import { StateSchema } from '../../../../app/store/StateSchema';

export const getUserAuthData = (state: StateSchema) => state.user.authData;
export const getUserInitiated = (state: StateSchema) => state.user.initiated;
