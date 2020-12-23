import React from 'react';
import './side-icon-bar.scss';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import RecordVoiceOverRoundedIcon from '@material-ui/icons/RecordVoiceOverRounded';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import Grid from '@material-ui/core/Grid';

function SideIconBar(props) {
    const iconsStyle = {
        color: '#5A626F',
        marginTop: '40px',
    }

    const sideIconBarStyle = {
        backgroundColor: '#202531',
        width: '50px',
        position: 'fixed',
        height: '2000px'
    }
    return (
        <Grid style={sideIconBarStyle}
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
        >
            <HomeRoundedIcon style={iconsStyle}/>
            <BarChartRoundedIcon style={iconsStyle}/>
            <SchoolRoundedIcon style={iconsStyle}/>
            <RecordVoiceOverRoundedIcon style={iconsStyle}/>
            <CategoryRoundedIcon style={iconsStyle}/>
        </Grid>
    );
}

export default SideIconBar;