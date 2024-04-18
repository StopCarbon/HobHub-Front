import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { RecommendList } from 'components/_common/props';

const { persistAtom } = recoilPersist();

export const RecommendAtom = atom<RecommendList>({
    key: 'RecommendAtom',
    default: {
        hobby1: '뜨개',
        category1: '공예',
        similarity1: 86,
        hobby2: '연극',
        category2: '문화예술',
        similarity2: 75,
        hobby3: '케이크',
        category3: '베이킹',
        similarity3: 62,
    },
    effects_UNSTABLE: [persistAtom],
});
