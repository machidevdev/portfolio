import { atom } from 'jotai';

export const virtualPathAtom = atom<string>('/src');
export const selectedItemAtom = atom<string | null>(null); 