import React from "react"
import {Row,Col,Card} from "reactstrap"
import Total from "../../assets/img/brand/Total call.png"
import Answer from "../../assets/img/brand/Answer1.png"
import Missed from "../../assets/img/brand/Missed1.png"
import Abended from "../../assets/img/brand/Abended.png"
import Duration from "../../assets/img/brand/Duration.png"
import Routing from "../../assets/img/brand/Routing.png"
import Center from "../../assets/img/brand/center.png"
import Bound from "../../assets/img/brand/Inbound.png"
import OutBound from "../../assets/img/brand/Outbound.png"
import Handle from "../../assets/img/brand/Handle.png"
import Resolution from "../../assets/img/brand/resolution.png"
import Customer from "../../assets/img/brand/customer.png"

import ReactApexChart from "react-apexcharts"


const seriesdount= [44,  13,]

const optionsdount= {
  chart: {
    width: 380,
    type: 'pie',
  },
  title: {
    text: 'Call Status',
    align:"center",
   
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
const seriesbar= [{
  data: [400, 430, 448, 470, 540, 580, 690, 1100,]
}]
const optionsbar= {
  chart: {
    type: 'bar',
    height: 350,
    toolbar:{
      show:!1,
    }
  },
  title: {
    text: 'Total calls',
    align:"center",
   
    style:{
      color:"white",
      
    }
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    title: {
      text: 'Calls',
      style:{
        color:"white",
     },
    },
    categories: ['Paid', 'Organic', 'Direct', 'Social', 'Newsletter', 'External-Ref', 'Internal_Ref',
      'Referral', 
    ],
    labels:{
      style:{
        colors:"white",
        
      },
},
  },
  yaxis:{
    title: {
      text: 'Source',
      style:{
        color:"white",
     },
    },
    labels:{
      style:{
        colors:"white",
        
      },
},
  }
}

const seriesdount1= [44,  13,20,30,23,40,18.30]

const optionsdount1= {
  chart: {
    width: 380,
    type: 'pie',
  },
  title: {
    text: 'Call Distribution',
    align:"center",
   
    style:{
      color:"white",
      
    }
  },
  stroke: {
    width: 0
  },
  labels: ['Paid', 'Organic', 'Direct', 'Social', 'Newsletter', 'External-Ref', 'Internal_Ref',
  'Referral', ],
  colors:[ "#007bff", "#17a2b8","#00cccc",'#adb2bd','#553293','#00d390','#ca9270'],
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
export default function Call1(){
    return(
        <div>
            

           

            <Row className="mt-3">
              <Col>
              <Card className="p-2" style={{backgroundColor:"#002151"}}>
                            <Row>
                                <Col lg={7}>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h5 className="text-white">Inbound call convertion Rate(%)</h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h1 className="text-white">20%</h1>
                                    </Col>
                                </Row>
                                </Col>
                                <Col lg={5} className="d-flex justify-content-start">
                                <img src={Bound} height={50} width={50}/>
                                </Col>
                            </Row>
                        </Card>
              </Col>
              <Col>
                    <Card className="p-2" style={{backgroundColor:"#002151"}}>
                            <Row>
                                <Col lg={8}>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h5 className="text-white">Outbound call convertion Rate(%)</h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h1 className="text-white">18%</h1>
                                    </Col>
                                </Row>
                                </Col>
                                <Col lg={4} className="d-flex justify-content-start">
                                <img src={OutBound} height={40} width={40}/>
                                </Col>
                            </Row>
                        </Card>
              </Col>
              <Col>
                    <Card className="p-2" style={{backgroundColor:"#002151"}}>
                            <Row>
                                <Col lg={7}>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h5 className="text-white">Average handle time Rate(%)</h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h1 className="text-white">20%</h1>
                                    </Col>
                                </Row>
                                </Col>
                                <Col lg={5} className="d-flex justify-content-start">
                                <img src={Handle} height={50} width={50}/>
                                </Col>
                            </Row>
                        </Card>
              </Col>
              <Col>
                    <Card className="p-2" style={{backgroundColor:"#002151"}}>
                            <Row>
                                <Col lg={7}>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h5 className="text-white">First call resolution Rate(%)</h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h1 className="text-white">30%</h1>
                                    </Col>
                                </Row>
                                </Col>
                                <Col lg={5} className="d-flex justify-content-start">
                                <img src={Resolution} height={50} width={50}/>
                                </Col>
                            </Row>
                        </Card>
              </Col>
              <Col>
                    <Card className="p-2" style={{backgroundColor:"#002151"}}>
                            <Row>
                                <Col lg={7}>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h5 className="text-white">Customer satisfaction Rate(%)</h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h1 className="text-white">100%</h1>
                                    </Col>
                                </Row>
                                </Col>
                                <Col lg={5} className="d-flex justify-content-start">
                                <img src={Customer} height={50} width={50}/>
                                </Col>
                            </Row>
                        </Card>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col lg={6}>
              <Card style={{backgroundColor:"#002151"}}>
                 <ReactApexChart options={optionsbar} series={seriesbar} type="bar" height={350}/>
    
              </Card>
              </Col>
              <Col>
              <Card className="p-3" style={{backgroundColor:"#002151"}}>
                 <ReactApexChart options={optionsdount1} series={seriesdount1} type="donut"  width={430} />
              </Card>
              </Col>
            </Row>

          
        </div>
    );
}