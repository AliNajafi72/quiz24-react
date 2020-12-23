import React from "react";
import './metric-chart-component.scss';
import {Line} from 'react-chartjs-2' ;
import {Grid} from "@material-ui/core";

function MetricChart(params) {
    const data = {
        labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
        datasets: [
            {
                label: false,
                data: [12, 19, 8, 5, 8, 10],
                fill: false,
                backgroundColor: '#61D473',
                borderColor: '#61D473',
            },
        ],
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        display: false,
                    },
                    gridLines: {
                        display: false,
                    },
                },
            ],
            xAxes: [
                {
                    ticks: {
                        display: true,
                        fontFamily: 'iransans-medium',
                        fontColor: '#61D473',
                    },
                    gridLines: {
                        display: false,
                    },
                },
            ],
        },
        legend: {
            display: false,
        },
    }

    return (
        <Grid
            className="metric-chart-main-container"
            container
            direction="row"
            justify="flex-end"
            alignItems="flex-end"
            item
            xs={12}>
            <Grid item xs={4} className="metric-chart-inner-container">
                <Line options={options} data={data}/>
            </Grid>
        </Grid>
    );
}

export default MetricChart;