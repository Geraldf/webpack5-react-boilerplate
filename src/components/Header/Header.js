import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

//import Logo from "../../assets/icons/FoxMenu";
import Logo from "../../assets/icons/fox_menu.svg";
import { useTheme } from "@material-ui/core/styles";

const styles = (theme) => ({
  toolbarRoot: {
    paddingRight: 24,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
    color: "#ec407a",
  },
  title: {
    flexGrow: 1,
  },
});

const Header = (props) => {
  const { classes, handleToggleDrawer } = props;
  const theme = useTheme();
  return (
    <AppBar position="fixed">
      <Toolbar disableGutters={true} classes={{ root: classes.toolbarRoot }}>
        <Logo
          width={30}
          height={30}
          aria-label="Open drawer"
          onClick={handleToggleDrawer}
          className={classes.menuButton}
          color="#123123"
          fill={theme.palette.primary.contrastText}
        ></Logo>
        {/* <Logo width={30} height={30}></Logo> */}
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          Appname
        </Typography>

        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <PersonIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
