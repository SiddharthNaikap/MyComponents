import React, { Component } from "react";
import {CanvasJSChart} from 'canvasjs-react-charts'
//INSTALL - npm install canvasjs
import {Card,CardTitle,CardText,CardColumns} from 'reactstrap'
const dataPoints =[];



export default class PhysicianAppointmentHistory extends React.Component {

    constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}
	toggleDataSeries(e) {
		if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}
	render() {
		const options = {
            exportEnabled: true,
			animationEnabled: true,
			animationDuration:3000,
			colorSet:"colorSet2",
			theme: "light1",
			height:600,
			zoomEnabled: true,
			dataPointMaxWidth: 30,
			title:{
				//text: "Patient Appoinment History",
				fontSize: 18,
			},
			axisX: {
				valueFormatString: "####",
				labelFontSize: 18,
			},
			axisY: {
				prefix: "",
				labelFontSize: 18,
				title: "Appointment Count",
				titleFontSize:23,
			},
			toolTip: {
				shared: true
			},
			legend:{
				cursor: "pointer",
				itemclick: this.toggleDataSeries
			},
			data: [
				
			{
				type: "bar",
				name: "Total",
				showInLegend: "true",
				xValueFormatString: "####",
				yValueFormatString: "#,##0",
				dataPoints: [
					{ x: 2015, y: 210 },
					{ x: 2016, y: 200 },
					{ x: 2017, y: 220 },
					{ x: 2018, y: 160 },
					{ x: 2019, y: 160 },
					{ x: 2020, y: 210 },
					{ x: 2021, y: 190 },
				]
			},
				
				
			{
				//stackedColumn
				type: "bar",
				name: "Attended",
				showInLegend: "true",
				xValueFormatString: "####",
				yValueFormatString: "#,##0",
				dataPoints: [
					{ x: 2015, y: 200 },
					{ x: 2016, y: 150 },
					{ x: 2017, y: 210 },
					{ x: 2018, y: 110 },
					{ x: 2019, y: 100 },
					{ x: 2020, y: 180 },
					{ x: 2021, y: 180 },
					// { x: new Date(2018, 8), y: 15 },
					// { x: new Date(2018, 9), y: 22 },
					// { x: new Date(2018, 10), y: 20 },
					// { x: new Date(2018, 11), y: 19 },
					// { x: new Date(2018, 12), y: 18 },
				]
			},
			{
				type: "bar",
				name: "Cancelled",
				showInLegend: "true",
				xValueFormatString: "####",
				yValueFormatString: "#,##0",
				dataPoints: [
					{ x: 2015, y: 10 },
					{ x: 2016, y: 50 },
					{ x: 2017, y: 10 },
					{ x: 2018, y: 50 },
					{ x: 2019, y: 60 },
					{ x: 2020, y: 30 },
					{ x: 2021, y: 10 },
					// { x: new Date(2015), y: 0 },
					// { x: new Date(2015), y: 2 },
					// { x: new Date(2015), y: 3 },
					// { x: new Date(2015), y: 2 },
					// { x: new Date(2015), y: 4 },
				]
			}
		
        ]
		}
		return (
		<div>
			<CardColumns
			 body
			 inverse
			 style={{
				 backgroundColor: '#eef1f1',
				 borderColor: '#333',
				 width:"80%",
				 margin:"auto",
			   }}>
			<Card
			body
			inverse
			style={{
			backgroundColor: '#04c0c1',
			borderColor: '#333',
			textAlign: 'center'        
			}}
			>
			<CardTitle tag="h1" style={{ textAlign: 'center'}}>
			Patient Appoinment History
			</CardTitle>
			</Card>
			<Card style={{backgroundColor: '#eef1f1',borderColor: '#333',margin:"auto"}}>
			<CanvasJSChart options = {options}
				onRef={ref => this.chart = ref}
			/>
			</Card>
			</CardColumns>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}

}
