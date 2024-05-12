import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { UserDetail } from 'components/_common/props';

const { persistAtom } = recoilPersist();

export const UserDetailAtom = atom<UserDetail>({
    key: 'UserDetailAtom',
    default: {
        age: 0,
        gender: '',
        location: '',
        income: '',
        motive: '',
        weekday: 0,
        weekend: 0,
    },
    effects_UNSTABLE: [persistAtom],
});
