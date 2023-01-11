import React from "react"
import ReactApexChart from "react-apexcharts";
import {Row,Col,Card,CardHeader,} from "reactstrap"


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
                <Col>
                 <h2>Sms Camapaign</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="p-3" style={{backgroundColor:"#002151"}}>
                        <Row>
                            <Col>
                             <h4 className="text-white">Response Rate</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                             <h2 className="text-white">30%</h2>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col>
                    <Card className="p-3" style={{backgroundColor:"#002151"}}>
                        <Row>
                            <Col>
                             <h4 className="text-white">Unsubscribed Rate</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                             <h2 className="text-white">10%</h2>
                            </Col>
                        </Row>
                    </Card>
                </Col>

                <Col>
                    <Card className="p-3" style={{backgroundColor:"#002151"}}>
                        <Row>
                            <Col>
                             <h4 className="text-white">Repeat Rate</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                             <h2 className="text-white">20%</h2>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col>
                    <Card className="p-3" style={{backgroundColor:"#002151"}}>
                        <Row>
                            <Col>
                             <h4 className="text-white">Engagement Rate</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                             <h2 className="text-white">20%</h2>
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
                            <Col>
                             <h4 className="text-white">Forward Rate</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                             <h2 className="text-white">20%</h2>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                 </Row>
                 <Row className="mt-2">
                 <Col>
                    <Card className="p-3" style={{backgroundColor:"#002151"}}>
                        <Row>
                            <Col>
                             <h4 className="text-white">Open Rate</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                             <h2 className="text-white">20%</h2>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                 </Row>
                </Col>

                <Col lg={9}>
                    <Card className="p-3" style={{backgroundColor:"#002151"}}>
                        <Row>
                            <Col lg={4}>
                            <ReactApexChart options={optionsdount} series={seriesdount} type="donut"  width={250} />
                            </Col>
                            <Col  lg={4}>
                            <ReactApexChart options={optionsdount} series={seriesdount} type="donut"  width={250} />
                            </Col>
                            <Col  lg={4}>
                            <ReactApexChart options={optionsdount} series={seriesdount} type="donut"  width={250} />
                            </Col>
                           
                        </Row>
                        <Row>
                            <Col lg={6}>
                            <ReactApexChart options={optionsdount} series={seriesdount} type="donut"  width={250} />
                            </Col>
                            <Col  lg={6}>
                            <ReactApexChart options={optionsdount} series={seriesdount} type="donut"  width={250} />
                            </Col>
                           
                           
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}