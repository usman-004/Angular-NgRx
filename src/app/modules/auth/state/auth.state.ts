import { User } from '../models/authUser.model';

export interface AuthState {
  users: User | null;
}

export const initialState: AuthState = {
  users: null,
};
