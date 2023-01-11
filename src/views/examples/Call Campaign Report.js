import React  from "react"
import {Row,Col,Card,Button} from "reactstrap"
import Total from "../../assets/img/brand/Total call.png"
import Answer from "../../assets/img/brand/Answer1.png"
import Missed from "../../assets/img/brand/Missed1.png"
import Abended from "../../assets/img/brand/Abended.png"
import Duration from "../../assets/img/brand/Duration.png"
import Routing from "../../assets/img/brand/Routing.png"
import Center from "../../assets/img/brand/center.png"
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes"

import ReactApexChart from "react-apexcharts"
import { useState,useEffect } from "react"


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

  const options = [{
    "id": 1,
    "value": "9ce42304-b732-4791-9731-6f299b6df8c7",
    "label": "GS"
  }, {
    "id": 2,
    "value": "90419f06-7d07-45c8-bcec-d675096fe27f",
    "label": "Blue base"
  }, {
    "id": 3,
    "value": "a23521da-0a48-4ef6-baa2-d727704f65c2",
    "label": "Shiash"
  }, {
    "id": 4,
    "value": "34b2b58a-0123-49e2-b2de-1eef0922139b",
    "label": "Xo"
  },]
export default function Call(){

  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    setSelectedOptions([{ label: "All", value: "*" }, ...options]);
  }, []);

  function getDropdownButtonLabel({ placeholderButtonLabel, value }) {
    if (value && value.some((o) => o.value === "*")) {
      return `${placeholderButtonLabel}: All`;
    } else {
      return `${placeholderButtonLabel}: ${value.length} selected`;
    }
  }

  function onChange(value, event) {
    if (event.action === "select-option" && event.option.value === "*") {
      this.setState(this.options);
    } else if (
      event.action === "deselect-option" &&
      event.option.value === "*"
    ) {
      this.setState([]);
    } else if (event.action === "deselect-option") {
      this.setState(value.filter((o) => o.value !== "*"));
    } else if (value.length === this.options.length - 1) {
      this.setState(this.options);
    } else {
      this.setState(value);
    }
  }


    return(
        <div>
            
            <Row>
                <Col className="d-flex justify-content-center">
                  <h2 className="text-white">Call Campaign Report</h2>
                </Col>
            </Row>
            <Row >
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
                        <Col lg={3} className="d-flex justify-content-center">
                         <Card className="" style={{backgroundColor:"#002151"}}>
                         
                          <Row>
                            <Col>
                             <h3 className="text-white">Campaigns</h3>
                            </Col>
                          </Row>

                          <Row>
                            <Col>
                            <ReactMultiSelectCheckboxes
                                              options={[{ label: "All", value: "*" }, ...options]}
                                              placeholderButtonLabel="Select"
                                              getDropdownButtonLabel={getDropdownButtonLabel}
                                              value={selectedOptions}
                                              onChange={onChange}
                                              setState={setSelectedOptions}
                                            />
                            </Col>
                          </Row>
                          
                         </Card>
                        
                        </Col>
                       
                        <Col lg={3} className="d-flex justify-content-end align-items-center">
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
                    <Card className="p-2" style={{backgroundColor:"#002151"}}>
                        <Row>
                            <Col lg={7}>
                            <Row>
                                <Col className="d-flex justify-content-start">
                                <h5 className="text-white">Call Volume Rate</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-start">
                                <h1 className="text-white">80%</h1>
                                </Col>
                            </Row>
                            </Col>
                            <Col lg={5} className="d-flex justify-content-start">
                             <img src={Total} height={40} width={40}/>
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
                                <h5 className="text-white">Answered Calls Rate</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-start">
                                <h1 className="text-white">40%</h1>
                                </Col>
                            </Row>
                            </Col>
                            <Col lg={4} className="d-flex justify-content-start">
                             <img src={Answer} height={40} width={40}/>
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
                                <h5 className="text-white">Missed Calls Rate</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-start">
                                <h1 className="text-white">30%</h1>
                                </Col>
                            </Row>
                            </Col>
                            <Col lg={5} className="d-flex justify-content-start">
                             <img src={Missed} height={40} width={40}/>
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
                                <h5 className="text-white"> Abandoned Calls Rate</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-start">
                                <h1 className="text-white">10%</h1>
                                </Col>
                            </Row>
                            </Col>
                            <Col lg={4} className="d-flex justify-content-start">
                             <img src={Abended} height={40} width={40}/>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col lg={3}>
                  <Row className="">
                    <Col>
                    <Card className="p-2" style={{backgroundColor:"#002151"}}>
                            <Row>
                                <Col lg={7}>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h5 className="text-white">Call Duration Rate</h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h1 className="text-white">20%</h1>
                                    </Col>
                                </Row>
                                </Col>
                                <Col lg={5} className="d-flex justify-content-start">
                                <img src={Duration} height={50} width={50}/>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>
                    <Card className="p-2" style={{backgroundColor:"#002151"}}>
                            <Row>
                                <Col lg={7}>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h5 className="text-white">Call routing data Rate</h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h1 className="text-white">18%</h1>
                                    </Col>
                                </Row>
                                </Col>
                                <Col lg={5} className="d-flex justify-content-start">
                                <img src={Routing} height={50} width={50}/>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>
                    <Card className="p-2" style={{backgroundColor:"#002151"}}>
                            <Row>
                                <Col lg={7}>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h5 className="text-white">Call center efficiency Rate</h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="d-flex justify-content-start">
                                    <h1 className="text-white">30%</h1>
                                    </Col>
                                </Row>
                                </Col>
                                <Col lg={5} className="d-flex justify-content-start">
                                <img src={Center} height={50} width={50}/>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                  </Row>
                </Col>
                <Col lg={3}>
                <Card className="p-3" style={{backgroundColor:"#002151",height:"333px"}}> 
                <Row>
                  <Col className="d-flex justify-content-center">
                  <ReactApexChart options={optionsdount} series={seriesdount} type="donut"  width={350} />
                  </Col>
                </Row>
                 
                </Card>
                </Col>
                <Col lg={6}>
                <Card className="p-2" style={{backgroundColor:"#002151"}}> 
                <ReactApexChart options={optionss} series={seriess} type="line" height={300} />
                </Card>
                </Col>
                
            </Row>

          
        </div>
    );
}