import React from "react"
import {Row,Col,Card} from "reactstrap"
import ReactApexChart from "react-apexcharts"

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
        text:"Clicks",
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
        text:"Opens",
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
export default function Email1(){
    return(
        <div>
            
            <Row className="mt-3">
                <Col>
                  <Card className="p-3" style={{backgroundColor:"#002151"}}>
                    <Row>
                        <Col className="d-flex justify-content-center ">
                        <h4 className="text-white">Recipients</h4>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col className="d-flex justify-content-center ">
                        <h2 className="text-white">700</h2>
                        </Col>
                    </Row>
                  </Card>
                </Col>
                <Col>
                  <Card className="p-3" style={{backgroundColor:"#002151"}}>
                    <Row>
                        <Col className="d-flex justify-content-center ">
                        <h4 className="text-white">Open Rate</h4>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col className="d-flex justify-content-center ">
                        <h2 className="text-white">30.60%</h2>
                        </Col>
                    </Row>
                  </Card>
                </Col>
                <Col>
                  <Card className="p-3" style={{backgroundColor:"#002151"}}>
                    <Row>
                        <Col className="d-flex justify-content-center ">
                        <h4 className="text-white">Click Rate</h4>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col className="d-flex justify-content-center ">
                        <h2 className="text-white">19.11%</h2>
                        </Col>
                    </Row>
                  </Card>
                </Col>
                <Col>
                  <Card className="p-3" style={{backgroundColor:"#002151"}}>
                    <Row>
                        <Col className="d-flex justify-content-center ">
                        <h4 className="text-white">Unsubscribed</h4>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col className="d-flex justify-content-center ">
                        <h2 className="text-white">0.97%</h2>
                        </Col>
                    </Row>
                  </Card>
                </Col>
                
            </Row>

            <Row className="mt-2">
                <Col lg={6}>
                <Card className="p-3" style={{backgroundColor:"#002151"}}>
                <ReactApexChart options={optionsbar1} series={seriesbar1} type="bar" height={350} />

    
                </Card>
                </Col>
                <Col lg={6}>
                <Card className="p-3" style={{backgroundColor:"#002151"}}>
                <ReactApexChart options={optionsbar2} series={seriesbar2} type="bar" height={350} />

    
                </Card>
                </Col>
            </Row>
        </div>
    );
}