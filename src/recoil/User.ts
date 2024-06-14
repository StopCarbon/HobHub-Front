import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { User } from 'components/_common/props';

const { persistAtom } = recoilPersist();

export const UserAtom = atom<User>({
    key: 'UserAtom',
    default: {
        id: 1,
    },
    effects_UNSTABLE: [persistAtom],
});
