export interface TypeProduct {
    id: number,
    name: string,
    price: number,
    src: string,
};

export const products: Array<TypeProduct> =[
    {
        id: 1,
        name: 'Кофта',
        price: 330,
        src: 'кофта.jpg',
    },
    {
        id: 2,
        name: 'Брюки',
        price: 220,
        src: 'брюки.jpg',
    },
    {
        id: 3,
        name: 'Рубашка',
        price: 160,
        src: 'отсутствует.jpg',
    },
    {
        id: 4,
        name: 'Футболка',
        price: 200,
        src: 'отсутствует.jpg',
    }
];