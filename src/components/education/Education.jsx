import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import "./education.css";

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

function Education() {
  return (
    <div className="education">
      <h3 className="header">Education</h3>
      <Box className="box">
        <Grid container spacing={4}>
          <Grid item xs={12} md={12} sm={12}>
            <Item>
              <div className="education-content">
                <div className="text-education">
                  <h4 className='institute'>Indian Institute of Technology, Roorkee</h4>
                  <p className="institute-paras">B. Tech. in Computer Science and Engineering</p>
                </div>
                <div className="institute-spans" style={{ fontSize: "1em" }}>
                  <span>CGPA: 9.47</span>
                  <span>2020 - Present</span>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} md={12} sm={12}>
            <Item>
              <div className="education-content">
                <div className="text-education">
                  <h4 className='institute'>Sri Guru Harkrishan Model School, Chandigarh</h4>
                  <p className="institute-paras">Higher Secondary Education, CBSE</p>
                </div>
                <div className="institute-spans" style={{ fontSize: "1em" }}>
                  <span>Percentage: 98.6</span>
                  <span>2018 - 2020</span>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} md={12} sm={12} className='last'>
            <Item>
              <div className="education-content">
                <div className="text-education">
                  <h4 className='institute'>Delhi Public School, Chandigarh</h4>
                  <p className="institute-paras">Secondary Education, CBSE</p>
                </div>
                <div className="institute-spans" style={{ fontSize: "1em" }}>
                  <span>Percentage: 98</span>
                  <span>2007 - 2018</span>
                </div>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Education;
