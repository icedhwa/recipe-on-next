import React, { useState } from 'react';
import { css } from '@emotion/react';

import { ButtonSearch } from './Button';
import { Input } from './Form';
import Router from "next/router";

const SearchBox = () => {
    const [search, storeSearch] = useState('');

    const searchRecipe = (e) => {
        e.preventDefault();

        if (typeof search !== 'string' || search.trim() === '') return;
        Router.push({
            pathname: '/search',
            query: {q: search},
        }).then(() => console.log('Navigation finished!'));  
    };

    return (
        <form
            css={css`
                position: relative;
            `}
            onSubmit={searchRecipe}
        >
            <Input
                css={css`
                    min-width: 300px;
                `}
                type='text'
                placeholder='Search Recipes'
                onChange={(e) => storeSearch(e.target.value)}
            />
            <ButtonSearch title='search' type='submit' />
            <ButtonSearch />
        </form>
    );
};

export default SearchBox;