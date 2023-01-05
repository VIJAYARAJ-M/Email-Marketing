import React,{useState ,useEffect} from "react"
import {Row, Col, Card, Button,} from "reactstrap"
import ReactApexChart from "react-apexcharts"
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes"
import Select from "react-select"

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
    colors: ["#6026c5"],
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
    // fill: {
    //     type: "gradient",

    //     gradient: {
    //       shadeIntensity: 1,
    //       type: "vertical",
    //       opacityFrom: 0.7,
    //       opacityTo: 0.9,
    //       colorStops: [
    //         {
    //           offset: 0,
    //           color: "#6026c5",
    //           opacity: 1
    //         },

    //         {
    //           offset: 100,
    //           color: "#002151",
    //           opacity: 1
    //         }
    //       ]
    //     }
    //   },
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
    colors: ["#2bc7b2"],
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
//     fill: {
//     type: "gradient",

//     gradient: {
//       shadeIntensity: 1,
//       type: "vertical",
//       opacityFrom: 0.7,
//       opacityTo: 0.9,
//       colorStops: [
//         {
//           offset: 0,
//           color: "#2bc7b2",
//           opacity: 1
//         },

//         {
//           offset: 100,
//           color: "#002151",
//           opacity: 1
//         }
//       ]
//     }
//   },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  }

export default function Email3(){
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
            <h2>Email3</h2>
            <Row>
                <Col className="d-flex justify-content-center">
                  <h2 className="text-white">Email Campaign Report</h2>
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

            <Row className="mt-2">
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
                            <h3 className="text-white">1,165</h3>
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
                            <h3 className="text-white">16</h3>
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
                            <h3 className="text-white">308(36.4%)</h3>
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
                            <h3 className="text-white">12(1.0%)</h3>
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

            <Row className="mt-2">
                <Col lg={3}>
                    <Row>
                    <Col>
                    <Card className="p-3" style={{backgroundColor:"#002151"}}>
                        <Row>
                            <Col lg={6}>
                            <Row>
                            <Col className="d-flex justify-content-center ">
                            <h5 className="text-white">Bounces</h5>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col className="d-flex justify-content-center ">
                            <h3 className="text-white">119(10.2%)</h3>
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