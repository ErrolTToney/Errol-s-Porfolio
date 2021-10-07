import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import Card from "@material-ui/core/card";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "center",
    background: "linear-gradient(120deg, #6a1b9a, #FE6B8B)",
  },

  blue: {
    color: "blue",
  },
  sentence: {
    color: "white",
  },
}));

function AboutMe() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider>
        <Card>
          
            <CardContent className={classes.root}>
              <Avatar className={classes.blue}></Avatar>
              <ListItemText>
                <Typography gutterBottom variant="h5">
                  <h3>AboutMe:</h3>
                    I'm self-driven, so i go for what I want, I love to learn new skills and trades,
                    before i came to kenzie academy I previously was learning the plumbing business for 4yrs.
                    when covid first kicked off, I was laid-off, and as i went through the job searching phase,
                    I seen an ad about becoming a software dev, and that anyone could do it.
                    As a child I loved to be on the newwest tech, so when i seen that ad to become a software dev,
                    I signed right away.
                    It has Been year now, of learning javascript and i've had hard times getting through my bootcamp,
                    but Ive Developed skills i never thought i could do and i want to enhance my skills to the next level.
                    -SOFTWARE DEVELOPERS ARE THE FUTURE!-  
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <h3>Career Goals:</h3>
                  -As a newly Software Dev, I plan to keep busy, stay
                  Productive, And Practice creating content and pages, in order
                  to hone my skills as a Dev.
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography variant="h7">
                  <h3>Skills that I currently know:</h3>
                  JavaScript HTML/CSS Attention to Detail Customer Service
                  Innovative People Skills Self-taught learner Problem-solver
                  Git MySQL Trouble-shooting Debugging Agile TypeScript APIs SQL
                  Non-SQL jQuery Node.js React Rest MongoDB Data Structures
                </Typography>
              </ListItemText>
              <Typography variant="h8">
                -Become an expert SoftWare Dev.
              </Typography>
            </CardContent>
       
        </Card>
      </ThemeProvider>
    </div>
  );
}

export default AboutMe;
