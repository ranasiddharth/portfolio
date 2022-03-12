import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Dialog } from "@mui/material";
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import Home from "../../../images/Rstore/Home.png"
import AddApp from "../../../images/Rstore/Add App.png"
import Organisations from "../../../images/Rstore/Organisations.png"
import Profile from "../../../images/Rstore/Profile.png"
import CreateOrg from "../../../images/Rstore/CreateOrg.png"
import Review from "../../../images/Rstore/Review.png"

const images = [
  {
    img: Home,
    title: "Home",
  },
  {
    img: AddApp,
    title: "Add App",
  },
  {
    img: Organisations,
    title: "Organisations",
  },
  {
    img: Profile,
    title: "Profile",
  },
  {
    img: CreateOrg,
    title: "CreateOrg",
  },
  {
    img: Review,
    title: "Review",
  },
];

const useStyles = makeStyles((theme) => ({
  backDrop: {
    backdropFilter: "blur(3px)",
    backgroundColor: "rgba(0,0,30,0.4)",
  },
}));

export default function Proj2(props) {
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
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
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
