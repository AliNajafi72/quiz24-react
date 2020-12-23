import React from 'react';
import './admin-panel-home-page.scss';
import SideIconBar from "../../../components/side-icon-bar-component/side-icon-bar-component";
import Grid from "@material-ui/core/Grid";
import TopProfileBar from "../../../components/top-profile-bar/top-profile-bar";

class AdminPanelHomePage extends React.Component {
    iconBarColor;

    constructor({iconBarColor}) {
        super({iconBarColor});
        this.iconBarColor = iconBarColor;
    }

    render() {

        return (
            <div>
                <SideIconBar/>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    className="main-container"
                >
                    <Grid item xs={12}>
                        <TopProfileBar />
                    </Grid>

                </Grid>
            </div>
        );
    }
}

export default AdminPanelHomePage;
