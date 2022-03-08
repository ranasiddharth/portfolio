import React from "react";
import { styled } from "@mui/material/styles";
import IMG from "../../images/imglogo.png";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import "./achievements.css";

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

function Achievements() {
  return (
    <>
      <div className="achievements">
        <h3 className="header">Achievements</h3>
        <Box className="box">
          <Grid container spacing={4}>
            <Grid item xs={12} md={12} sm={12}>
              <Item>
                <div className="achievements-content">
                  <div className="num" style={{fontSize: "3em"}}>
                    1
                  </div>
                  <div className="text-achieve">
                    Secured All India Rank 372 in JEE Advanced 2020 organized by IIT Delhi.
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} md={12} sm={12}>
              <Item>
                <div className="achievements-content">
                  <div className="num" style={{fontSize: "3em"}}>
                    2
                  </div>
                  <div className="text-achieve">
                    Cleared stage 2 and secured state rank 3 in stage 1 in National Talent Search Organisation, held by the Government of India.
                  </div>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div className="achievements">
        <h3 className="header">Work Experience</h3>
        <Box className="box">
          <Grid container spacing={4}>
            <Grid item xs={12} md={12} sm={12} className='last'>
              <Item>
                <div className="achievements-content">
                  <img
                    src={IMG}
                    alt=""
                    className="img-achieve"
                  />
                  <div className="text-achieve">
                    I Work as a project associate at Information Management Group, IITR, handling the various applications used by the students and faculty of IITR.
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

export default Achievements;
