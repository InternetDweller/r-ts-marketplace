export interface TypeProduct {
    id: number,
    name: string,
    price: number,
    src: string,
    size: Array<number>,
    rating: number,
    madeof: string,
    gender: string,
};

export const products: Array<TypeProduct> =[
    {
        id: 1,
        name: 'Кофта',
        price: 330,
        src: 'кофта.jpg',
        size: [1, 2, 3, 4],
        rating: 4.5,
        madeof: 'Состав кофты, состав кофты, состав кофты, состав кофты, состав кофты, состав кофты, состав кофты, состав кофты.',
        gender: 'F',
    },
    {
        id: 2,
        name: 'Брюки серые женские',
        price: 220,
        src: 'брюки-1.jpg',
        size: [2, 4],
        rating: 4.4,
        madeof: 'Состав брюк, состав брюк, состав брюк, состав брюк, состав брюк, состав брюк.',
        gender: 'F',
    },
    {
        id: 3,
        name: 'Рубашка',
        price: 160,
        src: 'отсутствует.jpg',
        size: [],
        rating: 4.7,
        madeof: 'Состав рубашки, состав рубашки, состав рубашки, состав рубашки, состав рубашки, состав рубашки, состав рубашки, состав рубашки, состав рубашки, состав рубашки.',
        gender: 'M',
    },
    {
        id: 4,
        name: 'Футболка',
        price: 200,
        src: 'отсутствует.jpg',
        size: [2],
        rating: 3.1,
        madeof: 'Состав футболки, состав футболки, состав футболки, состав футболки, состав футболки, состав футболки.',
        gender: 'U',
    },
    {
        id: 5,
        name: 'Резинка д/волос розовая',
        price: 10,
        src: 'резинка-6.jpg',
        size: [1],
        rating: 4.8,
        madeof: 'Ткань, нитки.',
        gender: 'F',
    },
    {
        id: 6,
        name: 'Рубашка синяя',
        price: 10950,
        src: 'руб-син.jpg',
        size: [4, 5],
        rating: 4.8,
        madeof: 'Картинка отсюда: https://aimclo.ru/shop/rubashki-i-bluzki/rubashka-flanelevaya-v-kletku-oversayz-siniy, цена прекрасная.',
        gender: 'F',
    },
    {
        id: 7,
        name: 'Рубашка зелёная',
        price: 10,
        src: 'руб-зел.jpg',
        size: [],
        rating: 4.8,
        madeof: '-',
        gender: 'F',
    },
    {
        id: 8,
        name: 'Рубашка светло-синяя',
        price: 10,
        src: 'руб-св-син.jpg',
        size: [2, 4, 5],
        rating: 4.8,
        madeof: '-',
        gender: 'M',
    },
    {
        id: 9,
        name: 'Резинка д/волос красная блестящая',
        price: 15,
        src: 'резинка-7.jpg',
        size: [3],
        rating: 4.9,
        madeof: 'Кандинский ИИ подогнал картинку, за это ему спасибо.',
        gender: 'F',
    },
    {
        id: 10,
        name: 'Плащ-дождевик прорезиненный',
        price: 1200,
        src: 'плащ.jpg',
        size: [3, 4, 5],
        rating: 4.4,
        madeof: 'Резина.',
        gender: 'U',
    },
    {
        id: 11,
        name: 'Резинка д/волос чёрная',
        price: 8,
        src: 'резинка-1.jpg',
        size: [1],
        rating: 4.7,
        madeof: 'Ткань, нитки.',
        gender: 'F',
    },
    {
        id: 12,
        name: 'Шапка синяя',
        price: 95,
        src: 'отсутствует.jpg',
        size: [4, 5],
        rating: 4.3,
        madeof: '',
        gender: 'U',
    },
    {
        id: 13,
        name: 'Резинка д/волос новогодняя',
        price: 15,
        src: 'резинка-3.jpg',
        size: [],
        rating: 4.7,
        madeof: 'Ткань, нитки, мех.',
        gender: 'F',
    },
    {
        id: 14,
        name: 'Резинка д/волос зелёная',
        price: 12,
        src: 'резинка-4.jpg',
        size: [1],
        rating: 4.7,
        madeof: 'Ткань, нитки.',
        gender: 'F',
    },
    {
        id: 15,
        name: 'Резинка д/волос с оленями',
        price: 10,
        src: 'резинка-5.jpg',
        size: [1],
        rating: 4.7,
        madeof: 'Ткань, нитки, пластик, пищевые блёстки.',
        gender: 'F',
    },
    {
        id: 16,
        name: 'Брюки кремовые',
        price: 420,
        src: 'брюки-2.jpg',
        size: [],
        rating: 4.3,
        madeof: '',
        gender: 'F',
    },
    {
        id: 17,
        name: 'Брюки серые мужские',
        price: 450,
        src: 'брюки-3.jpg',
        size: [1, 2, 4, 5],
        rating: 4.4,
        madeof: '',
        gender: 'M',
    },
    {
        id: 18,
        name: 'Перчатки взрослые',
        price: 82,
        src: 'перчатки-1.jpg',
        size: [3, 4, 5],
        rating: 4.8,
        madeof: '',
        gender: 'M',
    },
    {
        id: 19,
        name: 'Носки кремовые',
        price: 25,
        src: 'носки-1.jpg',
        size: [1, 5],
        rating: 4.5,
        madeof: '',
        gender: 'F',
    },
    {
        id: 20,
        name: 'Брюки коричневые',
        price: 450,
        src: 'брюки-4.jpg',
        size: [1, 4, 5],
        rating: 4.5,
        madeof: '',
        gender: 'F',
    },
    {
        id: 21,
        name: 'Набор носков 3 пары',
        price: 65,
        src: 'носки-3.jpg',
        size: [1, 2, 3, 4, 5],
        rating: 4.8,
        madeof: '',
        gender: 'F',
    },
    {
        id: 22,
        name: 'Шапка чёрная',
        price: 220,
        src: 'отсутствует.jpg',
        size: [],
        rating: 4.7,
        madeof: '',
        gender: 'U',
    },
    {
        id: 23,
        name: 'Клоунский парик',
        price: 100,
        src: 'парик.jpg',
        size: [3, 4],
        rating: 5,
        madeof: 'Not today but tomorrow!',
        gender: 'U',
    },
    {
        id: 24,
        name: 'Перчатки детские',
        price: 76,
        src: 'перчатки-2.jpg',
        size: [1, 2],
        rating: 4.2,
        madeof: '',
        gender: 'F',
    },
    {
        id: 25,
        name: 'Носки новогодние',
        price: 45,
        src: 'носки-2.jpg',
        size: [1, 4, 5],
        rating: 3.7,
        madeof: '',
        gender: 'U',
    },
    {
        id: 26,
        name: 'Носки чёрные',
        price: 20,
        src: 'носки-4.jpg',
        size: [2, 3, 4],
        rating: 4.9,
        madeof: '',
        gender: 'M',
    },
    {
        id: 27,
        name: 'Перчатки детские',
        price: 76,
        src: 'перчатки-3.jpg',
        size: [],
        rating: 4.6,
        madeof: '',
        gender: 'F',
    },
];