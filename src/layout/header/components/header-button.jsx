import { IconButton, Stack, useMediaQuery } from '@mui/material'
import React from 'react'
import { UserIcon } from '../../../assets/icons/user-icon'
import styled from '@emotion/styled'
import { theme } from '../../../config/mui-config'

const CustomButton = styled(IconButton)`
  color :#1d1d1d ;
  &:hover{
    color: ${theme.palette.primary.main};
  }
`;

export const HeaderButton = () => {
  const md = useMediaQuery(`(min-width:${theme.breakpoints.values.md}px)`);

  if (!md) {
    return null;
  }

  return (
    <Stack direction={"row"} gap={"20px"}>
      <CustomButton>
        <UserIcon />
      </CustomButton>

      <CustomButton>
        <UserIcon />
      </CustomButton>

      <CustomButton>
        <UserIcon />
      </CustomButton>
    </Stack>
  )
}
