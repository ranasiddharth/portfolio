import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Dialog } from "@mui/material";
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import Home from "../../../images/Gotasks/Home.png"
import Members from "../../../images/Gotasks/Members.png"
import Projects from "../../../images/Gotasks/Projects.png"
import Projectdetails from "../../../images/Gotasks/Projectdetails.png"
import AddProject from "../../../images/Gotasks/AddProject.png"
import Delete from "../../../images/Gotasks/Delete.png"
import Lists from "../../../images/Gotasks/Lists.png"
import Listdetails from "../../../images/Gotasks/Listdetails.png"
import AddList from "../../../images/Gotasks/AddList.png"
import AddCard from "../../../images/Gotasks/AddCard.png"
import Chat from "../../../images/Gotasks/Chat.png"

const images = [
  {
    img: Home,
    title: "Home",
  },
  {
    img: Members,
    title: "Members",
  },
  {
    img: Projects,
    title: "Projects",
  },
  {
    img: Projectdetails,
    title: "Project details",
  },
  {
    img: AddProject,
    title: "Add Project",
  },
  {
    img: Delete,
    title: "Delete",
  },
  {
    img: Lists,
    title: "Lists",
  },
  {
    img: Listdetails,
    title: "List details",
  },
  {
    img: AddList,
    title: "Add List",
  },
  {
    img: AddCard,
    title: "Add Card",
  },
  {
    img: Chat,
    title: "Comments",
  },
];

const useStyles = makeStyles((theme) => ({
  backDrop: {
    backdropFilter: "blur(3px)",
    backgroundColor: "rgba(0,0,30,0.4)",
  },
}));

export default function Proj1(props) {
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
