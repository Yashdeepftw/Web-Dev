// store/atoms/countState.jsx
import { atom, selector } from 'recoil';

export const countState = atom({
  key: 'countState',
  default: 0,
});

export const evenSelector = selector({
    key: 'evenSelector',
    get: ({get}) => {
        const count = get(countState);
        return count % 2; 
    }
})