import React from 'react'
import styled from '@emotion/styled'
import { theme } from '../../config/mui-config';
import { Box, IconButton, Rating, Stack, Typography } from '@mui/material';
import { HeartIcon } from '../../assets/icons/heart-icon';
import { Link } from 'react-router-dom';

const CardWrapper = styled.div`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  position: relative;    
`;


const NewCardBadge = styled.div`
  background-color: ${theme.palette.primary.main};
  color: #fff;
  padding: 3px 20px;
  position: absolute;
  top: 0px;
  left: 0;
    
`

export const ProductCard = ({ id, new: newProduct, img, title, size, price, location, raiting, instalment }) => {
    return (
        <CardWrapper>
            <Stack mb={"20px"} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <div>{newProduct && <NewCardBadge>Новинка</NewCardBadge>}</div>
                <IconButton>
                    <HeartIcon />
                </IconButton>
            </Stack>
            <Box mb={"20px"} textAlign={"center"} >
                <img src={img} alt="img" />
            </Box>
            <Link to={`/product/${id}`}>
                <Typography fontWeight={500} variant='body1'>{title}</Typography>
            </Link>
            <Typography mb={"8px"} variant='body2'>Размер: {size}</Typography>
            <Typography mb={"8px"} variant='body2'>Производитель: {location}</Typography>
            <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
                <Rating value={raiting} />
            </Stack>
        </CardWrapper>
    )
}
