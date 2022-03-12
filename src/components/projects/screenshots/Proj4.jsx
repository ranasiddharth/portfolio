import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Dialog } from "@mui/material";
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import SignUp from "../../../images/Foodie/Sign Up.jpg"
import SignIn from "../../../images/Foodie/Sign In.jpg"
import Home from "../../../images/Foodie/Home.jpg"
import Options from "../../../images/Foodie/Options.jpg"
import Profile from "../../../images/Foodie/Profile.jpg"
import Details from "../../../images/Foodie/Recipe details.jpg"
import Recipe from "../../../images/Foodie/Recipe.jpg"
import Search from "../../../images/Foodie/Search.jpg"
import Contributors from "../../../images/Foodie/Contributors.jpg"

const images = [
  {
    img: SignUp,
    title: "Sign up",
  },
  {
    img: SignIn,
    title: "Sign in",
  },
  {
    img: Home,
    title: "Home",
  },
  {
    img: Options,
    title: "Options",
  },
  {
    img: Profile,
    title: "Profile",
  },
  {
    img: Recipe,
    title: "Recipe",
  },
  {
    img: Details,
    title: "Recipe details",
  },
  {
    img: Search,
    title: "Search",
  },
  {
    img: Contributors,
    title: "Contributors",
  },
];

const useStyles = makeStyles((theme) => ({
  backDrop: {
    backdropFilter: "blur(3px)",
    backgroundColor: "rgba(0,0,30,0.4)",
  },
}));

export default function Proj4(props) {
  const classes = useStyles();

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      BackdropProps={{
        classes: {
          root: classes.backDrop,
        },
      }}
    >
      <ImageList
        sx={{ width: 500, height: 500 }}
        cols={2}
        rowHeight={250}
        style={{ backgroundColor: "#212529", marginBottom: "0" }}
      >
        {images.map((item) => (
          <ImageListItem key={item.img} >
            <img
              src={`${item.img}?w=250&h=250&fit=cover&auto=format`}
              srcSet={`${item.img}?w=250&h=250&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Dialog>
  );
}
