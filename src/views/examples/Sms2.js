import React from "react"
import ReactApexChart from "react-apexcharts";
import {Row,Col,Card,CardHeader,Button} from "reactstrap"
import Response from "../../assets/img/brand/ReponseRate.png"
import Un from "../../assets/img/brand/Unsubscribed.png"
import Repeat from "../../assets/img/brand/Repeat.png"
import Enga from "../../assets/img/brand/Enga.png"
import Forward from "../../assets/img/brand/MsgForward.png"
import Open from "../../assets/img/brand/Openmsg.png"
import Revenu from "../../assets/img/brand/Revenue.png"
import Cross from "../../assets/img/brand/Cross.png"

const seriesdountTotalcost= [44]

const optionsTotalcost= {
  chart: {
    width: 380,
    type: 'pie',
  },
  title: {
    text: 'Total Cost',
    align:"center",
   
    style:{
      color:"white",
      
    }
  },
  stroke: {
    width: 0
  },
  labels: ['Sms'],
  colors:[ '#17a2b8',],
  plotOptions: {
    pie: {
      donut: {
        size: '60%',
        // labels:{
        //  show:true,
        //  fontSize:"15px",
        //  total:{
        //     show:true,
        //     fontSize:"15px",
        //     color:"white"
        //  },
        // },
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
const seriesDeliverycost= [44,10]

const optionsDeliverycost= {
  chart: {
    width: 380,
    type: 'pie',
  },
  title: {
    text: 'Delivery Cost',
    align:"center",
   
    style:{
      color:"white",
      
    }
  },
  stroke: {
    width: 0
  },
  labels: ['Delivery','Undelivery'],
  colors:[ '#6f42c1','#00cccc'],
  plotOptions: {
    pie: {
      donut: {
        size: '60%'
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
const seriesclick= [44,10]

const optionsclick= {
  chart: {
    width: 380,
    type: 'pie',
  },
  title: {
    text: 'Click-Through Rate',
    align:"center",
   
    style:{
      color:"white",
      
    }
  },
  stroke: {
    width: 0
  },
  labels: ['Opened','Delivered'],
  colors:[ '#007bff','#00cccc'],
  plotOptions: {
    pie: {
      donut: {
        size: '60%'
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
const seriesOut= [44,10]

const optionsOut= {
  chart: {
    width: 380,
    type: 'pie',
  },
  title: {
    text: 'Opt-Out Rate',
    align:"center",
   
    style:{
      color:"white",
      
    }
  },
  stroke: {
    width: 0
  },
  labels: ['No Opt-Out','Opt-Out'],
  colors:[ '#adb2bd','#00cccc'],
  plotOptions: {
    pie: {
      donut: {
        size: '60%'
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
const seriesDelivery= [44,10]

const optionsDelivery= {
  chart: {
    width: 380,
    type: 'dount',
  },
  title: {
    text: 'Delivery Rate',
    align:"center",
   
    style:{
      color:"white",
      
    }
  },
  stroke: {
    width: 0
  },
  labels: ['Delivery','Undelivery'],
  colors:[ '#f55187','#00cccc'],
  plotOptions: {
    pie: {
      donut: {
        size: '60%',
        
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
const seriesdount= [44,  13,]

const optionsdount= {
  chart: {
    width: 380,
    type: 'pie',
  },
  title: {
    text: 'Message By Status',
    
   
    style:{
      color:"white",
      
    }
  },
  stroke: {
    width: 0
  },
  labels: ['Received','Accepted'],
  colors:[ '#17a2b8','#00cccc'],
  plotOptions: {
    pie: {
      donut: {
        size: '50%'
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

export default function Sms2(){
    return(
        <div>
            <Row>
                <Col className="d-flex justify-content-center">
                 <h2 className="text-white">SMS Campaign Tracking Report</h2>
                </Col>
            </Row>

          

            <Row className="mt-0" >
                <Col>
                  <Card className="p-2" style={{backgroundColor:"#002151"}}>
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

           
            <Row className="mt-2">
                <Col>
                    <Card className="p-3" style={{backgroundColor:"#002151"}}>
                        <Row>
                            <Col lg={8}>
                            <Row>
                            <Col>
                             <h5 className="text-white">Response Rate</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                             <h2 className="text-white">30%</h2>
                            </Col>
                        </Row>
                            </Col>
                            <Col lg={4}>
                            <img src={Response} height={50}/>
                            </Col>
                        </Row>
                       
                    </Card>
                </Col>
                <Col>
                    <Card className="p-3" style={{backgroundColor:"#002151"}}>
                        <Row>
                            <Col lg={8}>
                            <Row>
                            <Col>
                             <h5 className="text-white">Unsubscribed Rate</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                             <h2 className="text-white">10%</h2>
                            </Col>
                        </Row>
                            </Col>
                            <Col lg={4}>
                            <img src={Un} height={50}/>
                            </Col>
                        </Row>
                       
                    </Card>
                </Col>

                <Col>
                    <Card className="p-3" style={{backgroundColor:"#002151"}}>
                        <Row>
                            <Col lg={8}>
                            <Row>
                            <Col>
                             <h5 className="text-white">Repeat Rate</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                             <h2 className="text-white">20%</h2>
                            </Col>
                        </Row>
                            </Col>
                            <Col lg={4}>
                             <img src={Repeat} height={50}/>
                            </Col>
                        </Row>
                     
                    </Card>
                </Col>
                <Col>
                    <Card className="p-3" style={{backgroundColor:"#002151"}}>
                        <Row>
                            <Col lg={8}>
                            <Row>
                            <Col>
                             <h5 className="text-white">Engagement Rate</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                             <h2 className="text-white">20%</h2>
                            </Col>
                        </Row>
                            </Col>
                            <Col lg={4}>
                             <img src={Enga} height={50}/>
                            </Col>
                        </Row>
                        
                    </Card>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col lg={3}>
                 <Row>
                 <Col>
                    <Card className="p-3" style={{backgroundColor:"#002151"}}>
                        <Row>
                            <Col lg={8}>
                            <Row>
                            <Col>
                             <h5 className="text-white">Forward Rate</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                             <h2 className="text-white">20%</h2>
                            </Col>
                        </Row>
                            </Col>
                            <Col lg={4}>
                            <img src={Forward} height={50}/>
                            </Col>
                        </Row>
                      
                    </Card>
                </Col>
                 </Row>
                 <Row className="mt-2">
                 <Col>
                    <Card className="p-3" style={{backgroundColor:"#002151"}}>
                        <Row>
                            <Col lg={8}>
                            <Row>
                            <Col>
                             <h5 className="text-white">Open Rate</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                             <h2 className="text-white">20%</h2>
                            </Col>
                        </Row>
                            </Col>
                            <Col lg={4}>
                            <img src={Open} height={50}/>
                            </Col>
                        </Row>
                       
                    </Card>
                </Col>
                 </Row>
                 <Row className="mt-2">
                 <Col>
                    <Card className="p-3" style={{backgroundColor:"#002151"}}>
                        <Row>
                            <Col lg={8}>
                            <Row>
                            <Col>
                             <h5 className="text-white">Revenue</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                             <h2 className="text-white">20</h2>
                            </Col>
                        </Row>
                            </Col>
                            <Col lg={4}>
                            <img src={Revenu} height={50}/>
                            </Col>
                        </Row>
                      
                    </Card>
                </Col>
                 </Row>
                 <Row className="mt-2">
                 <Col>
                    <Card className="p-3" style={{backgroundColor:"#002151"}}>
                        <Row>
                            <Col lg={8}>
                            <Row>
                            <Col>
                             <h5 className="text-white">Gross Margin</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                             <h2 className="text-white">20</h2>
                            </Col>
                        </Row>
                            </Col>
                            <Col lg={4}>
                            <img src={Cross} height={50}/>
                            </Col>
                        </Row>
                        
                    </Card>
                </Col>
                 </Row>
                </Col>

                <Col lg={9}>
                    <Card className="p-4" style={{backgroundColor:"#002151"}}>
                        <Row>
                            <Col lg={4} className="d-flex justify-content-center">
                            <ReactApexChart options={optionsTotalcost} series={seriesdountTotalcost} type="donut"  width={250} />
                            </Col>
                            <Col  lg={4} className="d-flex justify-content-center">
                            <ReactApexChart options={optionsDeliverycost} series={seriesDeliverycost} type="donut"  width={250} />
                            </Col>
                            <Col  lg={4} className="d-flex justify-content-center">
                            <ReactApexChart options={optionsclick} series={seriesclick} type="donut"  width={250} />
                            </Col>
                           
                        </Row>
                        <Row className="mt-3">
                            <Col lg={6} className="d-flex justify-content-center">
                            <ReactApexChart options={optionsOut} series={seriesOut} type="donut"  width={250} />
                            </Col>
                            <Col  lg={6} className="d-flex justify-content-center">
                            <ReactApexChart options={optionsDelivery} series={seriesDelivery} type="donut"  width={250} />
                            </Col>
                           
                           
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}