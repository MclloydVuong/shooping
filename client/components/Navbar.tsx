import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import AdbIcon from "@mui/icons-material/Adb";
import { ShoppingCart } from "@mui/icons-material";

// TODO seperate atoms
// TODO move styles to sass file

const Navbar = () => {
  return (
    <Box>
      <AdbIcon />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: "flex",
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        SHOPPING
      </Typography>

      <Box>
        <Tooltip title="Shopping Cart">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <ShoppingCart />
          </IconButton>
        </Tooltip>
      </Box>

      <Box>
        <Tooltip title="Open settings">
          <IconButton>
            <Avatar alt="Mclloyd Vuong">M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};
export default Navbar;
