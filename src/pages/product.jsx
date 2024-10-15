import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../data/product-data'
import { Box, Button, IconButton, Rating, Stack, Typography } from '@mui/material'
import { HeartIcon } from '../assets/icons/heart-icon';
import styled from '@emotion/styled';
import { theme } from '../config/mui-config';
import { SecondaryButton } from '../components/secondary-button/style';

const CardWrapper = styled.div`
  padding: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 80px 140px;

  img{
    border-radius: 20px;
  }
`;


export const Product = () => {
    const { id } = useParams()
    const product = products.find((item) => item.id == (id))

    return (
        <CardWrapper>
            <Typography fontWeight={500} fontSize={'60px'}>{product.title}</Typography>
            <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
                <Rating value={product.raiting} />
            </Stack>

            <Stack flexDirection={'row'} justifyContent={'space-between'} gap={'30px'}>
                <Box mb={"20px"} display={'flex'} flexDirection={'column'} gap={'20px'}>
                    <img src={product.img} alt="img" />
                    <img src={product.img} alt="img" />
                    <img src={product.img} alt="img" />
                </Box>

                <Box>
                    <img src={product.img} alt="img" width={"557px"} />
                </Box>

                <Box>
                    <Box display={'flex'} alignItems={"center"} gap={"35px"}>
                        <Box>
                            <Typography fontSize={"40px"}>{product.price}T</Typography>
                        </Box>
                        <Box>
                            <Typography fontSize={"40px"} variant='caption'>{product.instalment.price}T</Typography>

                        </Box>
                    </Box>

                    <Box pt={'29px'} display={'flex'} justifyContent={"space-between"}>
                        <SecondaryButton>
                            B корзину
                        </SecondaryButton>

                        <IconButton >
                            <HeartIcon />
                        </IconButton>
                    </Box>

                    <Box pt={'22px'} boxShadow={'0px 0px 11px 2px'} mt={'20px'} padding={'20px'}>
                        <Typography pb={'12px'}>Возврат в течение 14 дней</Typography>
                        <Typography pb={'12px'}>Среднее время доставки 2.5 дня</Typography>
                        <Typography>Подробнее</Typography>
                    </Box>

                    <Typography py={'20px'}>Нужна помощь c выбором? Просто напишите нам 
                    в WhatsApp и мы обязательно вам поможем!</Typography>

                    <SecondaryButton>
                        Написать
                    </SecondaryButton>
                </Box>
            </Stack>

        </CardWrapper>
    )
}
