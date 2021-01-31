import React from 'react';

import USERS_DATA from '../../util/userData';


import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        // padding: theme.spacing(1, 2),
    },
    card: {
        maxWidth: 345,

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    content: {
        flexGrow: 1,
        width: '70vw',

    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function Profile() {
    const classes = useStyles();
    const { role, fname, lname, image, phone, accountNumber, transactions } = USERS_DATA[1];
    return (
        <div className={classes.root}>
            <main className={classes.content}>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container justify="center" spacing={3}>

                        <Grid item xs={12} sm={12} md={8} lg={9}>
                            <Card className={classes.card}>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="profile" className={classes.avatar}>
                                            {/* {fname.charAt(0).toUpperCase()} */}
                                        </Avatar>
                                    }

                                    title={`${fname} ${lname}`}
                                    // subheader={role.charAt(0).toUpperCase() + role.slice(1)}
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={image}
                                    title={`${fname}'s picture`}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Account Number: {accountNumber} <br />
                                        Phone Number: {phone}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {/* You have made a total of {transactions.length} transactions */}
                                    </Typography>
                                </CardActions>

                            </Card>
                        </Grid>



                    </Grid>
                </Container>
            </main>
        </div>
    )
}
