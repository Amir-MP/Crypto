import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/styles";
import { SidebarData } from "./SidebarData";
import { NavbarData } from "./NavbarData";
import { Link } from "react-router-dom";
import { BsChevronDoubleRight } from "react-icons/bs";
import { logout, useAuth } from "../Configs/firebase-config";
import { Button } from "@mui/material";
import * as FiIcons from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./ResponsiveDrawer.css";
import { useSelector } from "react-redux";

const drawerWidth = 200;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(104% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));
const notifyNotFound = () => toast("کاربری یافت نشد");
const notifyError = () => toast("خطایی رخ داده است");
const notify = () => toast("با موفقیت خارج شدید");
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight() {
  const useStyle = makeStyles({
    typography: {
      display: "flex",
      textAlign: "center",
      width: "auto",
      paddingRight: "2vw",
      borderCollapse: "separate ",
      textJustify: "inherit",
      margin: "auto",
      alignItems: "center",
      paddingBottom: "25px",
      paddingTop: "25px",
      flexDirection: "row-reverse ",
      color: "#f5f5f5",
      "&:hover": {
        color: "#C3B3FF",
        transition: "color 2s",
      },
    },
    typography2: {
      display: "flex",
      textAlign: "center",
      width: "auto",
      paddingRight: "2vw",
      borderCollapse: "separate ",
      textJustify: "inherit",
      margin: "auto",
      alignItems: "center",
      paddingBottom: "25px",
      paddingTop: "25px",
      paddingLeft: "30px",
      color: "#000000",
      "&:hover": {
        color: "#545322",
        transition: "color 2s",
      },
    },
    list: {
      textDecoration: "none",
    },
  });
  let navigate = useNavigate();
  const classes = useStyle();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const email = useSelector((state) => state.user.email);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const currentUser = useAuth();
  const handleLogIn = () => {
    navigate("/login");
  };

  const handleLogOut = () => {
    try {
      navigate("/login");
      if (currentUser != null) {
       
        logout();
        window.location.reload(false);
        notify();
      } else {
        notifyError();
      }
    } catch {
      if (currentUser == null) {
        notifyNotFound();
      } else {
        notifyError();
      }
    }
  };
  <ToastContainer
    position="top-center"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={true}
    draggable
    pauseOnHover
  />;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        style={{
          borderRadius: "0",
          height: "70px",
          backgroundColor: "#3522B3",
        }}
        elevation={4}
        position="sticky"
        open={open}
        component={Paper}
      >
        <Toolbar dir="rtl">
          <IconButton
            color="primary"
            size="lage"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <MenuIcon style={{ color: "white" }} sx={{ fontSize: 40 }} />
          </IconButton>
          {NavbarData.map((item, index) => {
            return (
              <Box button key={index} className={classes.box}>
                <Link style={{ textDecoration: "none" }} to={item.path}>
                  <Typography
                    sx={{
                      fontSize: {
                        lg: 20,
                        md: 18,
                        sm: 14,
                        xs: 10,
                      },
                    }}
                    className={classes.typography}
                    style={{
                      fontFamily: "Iranian_Sans",
                      textAlign: "center",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Link>
              </Box>
            );
          })}
          {currentUser == null ? (
            <Button
              id="mobile"
              onClick={handleLogIn}
              style={{ position: "absolute", left: "1vw" }}
            >
              {" "}
              <Typography
                sx={{
                  fontSize: {
                    lg: 20,
                    md: 18,
                    sm: 14,
                    xs: 10,
                  },
                }}
                style={{ color: "white", fontFamily: "Iranian_Sans" }}
              >
                ورود
              </Typography>{" "}
            </Button>
          ) : (
            <Button
              onClick={handleLogOut}
              style={{ position: "absolute", left: "1vw" }}
            >
              {" "}
              <Typography
                onClick={handleDrawerClose}
                sx={{
                  fontSize: {
                    lg: 20,
                    md: 18,
                    sm: 14,
                    xs: 10,
                  },
                }}
                style={{ color: "white", fontFamily: "Iranian_Sans" }}
              >
                خروج
              </Typography>{" "}
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        dir="rtl"
        classes={{
          paper: classes.drawerPaper,
        }}
        PaperProps={{ elevation: 9 }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "#3522B3",
            color: "#f5f5f5",
          },
        }}
        anchor="right"
        open={open}
      >
        <DrawerHeader dir="ltr">
          <Divider />
          <IconButton size="large" onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon dir="rtl" />
            ) : (
              <BsChevronDoubleRight
                style={{ color: "white" }}
                className="global-class-name"
              />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Typography
          sx={{
            fontSize: {
              lg: 15,
              md: 15,
              sm: 15,
              xs: 15,
            },
          }}
          className={classes.typography2}
          style={{
            fontFamily: "Iranian_Sans",
            textAlign: "center",
            color: "#f5f5f5",
          }}
        >
          {email}
          &nbsp; خوش آمدید
        </Typography>
        <Divider />
        <List style={{ textDecoration: "none" }} className={classes.list}>
          {SidebarData.map((item, index) => {
            return (
              <ListItem button key={index}>
                <Link
                  style={{ textDecoration: "none" }}
                  className={classes.listitem}
                  to={item.path}
                >
                  <ListItemText className={classes.ListItems}>
                    <Typography
                      onClick={handleDrawerClose}
                      style={{ color: "#f5f5f5", fontFamily: "Iranian_Sans" }}
                    >
                      {" "}
                      {item.icon} {item.title}{" "}
                    </Typography>
                  </ListItemText>
                </Link>
              </ListItem>
            );
          })}
          {currentUser ? (
            <Button onClick={handleLogOut} style={{ paddingRight: "16px" }}>
              {" "}
              <Typography
                onClick={handleDrawerClose}
                style={{ color: "white", fontFamily: "Iranian_Sans" }}
              >
                <FiIcons.FiLogOut style={{ color: "white" }} /> خروج
              </Typography>{" "}
            </Button>
          ) : null}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
