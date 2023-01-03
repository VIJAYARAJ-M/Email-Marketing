
import React  from "react"
import { useEffect, useState } from "react";
import classnames from "classnames";
import Chart from "chart.js";
import {FcPicture} from "react-icons/fc"
import "./Card.css";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  CardTitle,
  CardText,
} from "reactstrap";

import Header from "components/Headers/Header.js";
import { NavDropdown, Tab, Tabs } from "react-bootstrap";

import "./inter.css";
import 'bootstrap-daterangepicker/daterangepicker.css';
import FeaturedInfo from "Funnel/funnel";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import { ProgressCircular, ProgressLinear } from "ui-neumorphism";
import 'ui-neumorphism/dist/index.css'
import {BsFillPersonFill,BsStack,BsPersonLinesFill} from "react-icons/bs"
import ReactApexChart from "react-apexcharts";
//import 'react-date-range/dist/styles.css'; // main style file
//import 'react-date-range/dist/theme/default.css'; // theme css file
import Select from "react-select"
import Home from "../views/examples/Home"
import Dashboard from "./examples/Dashboard";


import Broadcast from "./examples/Broadcast";
import Bouncing from "./examples/Bouncing";
import CampaignReport from "./examples/Campaign Report";
import Report from "./examples/Report";
import Report1 from "./examples/report1";
import Call from "./examples/Call Campaign";
import Pipline from "./examples/Pipeline";
import Social from "./examples/Social";
import Email from "./examples/Email";
import Model1 from "./examples/Model1";
import Model2 from "./examples/Model2";
import Model3 from "./examples/Model3";

//import DateRangePicker from "../DatePicker/DateRange"


const Index = (props) => {
  
 
  
  
  


  // useEffect(()=>{
  //   fetch('http://127.0.0.1:8000/data',{
  //     method:"GET",
  //   })
  //   .then(Res=>Res.json())
  //   .then(response=>{
      
  //     const obj2 = JSON.stringify(response)
  //     const output2 = JSON.parse(obj2)
  //     var bgColors = ['#19335A', '#19335A', '#19335A', '#19335A', '#19335A']
  //     //  var bgColors = [
  //     //   'linear-gradient(to right, #44BD95 0%, #C7E08E 100%)',
  //     //    'linear-gradient(to right, #21507B 0%, #88AFDD 100%)',
  //     //    'linear-gradient(to right, #44BD95 0%, #C7E08E 100%)',
  //     //    'linear-gradient(to right, #21507B 0%, #88AFDD 100%)',
  //     //    'linear-gradient(to right, #44BD95 0%, #C7E08E 100%)'
  //     //  ]
  //      output2.forEach((item, idx)=>{
  //       item.bg = bgColors[idx]
  //     //   item.ic = '<FaBeer/>'
  //      })

  //     console.log(output2)
  //     setdata2(output2)
      
      
  //   });
   
  // },[])

  return (
    <>
        
        
       {/* <Header />   */}
    
      {/* Page content */}
      
      <Container className="pb-8 pt-5 pt-md-8" fluid style={{backgroundColor:"#19335A"}}>

        
        <Tabs defaultActiveKey="email" className="mt--4">
          <Tab eventKey="home" title="Home">
           <Home/>
          </Tab>
          {/* <Tab eventKey="pipeline" title="Marketing">
           <Dashboard/>
          </Tab>
          <Tab eventKey="broadcast" title="Broadcast">
           <Broadcast/>
          </Tab>
          <Tab eventKey="bouncing" title="Bouncing Email">
           <Bouncing/>
          </Tab>
          <Tab eventKey="report" title="Campaign Report">
           <CampaignReport/>
          </Tab>
          <Tab eventKey="report1" title="Report">
           <Report/>
          </Tab> */}
          <Tab eventKey="email" title="Email Campaign">
           <Report1/>
          </Tab>
          <Tab eventKey="call" title="Call Campaign">
           <Call/>
          </Tab>
          <Tab eventKey="pipeline" title="Pipeline">
           <Pipline/>
          </Tab>
          <Tab eventKey="social" title="Social Media Campaign">
          <Social/>
          </Tab>
          <Tab eventKey="email1" title="Email">
          <Email/>
          </Tab>
          <Tab eventKey="model1" title="Report1">
          <Model1/>
          </Tab>
          <Tab eventKey="model2" title="Report2">
          <Model2/>
          </Tab>
          <Tab eventKey="model3" title="Report3">
          <Model3/>
          </Tab>


          
        </Tabs>

       
        
      
      </Container>
      
    </>
  );
};

export default Index;
