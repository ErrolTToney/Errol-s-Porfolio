import React from 'react';
import { ThemeProvider} from '@material-ui/core/styles'

import Card from '@material-ui/core/card';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'center',
        backgroundColor: 'linear-gradient(120deg, #6a1b9a, #)',

    },

    blue: {
        color: 'blue',
    }
}))



function AboutMe() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <ThemeProvider >
        <Card className={classes.root}>
            <CardContent>
                <Avatar className={classes.blue}></Avatar>
            <h2>Career Goals:</h2>
                    <ListItemText >
                        <Typography variant='h8'>
                         -As a newly Software Dev, I'm continuing to increase my knowledge and skills with the  javascript language and also some other languages as well.
                        </Typography>
                       
                    </ListItemText>
                    <ListItemText >
                        <Typography variant='h7'>
                        -Learn a more new languages of code.
                        </Typography>
                    </ListItemText>
                    <Typography variant='h8'>
                        -Become an expert SoftWare Dev.
                    </Typography>
            </CardContent>
        </Card>
        </ThemeProvider>
        </div>
    )
}

export default AboutMe
