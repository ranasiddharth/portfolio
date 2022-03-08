import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import "./skills.css";

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

function Skills() {
  return (
    <div className="skills">
      <h3 className="header">Skills</h3>
      <Box className="box">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} sm={6}>
            <Item>
              <div className="skill-content">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/64px-ISO_C%2B%2B_Logo.svg.png"
                  alt=""
                  className="img"
                />
                <span className="text">C++</span>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <Item>
              <div className="skill-content">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/64px-React-icon.svg.png"
                  alt=""
                  className="img"
                />
                <span className="text">ReactJS</span>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <Item>
              <div className="skill-content">
                <img
                  src="https://img.icons8.com/color/344/redux.png"
                  alt=""
                  className="img"
                />
                <span className="text">Redux</span>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <Item>
              <div className="skill-content">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/64px-Unofficial_JavaScript_logo_2.svg.png"
                  alt=""
                  className="img"
                />
                <span className="text">Javascript</span>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <Item>
              <div className="skill-content">
                <img
                  src="https://img.icons8.com/color/344/html-5--v1.png"
                  alt=""
                  className="img"
                />
                <span className="text">HTML</span>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <Item>
              <div className="skill-content">
                <img
                  src="https://img.icons8.com/color/344/css3.png"
                  alt=""
                  className="img"
                />
                <span className="text">CSS</span>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <Item>
              <div className="skill-content">
                <img
                  src="https://img.icons8.com/color/452/material-ui.png"
                  alt=""
                  className="img"
                />
                <span className="text">Material-UI</span>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <Item>
              <div className="skill-content">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/64px-Python-logo-notext.svg.png"
                  alt=""
                  className="img"
                />
                <span className="text">Python</span>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} md={4} sm={6} className="last">
            <Item>
              <div className="skill-content">
                <img
                  src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/344/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-filled-tal-revivo.png"
                  alt=""
                  className="img"
                />
                <span className="text">Django</span>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Skills;
