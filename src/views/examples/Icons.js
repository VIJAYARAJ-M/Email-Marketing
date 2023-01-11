/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React  from "react"
import { useEffect, useState } from "react";
import classnames from "classnames";
import Chart from "chart.js";
import {FcPicture} from "react-icons/fc"
//import "./Card.css";
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

import "../../views/inter.css";
import 'bootstrap-daterangepicker/daterangepicker.css';
import FeaturedInfo from "Funnel/funnel";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import { ProgressCircular, ProgressLinear } from "ui-neumorphism";
import 'ui-neumorphism/dist/index.css'
import {BsFillPersonFill,BsStack,BsPersonLinesFill} from "react-icons/bs"
import ReactApexChart from "react-apexcharts";
//import 'react-date-range/dist/styles.css'; // main style file
//import 'react-date-range/dist/theme/default.css'; // theme css file
import Home from "./Home";
import Email1 from "./Email1";
import Email2 from "./Email2";
import Email3 from "./Email3";
import Email4 from "./Email4";
import Social from "./Social";
import Pipline from "./Pipeline";
import Social2 from "./Social Media";
import Sms1 from "./Sms1";
import Sms2 from "./Sms2";



const Ageseries4 = [{
  name: 'Age Count',
  data: [12, 8, 14, 6, 17, 7,10,5, 13, 9, 10,6]
}]
const Ageoptions = {
                chart: {
                  type: 'bar',
                  height: 350,
                  toolbar: {
                    show: !1
                  },
                },
                title: {
                  text: 'Monthly sales',
                  align: 'center',
                  style:{
                    color:"white",
                  
                    
                  },
                  
                },
                colors:['#6f42c1'],
                plotOptions: {
                  bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                  },
                },
                dataLabels: {
                  enabled: false,
                  
                },
                stroke: {
                  show: true,
                  width: 2,
                  colors: ['transparent']
                },
                xaxis: {
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nev','Dec' ],
                  labels:{
                    style:{
                      colors:"white",
                      
                    },
              },
                },
                yaxis: {
                  /*title: {
                    text: "hi",
                    align: 'left',
                    margin: 10,
                    offsetX: 0,
                    offsetY: 0,
                    floating: false,
                    style: {
                      fontSize:  '14px',
                      fontWeight:  'bold',
                      fontFamily:  undefined,
                      color:  '#fff',
                    },
                },*/
                  labels:{
                      style:{
                        colors:"white",
                        
                      },
                },
                },
                fill: {
                  opacity: 1
                },
                tooltip: {
                  y: {
                    formatter: function (val) {
                      return  val + ""
                    }
                  }
                }
              }

const Icons = () => {
  const [copiedText, setCopiedText] = useState();
  return (
    <>
      
      
  <Container className="pb-3  pt-md-8" fluid style={{backgroundColor:"#19335A"}}>
        {/* Table */}
        
          
            
        
        <Tabs defaultActiveKey="sms1" className="mt--4">
          <Tab eventKey="home" title="Home">
           <Home/>
          </Tab>

          {/* <Tab eventKey="email1" title="Email 1">
           <Email1/>
          </Tab>

          <Tab eventKey="email2" title="Email 2">
           <Email2/>
          </Tab> */} 
          <Tab eventKey="email3" title="Email Campaign">
           <Email3/>
          </Tab>
          <Tab eventKey="email4" title="Email 4">
          <Email4/>
          </Tab>
          <Tab eventKey="social" title="Social Campaign">
          <Social/>
          </Tab>
          <Tab eventKey="social2" title="Social Campaign2">
          <Social2/>
          </Tab>
          <Tab eventKey="pipeline" title="Pipeline">
          <Pipline/>
          </Tab>
          <Tab eventKey="sms1" title="SMS 1">
          <Sms1/>
          </Tab>
          <Tab eventKey="sms2" title="SMS 2">
          <Sms2/>
          </Tab>
           
           
          
          
          


          
        </Tabs>
       
      </Container>
    </>
  );
};

export default Icons;
