import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import "./projects.css";
import Proj1 from "./screenshots/Proj1";
import Proj2 from "./screenshots/Proj2";
import Proj3 from "./screenshots/Proj3";
import Proj4 from "./screenshots/Proj4";
import LinksMenu from "./linksmenu/LinksMenu";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#212529",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: "#10DDE3",
  fontSize: "1rem",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.04)",
    boxShadow: "0px 2px 1px -1px #10DDE3",
    textShadow: "0 0 5px #10DDE3",
  },
}));

function Projects() {
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };

  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const [open3, setOpen3] = useState(false);
  const handleOpen3 = () => {
    setOpen3(true);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };

  const [open4, setOpen4] = useState(false);
  const handleOpen4 = () => {
    setOpen4(true);
  };
  const handleClose4 = () => {
    setOpen4(false);
  };

  return (
    <>
      <div className="projects">
        <h3 className="header">Projects</h3>
        <Box className="box">
          <Grid container spacing={4}>
            <Grid item xs={12} md={12} sm={12}>
              <Item>
                <div className="projects-content">
                  <div className="heading">
                    GoTasks
                  </div>
                  <div className="text-project">
                    <p>
                      Project Management Tool to allow contributors to
                      collaborate on a project and manage its working details.
                    </p>
                    <div className="btns">
                      <Button
                        sx={{
                          "&.MuiButton-root": {
                            backgroundColor: "black",
                            color: "#10DDE3",
                          },
                        }}
                        variant="contained"
                        href="https://github.com/ranasiddharth/TaskHandler"
                        target="_blank"
                      >
                        Github Link
                      </Button>
                      <Button
                        sx={{
                          "&.MuiButton-root": {
                            backgroundColor: "black",
                            color: "#10DDE3",
                          },
                        }}
                        variant="contained"
                        onClick={handleOpen1}
                      >
                        View Images
                      </Button>
                      <Proj1 open={open1} handleClose={handleClose1} />
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} md={12} sm={12}>
              <Item>
                <div className="projects-content">
                  <div className="heading" s>
                    Rstore
                  </div>
                  <div className="text-project">
                    <p>
                      Marketplace for the students of IIT Roorkee to showcase
                      their apps and receive feedbacks, become a part of
                      organisations and much more.
                    </p>
                    <div className="btns">
                      <LinksMenu />
                      <Button
                        sx={{
                          "&.MuiButton-root": {
                            backgroundColor: "black",
                            color: "#10DDE3",
                          },
                        }}
                        variant="contained"
                        onClick={handleOpen2}
                      >
                        View Images
                      </Button>
                      <Proj2 open={open2} handleClose={handleClose2} />
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} md={12} sm={12}>
              <Item>
                <div className="projects-content">
                  <div className="heading" s>
                    Arm
                  </div>
                  <div className="text-project">
                    <p>
                      A 32-bit ARM processor able to execute basisc load/store
                      and arithmetic instructions
                    </p>
                    <div className="btns">
                      <Button
                        sx={{
                          "&.MuiButton-root": {
                            backgroundColor: "black",
                            color: "#10DDE3",
                          },
                        }}
                        variant="contained"
                        href="https://github.com/ranasiddharth/32-bit-ARM-Processor"
                        target="_blank"
                      >
                        Github Link
                      </Button>
                      <Button
                        sx={{
                          "&.MuiButton-root": {
                            backgroundColor: "black",
                            color: "#10DDE3",
                          },
                        }}
                        variant="contained"
                        onClick={handleOpen3}
                      >
                        View Images
                      </Button>
                      <Proj3 open={open3} handleClose={handleClose3} />
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} md={12} sm={12} className="last">
              <Item>
                <div className="projects-content">
                  <div className="heading" s>
                    Foodie
                  </div>
                  <div className="text-project">
                    <p>
                      Food based app to search for recipes based on ingredients
                      using ReactJS and Firebase.
                    </p>
                    <div className="btns">
                      <Button
                        sx={{
                          "&.MuiButton-root": {
                            backgroundColor: "black",
                            color: "#10DDE3",
                          },
                        }}
                        variant="contained"
                        href="https://github.com/ranasiddharth/Foodie"
                        target="_blank"
                      >
                        Github Link
                      </Button>
                      <Button
                        sx={{
                          "&.MuiButton-root": {
                            backgroundColor: "black",
                            color: "#10DDE3",
                          },
                        }}
                        variant="contained"
                        onClick={handleOpen4}
                      >
                        View Images
                      </Button>
                      <Proj4 open={open4} handleClose={handleClose4} />
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default Projects;
