import React from "react"
import {Row, Col, Card, Button,} from "reactstrap"
import ReactApexChart from "react-apexcharts"

import Recepient from "../../../src/assets/img/brand/Recepient.png"
import Delivery from "../../../src/assets/img/brand/Email Delivery.png"
import Open from "../../../src/assets/img/brand/Email Open.png"
import Unopen from "../../../src/assets/img/brand/Email Unopen.png"
import Click from "../../../src/assets/img/brand/Clicks.png"
import Unclick from "../../../src/assets/img/brand/Email Unclicked.png"
import Bounce from "../../../src/assets/img/brand/Bounce.png"
import Average from "../../../src/assets/img/brand/Average user.png"
import Block from "../../../src/assets/img/brand/Block.png"
import Sub from "../../../src/assets/img/brand/Unsub.png"
import Reply from "../../../src/assets/img/brand/Reply.png"

import {FcDownload} from "react-icons/fc"

const seriesbar1= [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61]
  }]
 const optionsbar1= {
    chart: {
      type: 'bar',
      height: 350,
      toolbar:{
        show:!1,
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    title:{
    text:"Click Details",
    style:{
             color:"white"
        }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
        title: {
            text: 'year',
            style:{
                color:"white",
            }
          },
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun'],
      labels:{
        style:{
          colors:"white",

        },
  },
    },
    yaxis: {
      title: {
        text: 'Clicks',
        
        style:{
            color:"white",
        }
      },
      labels:{
        style:{
          colors:"white",

        },
  },
    },
    fill: {
        type: "gradient",

        gradient: {
          shadeIntensity: 1,
          type: "vertical",
          opacityFrom: 0.7,
          opacityTo: 0.9,
          colorStops: [
            {
              offset: 0,
              color: "#6026c5",
              opacity: 1
            },

            {
              offset: 100,
              color: "#002151",
              opacity: 1
            }
          ]
        }
      },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  }
  const seriesbar2= [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61]
  }]
 const optionsbar2= {
    chart: {
      type: 'bar',
      height: 350,
      toolbar:{
        show:!1,
      }
    },
    title:{
        text:"Open Details",
        style:{
            color:"white"
        }
    },

    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun'],
      labels:{
        style:{
          colors:"white",

        },
  },
    },
    yaxis: {
      title: {
        text: 'Opens',
        style:{
            color:"white",
        }
      },
      labels:{
        style:{
          colors:"white",

        },
  },
    },
    fill: {
    type: "gradient",

    gradient: {
      shadeIntensity: 1,
      type: "vertical",
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        {
          offset: 0,
          color: "#2bc7b2",
          opacity: 1
        },

        {
          offset: 100,
          color: "#002151",
          opacity: 1
        }
      ]
    }
  },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  }

export default function Email3(){
    return(
        <div>
            <h2>Email3</h2>

            <Row>
                <Col>
                  <Card className="p-3" style={{backgroundColor:"#002151"}}>
                    <Row>
                        <Col lg={3} className="d-flex justify-content-center">
                         <Card className="" style={{backgroundColor:"#002151"}}>
                         
                          <Row>
                            <Col>
                             <h3 className="text-white">From</h3>
                            </Col>
                          </Row>

                          <Row>
                            <Col>
                             <input className="css-1s2u09g-control"  type='date'></input>
                            </Col>
                          </Row>
                          
                         </Card>
                        
                        </Col>
                        <Col lg={3} className="d-flex justify-content-center">
                         <Card className="" style={{backgroundColor:"#002151"}}>
                         
                          <Row>
                            <Col>
                             <h3 className="text-white">To</h3>
                            </Col>
                          </Row>

                          <Row>
                            <Col>
                             <input className="css-1s2u09g-control"  type='date'></input>
                            </Col>
                          </Row>
                          
                         </Card>
                        
                        </Col>
                       
                        <Col lg={6} className="d-flex justify-content-end align-items-center">
                            <Row>
                                <Col>
                                <Button>Apply</Button>
                                </Col>
                            </Row>
                          
                        </Col>
                    </Row>
                  </Card>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col>
                    <Card className="p-3" style={{backgroundColor:"#002151"}}>
                        <Row>
                            <Col lg={6}>
                            <Row>
                            <Col className="d-flex justify-content-center ">
                            <h5 className="text-white">Recipients</h5>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col className="d-flex justify-content-center ">
                            <h3 className="text-white">700</h3>
                            </Col>
                        </Row>
                            </Col>
                            <Col lg={3}>
                            <img src={Recepient}  height={40}/>
                            </Col>
                            <Col lg={3} className="d-flex justify-content-center">
                             <FcDownload />
                            </Col>
                        </Row>
                        
                    </Card>
                </Col>
                <Col>
                    <Card className="p-3" style={{backgroundColor:"#002151"}}>
                        <Row>
                            <Col lg={6}>
                            <Row>
                            <Col className="d-flex justify-content-center ">
                            <h5 className="text-white">Replies</h5>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col className="d-flex justify-content-center ">
                            <h3 className="text-white">17</h3>
                            </Col>
                        </Row>
                            </Col>
                            <Col lg={3}>
                            <img src={Reply} height={40}/>
                            </Col>
                            <Col lg={3} className="d-flex justify-content-center">
                             <FcDownload />
                            </Col>
                        </Row>
                        
                    </Card>
                </Col>
                <Col>
                    <Card className="p-3" style={{backgroundColor:"#002151"}}>
                        <Row>
                            <Col lg={6}>
                            <Row>
                            <Col className="d-flex justify-content-center ">
                            <h5 className="text-white">Open Rate</h5>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col className="d-flex justify-content-center ">
                            <h3 className="text-white">299(39.7%)</h3>
                            </Col>
                        </Row>
                            </Col>
                            <Col lg={3}>
                            <img src={Open} height={40}/>
                            </Col>
                            <Col lg={3} className="d-flex justify-content-center">
                             <FcDownload />
                            </Col>
                        </Row>
                        
                    </Card>
                </Col>
                <Col>
                    <Card className="p-3" style={{backgroundColor:"#002151"}}>
                        <Row>
                            <Col lg={6}>
                            <Row>
                            <Col className="d-flex justify-content-center ">
                            <h5 className="text-white">Click Rate</h5>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col className="d-flex justify-content-center ">
                            <h3 className="text-white">16(1.8%)</h3>
                            </Col>
                        </Row>
                            </Col>
                            <Col lg={3}>
                            <img src={Click} height={40}/>
                            </Col>
                            <Col lg={3} className="d-flex justify-content-center">
                             <FcDownload color='#e0e0e0'/>
                            </Col>
                        </Row>
                        
                    </Card>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col lg={3}>
                    <Row>
                    <Col>
                    <Card className="p-3" style={{backgroundColor:"#002151"}}>
                        <Row>
                            <Col lg={6}>
                            <Row>
                            <Col className="d-flex justify-content-center ">
                            <h5 className="text-white">Bounce</h5>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col className="d-flex justify-content-center ">
                            <h3 className="text-white">119(10.1%)</h3>
                            </Col>
                        </Row>
                            </Col>
                            <Col lg={3}>
                            <img src={Bounce} height={40}/>
                            </Col>
                            <Col lg={3} className="d-flex justify-content-center">
                             <FcDownload />
                            </Col>
                        </Row>
                        
                    </Card>
                </Col>
                    </Row>
                    <Row className="mt-3">
                    <Col>
                    <Card className="p-3" style={{backgroundColor:"#002151"}}>
                        <Row>
                            <Col lg={6}>
                            <Row>
                            <Col className="d-flex justify-content-center ">
                            <h5 className="text-white">Unsubscribed</h5>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col className="d-flex justify-content-center ">
                            <h3 className="text-white">42(3.6%)</h3>
                            </Col>
                        </Row>
                            </Col>
                            <Col lg={3} >
                            <img src={Sub} height={40} />
                            </Col>
                            <Col lg={3} className="d-flex justify-content-center">
                             <FcDownload />
                            </Col>
                        </Row>
                        
                    </Card>
                </Col>
                    </Row>
                    <Row className="mt-3">
                    <Col>
                    <Card className="p-3" style={{backgroundColor:"#002151"}}>
                        <Row>
                            <Col lg={6}>
                            <Row>
                            <Col className="d-flex justify-content-center ">
                            <h5 className="text-white">Block</h5>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col className="d-flex justify-content-center ">
                            <h3 className="text-white">70(10%)</h3>
                            </Col>
                        </Row>
                            </Col>
                            <Col lg={3}>
                            <img src={Block} height={40}/>
                            </Col>
                            <Col lg={3} className="d-flex justify-content-center">
                             <FcDownload />
                            </Col>
                        </Row>
                        
                    </Card>
                </Col>
                    </Row>
                </Col>
                <Col lg={4}>
                <Card className="p-3" style={{backgroundColor:"#002151"}}>
                <ReactApexChart options={optionsbar1} series={seriesbar1} type="bar" height={290} />

    
                </Card>
                </Col>
                <Col lg={5}>
                <Card className="p-3" style={{backgroundColor:"#002151"}}>
                <ReactApexChart options={optionsbar2} series={seriesbar2} type="bar" height={290} />

    
                </Card>
                </Col>
            </Row>
        </div>
    );
}