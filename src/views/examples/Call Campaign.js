import React from "react"
import {Row,Col,Card} from "reactstrap"
import Total from "../../assets/img/brand/Total call.png"
import Answer from "../../assets/img/brand/Answer1.png"
import Missed from "../../assets/img/brand/Missed1.png"
import Abended from "../../assets/img/brand/Abended.png"

import ReactApexChart from "react-apexcharts"


const seriesdount= [44,  13,]

const optionsdount= {
  chart: {
    width: 380,
    type: 'pie',
  },
  title: {
    text: 'Call Status',
   
    style:{
      color:"white",
      
    }
  },
  stroke: {
    width: 0
  },
  labels: ['Answered', 'Missed'],
  colors:[ "#00cccc", "#adb2bd"],
  plotOptions: {
    pie: {
      donut: {
        size: '65%'
      }
    }
  },
  legend: {
    display: true,
    position: "bottom",
    labels: {
    
    colors:"white",
    
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
}

const seriess=[{
    name: 'Total Calls',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
  }, {
    name: 'Abandoned Calls',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }]
  const optionss={
    chart: {
      height: 350,
      type: 'line',
      toolbar:{
        show:!1,
     },
    },
    stroke: {
      width: [0, 4]
    },
    title: {
      text: 'Call Categories',
      style:{
         color:"white",
      },
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1]
    },
    labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
    legend: {
      display: true,
      position: "bottom",
      labels: {
      
      colors:"white",
      
      }
    },
    xaxis: {
      type: 'datetime',
      labels:{
        style:{
          colors:"white",
          
        },
  },
    },
    
    yaxis: [{
      title: {
        text: 'Total Calls',
        style:{
          color:"white",
       },
      },
      labels:{
        style:{
          colors:"white",
          
        },
  },
    
    }, {
      opposite: true,
      title: {
        text: 'Abandoned Calls',
        style:{
          color:"white",
       },
      },
      labels:{
        style:{
          colors:"white",
          
        },
  },
    }]
  }
export default function Call(){
    return(
        <div>
            

            <Row className="mt-3">
                <Col>
                    <Card className="p-2" style={{backgroundColor:"#002151"}}>
                        <Row>
                            <Col>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h4 className="text-white">Total Calls</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h1 className="text-white">510</h1>
                                </Col>
                            </Row>
                            </Col>
                            <Col className="d-flex justify-content-center">
                             <img src={Total} height={50} width={50}/>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col>
                    <Card className="p-2" style={{backgroundColor:"#002151"}}>
                        <Row>
                            <Col lg={8}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h4 className="text-white">Answered Calls</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h1 className="text-white">400</h1>
                                </Col>
                            </Row>
                            </Col>
                            <Col lg={4} className="d-flex justify-content-center">
                             <img src={Answer} height={50} width={50}/>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col>
                    <Card className="p-2" style={{backgroundColor:"#002151"}}>
                        <Row>
                            <Col lg={8}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h4 className="text-white">Missed Calls</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h1 className="text-white">100</h1>
                                </Col>
                            </Row>
                            </Col>
                            <Col lg={4} className="d-flex justify-content-center">
                             <img src={Missed} height={50} width={50}/>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col>
                    <Card className="p-2" style={{backgroundColor:"#002151"}}>
                        <Row>
                            <Col lg={8}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h4 className="text-white"> Abandoned Calls</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h1 className="text-white">10</h1>
                                </Col>
                            </Row>
                            </Col>
                            <Col lg={4} className="d-flex justify-content-center">
                             <img src={Abended} height={50} width={50}/>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col>
                <Card className="p-3" style={{backgroundColor:"#002151"}}> 
                 <ReactApexChart options={optionsdount} series={seriesdount} type="donut"  width={380} />
                </Card>
                </Col>
                <Col>
                <Card className="p-3" style={{backgroundColor:"#002151"}}> 
                <ReactApexChart options={optionss} series={seriess} type="line" height={273} />
                </Card>
                </Col>
                
            </Row>
        </div>
    );
}