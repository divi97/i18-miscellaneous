import React from 'react'
import { Line, Bar, Doughnut } from 'react-chartjs-2'
// .canvas-container {
    // use this class in media query to make chart component responsive
// }

function Chart() {

    // let progress={}

    const dataLine = {
        labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May'
        ],
        datasets: [{
            label: 'Sales for 2020 (M)',
            data: [3, 2, 2, 1, 5],
            borderColor: '#e74c3c',
            backgroundColor: '#ff7979',
            pointBackgroundColor: '#d35400',
            pointBorderColor: '#c0392b',
        },
        {
            label: 'Sales for 2019 (M)',
            data: [1,3,2,2,3],
            borderColor: '#3498db',
            backgroundColor: '#7ed6df',
            pointBackgroundColor: '#22a6b3',
            pointBorderColor: '#2980b9'
        }
    ]

    }

    const optionsLine = {
        // instances: {
        //     responsive: true,
        //     maintainAspectRatio:true,
        // },
        responsive: true,
            maintainAspectRatio:true,
        title: {
            display: true,
            text: 'Line Chart',
            fontColor: "#000"
        },
        scales: {
            yAxes: [
                {
                    gridLines: {
                        offset:true,
                        offsetGridLines: true,
                        display: true ,
                        color: "#000",
                        zeroLineColor: "red"
                    },
                    ticks: {
                        fontColor: "#000",
                        fontSize: 12,
                        min: 0,
                        max: 6,
                        stepSizep: 1
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Sales value',
                        fontColor:'#000000',
                        fontSize:12
                    }
                }
            ],
            xAxes: [{
                gridLines: {
                    offset:true,
                    offsetGridLines: true,
                    display: true,
                    color: "#000",
                    zeroLineColor: "red"
                },
                ticks: {
                    fontColor:"#000"
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Months',
                    fontColor:'#000000',
                    fontSize:12
                }}
            ]
        },
        legend: {
            position: "top",
            align: "center",
            fontColor:"#000"
        },
        // tooltip: {

        // }
    }

    const dataDoughnut = {
        labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May'
        ],
        datasets: [{
            label: 'Sales for 2020 (M)',
            data: [3, 2, 2, 1, 5],
            backgroundColor: ['#2ecc71' ,'#ff7979', '#f1c40f','#e67e22', '#9b59b6']
        }]

    }

    const optionsDoughnut = {
        title: {
            display: true,
            text: 'Doughnut Chart',
        },
        elements: {
            arc: {
              borderWidth: 0
            }
        },
        cutoutPercentage: 35,
        
        // Animation percentage //

        // animation: {
        //     onProgress: function(animation) {
        //         progress.value = animation.animationObject.currentStep / animation.animationObject.numSteps;
        //         console.log(progress)
        //     }
        // }
    }
    
    return (<>
        <div>
            <Line data={dataLine} options={optionsLine} />
        </div>
        <div>
            <Bar data={dataLine} options={optionsLine} />
        </div>
        <div>
            <Doughnut data={dataDoughnut} options={optionsDoughnut} />
        </div>
        </>
    )
}

export default Chart
