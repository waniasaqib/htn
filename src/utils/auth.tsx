import { atom } from 'jotai';
import { AuthState } from '../types/other';

export const authAtom = atom<AuthState>({
  isAuthenticated: false,
  username: null
});