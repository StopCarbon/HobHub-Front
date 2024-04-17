import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { User } from 'components/_common/props';

const { persistAtom } = recoilPersist();

export const UserInfoAtom = atom<User>({
    key: 'UserInfoAtom',
    default: {
        id: 1,
        name: '',
        age: 0,
        gender: '',
        home: '',
        income: '',
        motive: '',
        work: 0,
        wkend: 0,
    },
    effects_UNSTABLE: [persistAtom],
});
