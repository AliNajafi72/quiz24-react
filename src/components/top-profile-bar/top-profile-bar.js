import React from 'react';
import './top-profile-bar.scss'
import {Grid} from "@material-ui/core";
import ProfileImage from './img/profile.jpg';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';

function TopProfileBar(props) {
    const topProfileIconStyle = {
        color: "#A5ACAF",
        paddingLeft: "20px",
        width: "20px",
    }
    return (
        <Grid
            className="top-profile-bar-main-container"
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
        >
            <AppsRoundedIcon style={topProfileIconStyle} />
            <NotificationsRoundedIcon style={topProfileIconStyle} />
            <img src={ProfileImage} className={"top-profile-bar-profile"} alt={"profile-image"}/>
        </Grid>
    );
}

export default TopProfileBar;