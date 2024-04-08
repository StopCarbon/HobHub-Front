// 카테고리별 취미 아이콘
// 공예
import craft from '../../assets/hobby_icons/craft.svg';

import leather from '../../assets/hobby_icons/leather.svg';
import soap from '../../assets/hobby_icons/soap.svg';
import woodart from '../../assets/hobby_icons/woodart.svg';
import candle from '../../assets/hobby_icons/candle.svg';
import glass from '../../assets/hobby_icons/glass.svg';
import wool from '../../assets/hobby_icons/wool.svg';
import pottery from '../../assets/hobby_icons/pottery.svg';
import flower from '../../assets/hobby_icons/flower.svg';
import tufting from '../../assets/hobby_icons/tufting.svg';
import accessory from '../../assets/hobby_icons/accessory.svg';

// 여행
import travel from '../../assets/hobby_icons/travel.svg';

// 문화예술
import festival from '../../assets/hobby_icons/festival.svg';
import act from '../../assets/hobby_icons/act.svg';
import traditional from '../../assets/hobby_icons/traditional.svg';
import museum from '../../assets/hobby_icons/museum.svg';
import artgallery from '../../assets/hobby_icons/artgallery.svg';

// 음악
import music from '../../assets/hobby_icons/music.svg';

import tradinstrument from '../../assets/hobby_icons/tradInstrument.svg';
import drum from '../../assets/hobby_icons/drum.svg';
import guitar from '../../assets/hobby_icons/guitar.svg';
import vocal from '../../assets/hobby_icons/vocal.svg';
import piano from '../../assets/hobby_icons/piano.svg';

// 미술
import art from '../../assets/hobby_icons/art.svg';
import camera from '../../assets/hobby_icons/camera.svg';
import interior from '../../assets/hobby_icons/interior.svg';

import oilpastel from '../../assets/hobby_icons/pastelart.svg';
import drawing from '../../assets/hobby_icons/drawing.svg';

// 뷰티
import beauty from '../../assets/hobby_icons/beauty.svg';

import fashion from '../../assets/hobby_icons/fashion.svg';
import perfume from '../../assets/hobby_icons/perfume.svg';

// 수상레포츠
import swimming from '../../assets/hobby_icons/swimming.svg';

import diving from '../../assets/hobby_icons/diving.svg';

// 아웃도어
import fishing from '../../assets/hobby_icons/fishing.svg';
import hiking from '../../assets/hobby_icons/hiking.svg';
import riding from '../../assets/hobby_icons/riding.svg';
import running from '../../assets/hobby_icons/running.svg';
import camping from '../../assets/hobby_icons/camping.svg';
import golf from '../../assets/hobby_icons/golf.svg';
import picnic from '../../assets/hobby_icons/picnic.svg';

import outdoor from '../../assets/hobby_icons/outdoor.svg';

// 요리
import cooking from '../../assets/hobby_icons/cooking.svg';

// 음료
import alcohol from '../../assets/hobby_icons/alcohol.svg';

import coffee from '../../assets/hobby_icons/coffee.svg';

// 피트니스
import yoga from '../../assets/hobby_icons/yoga.svg';
import pilates from '../../assets/hobby_icons/pilates.svg';

import health from '../../assets/hobby_icons/fitness.svg';

// 자기계발
import selfdev from '../../assets/hobby_icons/selfdev.svg';
import books from '../../assets/hobby_icons/book.svg';
import language from '../../assets/hobby_icons/language.svg';
import news from '../../assets/hobby_icons/news.svg';

// 스포츠
import ballsports from '../../assets/hobby_icons/ballsports.svg';
import dance from '../../assets/hobby_icons/dance.svg';
import racket from '../../assets/hobby_icons/racket.svg';
import bowling from '../../assets/hobby_icons/bowling.svg';

import climbing from '../../assets/hobby_icons/climbing.svg';
import insidesports from '../../assets/hobby_icons/sports.svg';

// 베이킹
import cake from '../../assets/hobby_icons/cake.svg';
import cookie from '../../assets/hobby_icons/cookie.svg';
import madeliene from '../../assets/hobby_icons/madeliene.svg';
import dacq from '../../assets/hobby_icons/dacq.svg';

interface HobbyIcons {
    [category: string]: {
        [hobby: string]: string;
    };
}

// 유사도 기반 추천 취미 리스트(취미 없는 사람)
const similarityHobbyIcons = {
    공예: {
        공예: craft,
    },
    여행: {
        여행: travel,
    },
    문화예술: {
        축제: festival,
        연극: act,
        전통예술: traditional,
        박물관: museum,
        미술관: artgallery,
    },
    음악: {
        음악: music,
    },
    미술: {
        미술: art,
        사진: camera,
        인테리어: interior,
    },
    뷰티: {
        뷰티: beauty,
    },
    수상레포츠: {
        수영: swimming,
    },
    스포츠: {
        구기스포츠: ballsports,
        댄스: dance,
        라켓스포츠: racket,
        볼링: bowling,
    },
    아웃도어: {
        낚시: fishing,
        등산: hiking,
        라이딩: riding,
        러닝: running,
        캠핑: camping,
        골프: golf,
        피크닉: picnic,
    },
    요리: {
        요리: cooking,
    },
    음료: {
        주류: alcohol,
    },
    피트니스: {
        요가: yoga,
        필라테스: pilates,
        헬스: health,
    },
    자기계발: {
        자기계발: selfdev,
        독서: books,
        어학: language,
        신문: news,
    },
} as HobbyIcons;

// 협업 필터링 추천 취미 리스트(취미 있는 사람)
const collabHobbyIcons = {
    공예: {
        가죽: leather,
        비누: soap,
        목공예: woodart,
        캔들: candle,
        유리: glass,
        뜨개: wool,
        도예: pottery,
        꽃: flower,
        터프팅: tufting,
        액세서리: accessory,
    },
    음악: {
        전통악기: tradinstrument,
        드럼: drum,
        기타: guitar,
        보컬: vocal,
        피아노: piano,
    },
    미술: {
        오일파스텔: oilpastel,
        펜드로잉: drawing,
    },
    베이킹: {
        다쿠아즈: dacq,
        마들렌: madeliene,
        케이크: cake,
        쿠키: cookie,
    },
    뷰티: {
        뷰티: beauty,
        패션: fashion,
        향수: perfume,
    },
    수상레포츠: {
        다이빙: diving,
    },
    아웃도어: {
        야외스포츠: outdoor,
    },
    요리: {
        요리: cooking,
    },
    음료: {
        주류: alcohol,
        커피: coffee,
    },
    피트니스: {
        요가: yoga,
        헬스: health,
    },
    스포츠: {
        구기스포츠: ballsports,
        댄스: dance,
        클라이밍: climbing,
        실내스포츠: insidesports,
    },
} as HobbyIcons;

export { collabHobbyIcons, similarityHobbyIcons };
