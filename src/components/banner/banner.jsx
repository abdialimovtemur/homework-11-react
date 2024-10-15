import React from 'react'
import banner1 from '../../assets/banner1.png'
import { Box, Container, Stack } from '@mui/material'
import { theme } from '../../config/mui-config'
import styled from '@emotion/styled'
import { SecondaryButton } from '../secondary-button/secondart-button';

const Title = styled.h1`
  font-weight: 700;
  font-size: 60px; 
  line-height: 130%;
  color: #f9f9f9;
  max-width: 524px;
  margin-bottom: 32px;

  @media screen and (max-width: 900px) {
    font-size: 40px;
  }

  @media screen and (max-width: 320px) {
    font-size: 24px;
  }
`;


export const Banner = () => {
    return (
        <Box py={"97px"} bgcolor={theme.palette.primary.main} display={'flex'} alignItems={'center'}>
            <Container maxWidth={"xs"}>
                <Stack direction={{xs:"flex" ,lg:"row"}} justifyContent={"space-between"}>
                    <Box>
                        <Title>Новая коллекция ковров Venetta</Title>
                        <SecondaryButton>Смотреть все</SecondaryButton>
                    </Box>
                    <Stack gap={"40px"} direction={"row"}>
                        <Box maxWidth={{xs:"203px",sm:"250px",lg:"350px"}}>
                            <img src={banner1} alt="img" width={"100%"}/>
                        </Box>
                        <Box  maxWidth={{xs:"203px",sm:"250px",lg:"350px"}} display={{xs:"none", md:"block"}}>
                            <img src={banner1} alt="img"width={"100%"} />
                        </Box>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}
