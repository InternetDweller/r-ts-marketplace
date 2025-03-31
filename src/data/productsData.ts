export interface TypeProduct {
    id: number,
    name: string,
    price: number,
    src: string,
    size: Array<number>,
    rating: number,
};

export const products: Array<TypeProduct> =[
    {
        id: 1,
        name: 'Кофта',
        price: 330,
        src: 'кофта.jpg',
        size: [1, 2, 3, 4, 5],
        rating: 4.5,
    },
    {
        id: 2,
        name: 'Брюки',
        price: 220,
        src: 'брюки.jpg',
        size: [2, 4],
        rating: 4.4,
    },
    {
        id: 3,
        name: 'Рубашка',
        price: 160,
        src: 'отсутствует.jpg',
        size: [],
        rating: 4.7,
    },
    {
        id: 4,
        name: 'Футболка',
        price: 200,
        src: 'отсутствует.jpg',
        size: [2],
        rating: 3.1,
    }
];