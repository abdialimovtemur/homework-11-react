import React from "react";
import logo from "../../../assets/logo.svg";
import logoMobile from "../../../assets/logo-mobile.svg"
import { IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import { LocationIcon } from "../../../assets/icons/location-icon";
import { LogoLink } from "./style";
import { theme } from "../../../config/mui-config";
import { SearchInput } from "../../../components/seach-input/search-input";

export const Search = () => {
    const md = useMediaQuery(`(min-width:${theme.breakpoints.values.md}px)`);

    const changeInput = (e) => {
        console.log(e.target.value);
    }
    return (
        <Stack direction={"row"} gap={{ xs: "33px", md: "60px" }} flexGrow={1}>
            <LogoLink to={"/"}>
            {md ? <img style={{ verticalAlign: "bottom" }} src={logo} alt="logo" /> :<img src={logoMobile} alt="img"/>}

                
            </LogoLink>
            <Stack display={{ xs: "none", md: "flex" }} direction={"row"} gap="8px" alignItems={"center"}>
                <IconButton>
                    <LocationIcon />
                </IconButton>
                <Typography variant="body1">Алматы</Typography>
            </Stack>
            <SearchInput onChange={changeInput} />
        </Stack>
    );
};