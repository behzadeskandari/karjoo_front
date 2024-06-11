import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AppBar,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
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

import MenuIcon from "@mui/icons-material/Menu";
export default function HeaderAndNavigationMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

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
    <div>
      <List>
        <ListItem button>
          <ListItemText primary="محاسبه حقوق" />
          {calculatorIcon}
        </ListItem>
        <ListItem button>
          <ListItemText primary="روزمه ساز" />
          {paperclipIcon}
        </ListItem>
        <ListItem button>
          <ListItemText primary="فرصت شغلی" />
          {exchangeIcon}
        </ListItem>
        <ListItem button>
          <ListItemText primary="فرصت های شغلی پیشنهادی" />
          {coinsIcon}
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            gap: "10px",
            justifyContent: "right",
          }}
        >
          <Hidden mdUp>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h6" className="margin-right-20">
            کارجو
          </Typography>
          {matches && (
            <Hidden smDown>
              <div>
                <List
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <ListItem button className="width-9">
                    {calculatorIcon}
                    <ListItemText primary="محاسبه حقوق" />
                  </ListItem>
                  <ListItem button className="width-9">
                    {paperclipIcon}
                    <ListItemText primary="روزمه ساز" />
                  </ListItem>
                  <ListItem button className="width-9">
                    {exchangeIcon}
                    <ListItemText primary="فرصت شغلی" />
                  </ListItem>
                  <ListItem button className="width-12 pad-inline-10">
                    {/* <Calculator /> */}
                    <ListItemText primary="فرصت های ضغلی پیشنهادی" />
                    {coinsIcon}
                  </ListItem>
                </List>
              </div>
            </Hidden>
          )}
        </Toolbar>
      </AppBar>
      <nav>
        {!matches && (
          <Hidden mdUp implementation="css">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
        )}
        {/* <Hidden smDown implementation="css">
            <Drawer
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden> */}
      </nav>
    </div>
  );
}
