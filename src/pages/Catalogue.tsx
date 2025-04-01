import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import '../css/style.css';

export default function Catalogue() {
    const [sorting, setSorting] = useState<string>('nosorting');
    const [filter, setFilter] = useState<string>('all');

    function handleSortingChange(e: React.ChangeEvent<HTMLSelectElement>): void {
        setSorting(e.target.value);
    };

    function handleFilterChange(e: React.ChangeEvent<HTMLSelectElement>): void {
        setFilter(e.target.value);
    };

    return(
        <div className='mainContent'>
            <Header />
            <div className='pageTitle'>Каталог товаров</div>
            <div className='catalogueFiltersWrapper'>
                <div className='catalogueFilterLabel'>Сортировать:</div>
                <select className='catalogueFilterSelect' onChange={handleSortingChange}>
                    <option value='nosorting'>---</option>
                    <option value='alphabet'>По алфавиту</option>
                    <option value='price'>По цене</option>
                </select>
                <div className='catalogueFilterLabel'>Показать:</div>
                <select className='catalogueFilterSelect' onChange={handleFilterChange}>
                    <option value='all'>Все</option>
                    <option value='male'>Мужские</option>
                    <option value='female'>Женские</option>
                </select>
            </div>
            <ProductList sorting={sorting} filter={filter} />
            <Footer />
        </div>
    );
};