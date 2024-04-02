import debounce from 'lodash/debounce';
import React from 'react';

import { InputAdornment, Stack, TextField } from '@mui/material';

import Iconify from '../../components/Iconify';

interface IProps {
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Index: React.FC<IProps> = ({handleSearch}) => {
    const handleSearchByDebounce = debounce(handleSearch, 700);

    return (
        <Stack
            spacing={2}
            direction={{xs: 'column', sm: 'row'}}
            sx={{py: 2.5, px: 3}}
        >
            <TextField
                fullWidth
                onChange={handleSearchByDebounce}
                placeholder={'search'}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <Iconify
                                icon={'eva:search-fill'}
                                sx={{
                                    color: 'text.disabled',
                                    width: 20,
                                    height: 20,
                                }}
                            />
                        </InputAdornment>
                    ),
                }}
            />
        </Stack>
    );
};

export default Index;
