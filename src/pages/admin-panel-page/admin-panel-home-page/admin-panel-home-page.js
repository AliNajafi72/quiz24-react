import React from 'react';
import './admin-panel-home-page.scss';
import SideIconBar from "../../../components/side-icon-bar-component/side-icon-bar-component";
import Grid from "@material-ui/core/Grid";
import TopProfileBarComponent from "../../../components/top-profile-bar-component/top-profile-bar-component";
import MetricChart from "../../../components/metric-chart-component/mertic-chart-component";

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
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                    className="main-container"
                >
                    <TopProfileBarComponent/>
                    <MetricChart />
                </Grid>
            </div>
        );
    }
}

export default AdminPanelHomePage;
