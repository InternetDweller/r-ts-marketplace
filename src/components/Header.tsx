import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/style.css';


/*
<ul id='headerRibbon'>
                <li id='logoWrapper'><a href='/'><img alt='logo' src='/favicon.ico' /></a></li>
                <li>Каталог</li>
                <li><img alt='Корзина' src='/icon-basket.svg' /></li>
                <li><img alt='Профиль' src='/icon-account.svg' /></li>
            </ul>
*/


export default function Header() {
    // Content loads faster than with an anchor
    const navigate: Function = useNavigate();

    const [search, setSearch] = useState<string>('');

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value);
    };

    function handleSearchButtonClick(): void {
        navigate(`/search/${search}`);
    };

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void {
        if (e.key === 'Enter') {
            navigate(`/search/${search}`);
        };
    };

    return(
        <div className='header'>
            <div id='headerRibbon'>
                <div className='headerGridBox' id='logoWrapper' onClick={() => navigate('/')}><img alt='logo' src='/favicon.ico' /></div>
                <div className='headerGridBox textButton' onClick={() => navigate('/error')}>Акция</div>
                <div className='headerGridBox textButton' onClick={() => navigate('/catalogue')}>Каталог</div>
                <div className='headerGridBox headerGridBoxSearch'>
                    <input id='searchField' className={search ? 'enlarged' : ''} placeholder='Поиск' type='text' onChange={handleChange} onKeyDown={handleKeyDown} />
                    <div id='searchButtonWrapper' onClick={handleSearchButtonClick}><img className='filtered' alt='Поиск' src='/icon-search.svg' /></div>
                </div>
                <div></div>
                <div className='headerGridBox iconButton'><img className='filtered' alt='Корзина' src='/icon-basket.svg' /></div>
                <div className='headerGridBox iconButton'><img className='filtered' alt='Профиль' src='/icon-account.svg' /></div>
            </div>
        </div>
    );
};