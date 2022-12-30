import React from "react"
import { Card, Col, Row } from "reactstrap";
import Money from "../../assets/img/brand/money.png"
import Closed from "../../assets/img/brand/closed.png"
import Count from "../../assets/img/brand/Count.png"
import Days from "../../assets/img/brand/days.png"
import ReactApexChart from "react-apexcharts";


const series= [{
    data: [21, 22, 10, 28, 16, 21, 13, 30]
  }]

const options= {
    chart: {
      height: 350,
      type: 'bar',
      toolbar:{
        show:!1,
      },
      events: {
        click: function(chart, w, e) {
          // console.log(chart, w, e)
        }
      }
    },
    title: {
        text: 'Leads by source',
        style:{
           color:"black",
           
        },
        
      },
    // colors:['#e0e0e0'],
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
     yaxis: [{
      title: {
        text: 'Record Count',
        style:{
          color:"black",
       },
      },
      labels:{
        style:{
          colors:"black",
          
        },
  },
    
    }, ],
    xaxis: {
      categories: [
        ['advertisements'],
        ['Emplyee Referral'],
        ['External Referral'],
        'Amber',
        ['Peter', 'Brown'],
        ['Mary', 'Evans'],
        ['David', 'Wilson'],
        ['Lily', 'Roberts'], 
      ],
      labels: {
        style: {
        //   colors: colors,
          fontSize: '12px'
        }
      }
    }
  }

export default function Pipline(){
    return(
        <div>
            <h2 className="text-white">Pipeline</h2>

            <Row>
                <Col>
                <Card className="p-3"  style={{backgroundColor:"#002151"}}>
                    <Row>
                        <Col>
                        <Row>
                        <Col>
                         <h5 className="text-white"> Total Deal Amount</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                         <h3 className="text-white">10000</h3>
                        </Col>
                    </Row>
                        </Col>

                        <Col>
                        <img src={Money} height={60} width={60}/>
                        </Col>
                    </Row>
                    
                </Card>
                </Col>
                <Col>
                <Card className="p-3"  style={{backgroundColor:"#002151"}}>
                    <Row>
                        <Col>
                        <Row>
                        <Col>
                         <h5 className="text-white"> Total Deal Closed</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                         <h3 className="text-white">8</h3>
                        </Col>
                    </Row>
                        </Col>

                        <Col>
                        <img src={Closed} height={60} width={60}/>
                        </Col>
                    </Row>
                    
                </Card>
                </Col>
                <Col>
                <Card className="p-3"  style={{backgroundColor:"#002151"}}>
                    <Row>
                        <Col>
                        <Row>
                        <Col>
                         <h5 className="text-white"> Total Deal Count</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                         <h3 className="text-white">10</h3>
                        </Col>
                    </Row>
                        </Col>

                        <Col>
                        <img src={Count} height={60} width={60}/>
                        </Col>
                    </Row>
                    
                </Card>
                </Col>
                <Col>
                <Card className="p-3"  style={{backgroundColor:"#002151"}}>
                    <Row>
                        <Col lg={6}>
                        <Row>
                        <Col>
                         <h5 className="text-white">Avg days to closed deal</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                         <h3 className="text-white">10</h3>
                        </Col>
                    </Row>
                        </Col>

                        <Col lg={6}>
                        <img src={Days} height={60} width={60}/>
                        </Col>
                    </Row>
                    
                </Card>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col>
                <Card className="p-3">
                <ReactApexChart options={options} series={series} type="bar" height={350} />
                </Card>
                </Col>
            </Row>
        </div>
    );
}