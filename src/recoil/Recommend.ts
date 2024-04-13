import { atom } from 'recoil';

import { RecommendList } from 'components/_common/props';

export const CategoryAtom = atom<RecommendList>({
    key: 'CategoryAtom',
    default: {
        hobby1: '',
        hobby2: '',
        hobby3: '',
    },
});
