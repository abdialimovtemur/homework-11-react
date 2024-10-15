import React from 'react'
import { SearchInputWrapper } from './style'
import { InputAdornment, TextField } from '@mui/material'
import { SearchIcon } from '../../assets/icons/search-icon'

export const SearchInput = ({onChange}) => {
    return (
        <SearchInputWrapper flexGrow={1}>
                <TextField
                onChange={onChange}
                    placeholder="Поиск по товарам"
                    sx={{ bgcolor: "transparent" }}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        },
                    }}
                    fullWidth
                    variant="filled"
                />
            </SearchInputWrapper>
    )
}
