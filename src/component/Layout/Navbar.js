import React, { useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import {
    AppBar,
    Box,
    Divider,
    Drawer,
    IconButton,
    Toolbar,
    Typography,
    Badge,
    InputBase,
} from "@mui/material";
import WidgetsIcon from '@mui/icons-material/Widgets';
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from '@mui/icons-material/Search';

import { NavLink } from "react-router-dom";
import '../styles/HeaderStyles.css'


const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    // hndle menu click
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    //menu drawer
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography
                color={"goldenrod"}
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, my: 2 }}
            >
            </Typography>
            <Divider />
            <ul className="mobile-navigation">
                <li>
                    <NavLink activeclassname="active" to={"/"}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                    <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                    <NavLink to={"/contact"}>Contact</NavLink>
                </li>
            </ul>
        </Box>
    );
    return (
        <>
            <Box>
                <AppBar position="sticky" component={"nav"} sx={{ bgcolor: "black" }}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            sx={{
                                mr: 2,
                                display: { sm: "none" },
                            }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            color={"goldenrod"}
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge color="error">
                                    <WidgetsIcon />
                                </Badge>
                            </IconButton>
                        </Typography>
                        <Box sx={{ display: { xs: "none", sm: "block" } }}>
                            <ul className="navigation-menu">
                                <li>
                                    <NavLink activeclassname="active" to={"/"}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/blog"}>Blog</NavLink>
                                </li>
                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        sx={{
                            display: { xs: "block", sm: "none" },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: "240px",
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box >
        </>
    );
};

export default Header;
