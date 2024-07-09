import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AppBar,
  Box,
  Button,
  Collapse,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  faEnvelope,
  faCalculator,
  faExchange,
  faPaperclip,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {
  ArrowBack,
  ArrowDropDown,
  ArrowLeft,
  ArrowLeftOutlined,
  Brightness1,
  Brightness3,
  Brightness5,
  ExpandLess,
  ExpandMore,
  HomeOutlined,
  Login,
  Logout,
  StarBorder,
} from "@mui/icons-material";
import { useThemeToggle } from "../../wrapper/ThemeProviderWrapper";
export default function HeaderAndNavigationMenu() {
  //region COntext
  const toggleTheme = useThemeToggle();
  console.log(toggleTheme[0], "toggleTheme, isDarkMode");
  console.log(toggleTheme[1], "toggleTheme, isDarkMode");
  const [mobileOpen, setMobileOpen] = useState(false);
  const label = { inputProps: { "aria-label": "Size switch demo" } };
  const drawerWidth = 320;
  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openEl = Boolean(anchorEl);
  const handleClickDropDown = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  const handleClick = () => {
    setOpen(!open);
  };
  const handleNavigateToHome = () => {
    navigate({
      pathname: "/",
    });
    if (mobileOpen) {
      handleDrawerToggle();
    }
  };
  const handleNavigateToLogin = () => {
    navigate({
      pathname: "/login",
    });
    if (mobileOpen) {
      handleDrawerToggle();
    }
  };
  const handleNavigateToSignUp = () => {
    navigate({
      pathname: "/signup",
    });
    if (mobileOpen) {
      handleDrawerToggle();
    }
  };
  const handleNavigateMBTITest = () => {
    navigate({
      pathname: "/MBTITest",
    });
    if (mobileOpen) {
      handleDrawerToggle();
    }
  };
  const handleNavigateToLoginToEmployeer = () => {
    navigate({
      pathname: "/employer",
    });
    if (mobileOpen) {
      handleDrawerToggle();
    }
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const navItems = [
    "محاسبه حقوق",
    "روزمه ساز",
    "فرصت شغلی",
    "فرصت های شغلی پیشنهادی",
  ];
  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));

    // return () => {
    //   window
    //     .matchMedia("(min-width: 768px)")
    //     .removeEventListener("change", (e) => setMatches(!e.matches));
    // };
  }, []);
  const calculatorIcon = (
    <FontAwesomeIcon className="margin-inline-7" icon={faCalculator} />
  );
  const exchangeIcon = (
    <FontAwesomeIcon className="margin-inline-7" icon={faExchange} />
  );
  const paperclipIcon = (
    <FontAwesomeIcon className="margin-inline-7" icon={faPaperclip} />
  );
  const coinsIcon = (
    <FontAwesomeIcon className="margin-inline-7" icon={faCoins} />
  );

  const drawer = (
    <Box>
      <List>
        <ListItem button>
          <ArrowBack onClick={handleDrawerToggle} />
        </ListItem>
        <ListItem button onClick={handleNavigateToHome}>
          <ListItemText
            className="text-right"
            primary={
              <Typography style={{ fontFamily: "IRANSans", fontSize: "1.2em" }}>
                صفحه اصلی
              </Typography>
            }
          />
          <HomeOutlined />
        </ListItem>
        <ListItem button onClick={handleNavigateToSignUp}>
          <ListItemText
            className="text-right"
            primary={
              <Typography style={{ fontFamily: "IRANSans", fontSize: "1.2em" }}>
                ثبت نام
              </Typography>
            }
          />
          <Logout />
        </ListItem>

        <ListItem button onClick={handleNavigateToLogin}>
          <ListItemText
            className="text-right"
            primary={
              <Typography style={{ fontFamily: "IRANSans", fontSize: "1.2em" }}>
                ورود
              </Typography>
            }
          />
          <Login />
        </ListItem>
        <ListItem button>
          <ListItemText
            className="text-right"
            primary={
              <Typography style={{ fontFamily: "IRANSans", fontSize: "1.2em" }}>
                محاسبه حقوق
              </Typography>
            }
          />
          {calculatorIcon}
        </ListItem>
        <ListItem button>
          <ListItemText
            className="text-right"
            primary={
              <Typography style={{ fontFamily: "IRANSans", fontSize: "1.2em" }}>
                روزمه ساز
              </Typography>
            }
          />
          {paperclipIcon}
        </ListItem>
        <ListItem button>
          <ListItemText
            className="text-right"
            primary={
              <Typography style={{ fontFamily: "IRANSans", fontSize: "1.2em" }}>
                فرصت شغلی
              </Typography>
            }
          />
          {exchangeIcon}
        </ListItem>
        <ListItem button>
          <ListItemText
            className="text-right"
            primary={
              <Typography style={{ fontFamily: "IRANSans", fontSize: "1.2em" }}>
                فرصت های شغلی پیشنهادی
              </Typography>
            }
          />
          {coinsIcon}
        </ListItem>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Inbox" />
          <ListItemIcon>
            {open ? <ExpandLess /> : <ExpandMore />}
            {/* <ExpandLess /> */}
          </ListItemIcon>
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar position="static" component="main">
        {/* sx={{ backgroundColor: "green" }} */}
        <Toolbar dir="rtl">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 0, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            onClick={handleNavigateToHome}
            variant="h6"
            component="div"
            sx={{
              cursor: "pointer",
              flexGrow: 0,
              display: { xs: "none", sm: "flex" },
              fontFamily: "IRANSans",
            }}
          >
            کارجو
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
            }}
          >
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff", fontFamily: "IRANSans" }}>
                {item}
              </Button>
            ))}
            <Button
              sx={{ color: "#fff", fontFamily: "IRANSans" }}
              id="demo-positioned-button"
              aria-controls={openEl ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openEl ? "true" : undefined}
              onClick={handleClickDropDown}
            >
              تست های خود شناسی
              {openEl ? <ArrowLeft /> : <ArrowDropDown />}
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={openEl}
              onClose={handleClose}
              style={{ textAlign: "right", top: "3em" }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
                placement: "bottom-start",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
                placement: "bottom-start",
              }}
            >
              <MenuItem
                sx={{
                  color: "#000",
                  textAlign: "right",
                  display: { xs: "none", sm: "block" },
                  fontFamily: "IRANSans",
                }}
                onClick={handleClose}
              >
                <Button
                  sx={{ color: "#000", fontFamily: "IRANSans" }}
                  onClick={handleNavigateMBTITest}
                >
                  تست MBTI
                </Button>
              </MenuItem>
              <MenuItem
                sx={{
                  display: { xs: "none", sm: "block" },
                  color: "#000",
                  textAlign: "right",
                  fontFamily: "IRANSans",
                }}
                onClick={handleClose}
              >
                تست تیپ سنجی شغلی
              </MenuItem>
              <MenuItem
                sx={{
                  display: { xs: "none", sm: "block" },
                  color: "#000",
                  textAlign: "right",
                  fontFamily: "IRANSans",
                }}
                onClick={handleClose}
              >
                تست هوش چندگانه
              </MenuItem>
              <MenuItem
                sx={{
                  display: { xs: "none", sm: "block" },
                  color: "#000",
                  textAlign: "right",
                  fontFamily: "IRANSans",
                }}
                onClick={handleClose}
              >
                تست هوش هیجانی Bar-On
              </MenuItem>
              <MenuItem
                sx={{
                  display: { xs: "none", sm: "block" },
                  color: "#000",
                  textAlign: "right",
                  fontFamily: "IRANSans",
                }}
                onClick={handleClose}
              >
                تست NEO
              </MenuItem>
            </Menu>

            <Box>
              {toggleTheme[1] == true ? (
                <Brightness5 color="primary.main" />
              ) : (
                <Brightness5 color="primary.main" />
              )}

              <Switch
                {...label}
                defaultChecked
                color="primary.main"
                size="medium"
                onClick={toggleTheme[0]}
              >
                {/* {toggleTheme[1] ? "Light" : "Dark"}  */}
              </Switch>
              {toggleTheme[1] == false ? <Brightness3 /> : <Brightness3 />}
            </Box>
            <Button
              color="secondary"
              onClick={handleNavigateToLogin}
              sx={{ fontFamily: "IRANSans" }}
              title="ورود"
            >
              ورود
            </Button>

            <Button
              color="secondary"
              onClick={handleNavigateToSignUp}
              sx={{ fontFamily: "IRANSans" }}
              title=" ثبت نام"
            >
              ثبت نام{" "}
            </Button>
            <Button
              color="secondary"
              onClick={handleNavigateToLoginToEmployeer}
              sx={{ fontFamily: "IRANSans" }}
              title="بخش کارفرمایان / ثبت آگهی"
            >
              بخش کارفرمایان / ثبت آگهی
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
