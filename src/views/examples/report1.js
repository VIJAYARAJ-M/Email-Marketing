import React from "react"
import {Row, Col, Card, Table, CardHeader} from "reactstrap"
import ReactApexChart from "react-apexcharts"

import { HiUsers } from 'react-icons/hi'
import { FaUser } from 'react-icons/fa'
import { GiBouncingSpring } from 'react-icons/gi'
import { FiUsers } from 'react-icons/fi'
import {MdMarkEmailUnread} from 'react-icons/md'



import Recepient from "../../../src/assets/img/brand/Recepients.png"
import Delivery from "../../../src/assets/img/brand/Deliverys.png"
import Open from "../../../src/assets/img/brand/Opens.png"
import Unopen from "../../../src/assets/img/brand/Unopen.png"
import Click from "../../../src/assets/img/brand/Clicked.png"
import Unclick from "../../../src/assets/img/brand/unclicked.png"
import Bounce from "../../../src/assets/img/brand/Bounced.png"
import Average from "../../../src/assets/img/brand/Average.png"
import New from "../../../src/assets/img/brand/Old.png"
import Old from "../../../src/assets/img/brand/new.png"


const seriesarea= [{
  name: 'series1',
  data: [31, 40, 28, 51, 42, 30, 20]
}]
const optionsarea= {
  chart: {
    height: 350,
    type: 'area',
    toolbar:{
      show:!1,
   },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
    labels:{
      style:{
        colors:"none",
        
      },
},
  },
  grid: {
    show: false,      // you can either change hear to disable all grids
    xaxis: {
      
      lines: {
        show: false, //or just here to disable only x axis grids
       }
     },  
    yaxis: {
     
      lines: { 
        show: false,  //or just here to disable only y axis
       }
     },   
  },
  yaxis: {
  
    labels:{
      style:{
        colors:"none",
        
      },
},
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
}

const table = [{
  date :"12-10-2022",
  name :"Campaign 1",
  user :"995",
  newuser:"191",
  bouncerate:"47.75%",
 
},
{
  date :"12-10-2022",
  name :"Campaign 1",
  user :"822",
  newuser:"404",
  bouncerate:"22.72%",
},
{
  date :"12-10-2022",
  name :"Campaign 1",
  user :"808",
  newuser:"468",
  bouncerate:"21.8%",
},
{
  date :"12-10-2022",
  name :"Campaign 1",
  user :"799",
  newuser:"400",
  bouncerate:"20%",
},
{
  date :"12-10-2022",
  name :"Campaign 1",
  user :"750",
  newuser:"350",
  bouncerate:"18.6%",
},
{
  date :"12-10-2022",
  name :"Campaign 1",
  user :"700",
  newuser:"300",
  bouncerate:"16%",
},

]
const seriesdount= [44, 55, 13, 43, 22]

const optionsdount= {
  chart: {
    width: 380,
    type: 'pie',
  },
  stroke: {
    width: 0
  },
  labels: ['Campign 1', 'Campign 2', 'Campign 3', 'Campign 4 ', 'Campign 5'],
  colors:["#6f42c1", "#007bff","#17a2b8", "#00cccc", "#adb2bd"],
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

const series11= [44, 55, 13, 43, 22]



const options11= {
  chart: {
    width: 380,
    type: 'pie',
  },
  stroke: {
    width: 0
  },
  labels: ['Campign 1', 'Campign 2', 'Campign 3', 'Campign 4 ', 'Campign 5'],
  colors:["#6f42c1", "#007bff","#17a2b8", "#00cccc", "#adb2bd"],
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
const series111=[{
  name: 'New Users',
  type: 'column',
  data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
}, {
  name: 'Users',
  type: 'line',
  data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
}]
const options111={
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
    text: 'Users',
    style:{
     color:"white",
    },
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1]
  },
  legend: {
    display: true,
    position: "bottom",
    labels: {
    
    colors:"white",
    
    }
  },
  labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
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
      text: 'New Users',
      style:{
        color:"white",
      }
    },
    labels:{
      style:{
        colors:"white",
        
      },
},
  
  }, {
    opposite: true,
    title: {
      text: 'Users',
      style:{
        color:"white"
      }
    },
    labels:{
      style:{
        colors:"white",
        
      },
},
  }]
}
const seriessclick=[{
  name: 'Email Open',
  type: 'column',
  data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
}, {
  name: 'Email Unopen',
  type: 'line',
  data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
}]
const optionssclick={
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
    text: 'Email click Categories',
    style:{
      color:"white",
    }
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1]
  },
  legend: {
    display: true,
    position: "bottom",
    labels: {
    
    colors:"white",
    
    }
  },
  labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
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
      text: 'Email Click',
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
      text: 'Email Unclick',
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

  
const seriess=[{
  name: 'Spam Emails',
  type: 'column',
  data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
}, {
  name: 'Wrong Emails',
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
    text: 'Undelivered Sources',
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
      text: 'Spam Emails',
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
      text: 'Wrong Emails',
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




const  series22= [{
    name: 'Email Open',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Email Unopen',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }]
 const option22= {
    chart: {
      type: 'bar',
      height: 350,
      toolbar:{
       show:!1,
      },
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
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
       labels:{
      style:{
        colors:"white",
        
      },
},
    },
    yaxis: {
      title: {
        text: 'Email Open & Unopen',
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
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
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
  }

export default function Report1(){

    return(
        <div>
            <Row className="mt-3">
                <Col className="justify-content-center d-flex" >
                  <h1 className="text-white" style={{color:""}}>Report</h1>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col  >
                  <Card className="p-3" style={{backgroundColor:"#002151"}}>
                    <CardHeader style={{backgroundColor:"#002151"}}>
                      <Row>
                        <Col>
                        <h2 className="text-white">Email Recepient Categories</h2>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                        <h5 className="text-white">Total Email Recepient</h5>
                        </Col>
                      </Row>
                    </CardHeader>
                      
                    <Row className="mt-2">
                      <Col lg={4} className="justify-content-center d-flex align-items-center">
                      <img src={Recepient} />
                      </Col>
                      <Col lg={8}>
               
                    <Row>
                        <Col className="">
                        <h4 className="text-white">Recepient</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="">
                        <h2 className="text-white">200</h2>
                        </Col>
                    </Row>
             
                      </Col>
                      
                    </Row>

                    
                  </Card>
                  </Col>
                  <Col  >
                  <Card className="p-3"  style={{backgroundColor:"#002151"}}>
                  <CardHeader style={{backgroundColor:"#002151"}}>
                      <Row>
                        <Col>
                        <h2 className="text-white">Email Delivery Categories</h2>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                        <h5 className="text-white">Total Email Delivery</h5>
                        </Col>
                      </Row>
                    </CardHeader>
                    <Row className="mt-2">
                      <Col lg={4} className="justify-content-center d-flex align-items-center">
                      <img src={Delivery} />
                      </Col>
                      <Col  lg={8} >
               
                    <Row>
                        <Col className="">
                        <h4 className="text-white">Email Delivery</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="">
                        <h2 className="text-white">100</h2>
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
              <ReactApexChart options={optionss} series={seriess} type="line" height={350} />

              </Card>
              </Col>
            </Row>
            
            <Row className="mt-3">
              <Col >
              <Card className="p-3" style={{backgroundColor:"#002151"}}>
                <Row>
                  <Col className="justify-content-center d-flex">
                  <h3 className="text-white">Total Delivered mail</h3></Col>
                </Row>
                <Row>
                  <Col className="justify-content-center d-flex">
                  <ReactApexChart options={options11} series={series11} type="pie"  width={380} />
                  </Col>
                </Row>
              

              </Card>
              </Col>
              <Col>
              <Card className="p-3" style={{backgroundColor:"#002151"}}>
              <Row>
                  <Col className="justify-content-center d-flex">
                  <h3 className="text-white">Total Unsend mail</h3></Col>
                </Row>
                <Row>
                  <Col className="justify-content-center d-flex">
                  <ReactApexChart options={optionsdount} series={seriesdount} type="donut"  width={380} />
                  </Col>
                </Row>

              </Card>
              </Col>
            </Row>

           <Row className="mt-4">
            <Col lg={4}>
              <Row>
              <Col >
                  <Card className="p-3" style={{backgroundColor:"#002151"}}>
                    <Row>
                      <Col lg={4} className="justify-content-center d-flex align-items-center">
                       <img src={Open} height={70} width={70}/>
                      </Col>
                      <Col lg={8} >
               
                    <Row>
                        <Col className="">
                        <h4 className="text-white">Email Open</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="">
                        <h2 className="text-white">80</h2>
                        </Col>
                    </Row>
             
                      </Col>
                    </Row>
                  </Card>
                  </Col>
              </Row>

              <Row className="mt-4">
              <Col >
                  <Card className="p-3" style={{backgroundColor:"#002151"}}>
                    <Row>
                      <Col lg={4} className="justify-content-center d-flex align-items-center">
                       <img src={Unopen} height={70} width={70}/>
                      </Col>
                      <Col lg={8} >
               
                    <Row>
                        <Col className="">
                        <h4 className="text-white">Email Unopened</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="">
                        <h2 className="text-white">10</h2>
                        </Col>
                    </Row>
             
                      </Col>
                    </Row>
                  </Card>
                  </Col>
              </Row>

            </Col>
            <Col>
            <Row>
            <Col>
              <Card className="p-2" style={{backgroundColor:"#002151"}}>
              

              <ReactApexChart options={option22} series={series22} type="bar" height={200} />

    

              </Card>
            </Col>
            </Row>
            </Col>
           </Row>

           <Row className="mt-4">
              <Col lg={4}>
              <Row>
              <Col >
                    <Card className="p-3" style={{backgroundColor:"#002151"}}>
                      <Row>
                        <Col lg={4} className="justify-content-center d-flex align-items-center">
                        <img src={Click} height={70} width={70}/>
                        </Col>
                        <Col lg={8}>
                
                      <Row>
                          <Col className="">
                          <h4 className="text-white">Email clicked</h4>
                          </Col>
                      </Row>
                      <Row>
                          <Col className="">
                          <h2 className="text-white">50</h2>
                          </Col>
                      </Row>
              
                        </Col>
                      </Row>
                    </Card>
                    </Col>
              </Row>

              <Row className="mt-4">
              <Col >
                    <Card className="p-3" style={{backgroundColor:"#002151"}}>
                      <Row>
                        <Col lg={4} className="justify-content-center d-flex align-items-center">
                        <img src={Unclick} height={70} width={70}/>
                        </Col>
                        <Col lg={8} >
                
                      <Row>
                          <Col className="">
                          <h4 className="text-white">Email UnClicked</h4>
                          </Col>
                      </Row>
                      <Row>
                          <Col className="">
                          <h2 className="text-white">50</h2>
                          </Col>
                      </Row>
              
                        </Col>
                      </Row>
                    </Card>
                    </Col>
              </Row>
              </Col>
              <Col>

              <Row>
              <Col>
                <Card className="p-2" style={{backgroundColor:"#002151"}}>
                <ReactApexChart options={optionssclick} series={seriessclick} type="line" height={200} />

                </Card>
                </Col>
              </Row>
              </Col>
           </Row>



            <Row className="mt-4">
                <Col lg={4}>
                  <Card className="p-3" style={{backgroundColor:"#002151"}}>
                  <Row className="mt-2">
                  
                    <Col>
                    <img src={Bounce} height={70} width={70}/>
                    </Col>
                    <Col>
                    <Row>
                      <h4 className="text-white">Bounces</h4>
                    </Row>
                    <Row className="mt-2">
                      <h1 className="text-white">300</h1>
                    </Row>
                    </Col>
                    
                  </Row>
                  
                  </Card>
                  <Card className="p-3 mt-3" style={{backgroundColor:"#002151"}}>
                  <Row >
                  
                    <Col>
                    <img src={Average} height={70} width={70}/>
                    </Col>
                    <Col>
                    <Row>
                      <h4 className="text-white">Average Users</h4>
                    </Row>
                    <Row className="mt-2">
                      <h1 className="text-white">790</h1>
                    </Row>
                    </Col>
                    
                  </Row>
                  
                  </Card>
                  <Card className="p-3 mt-3" style={{backgroundColor:"#002151"}}>
                  <Row >
                  
                    <Col>
                    <img src={Old} height={70} width={70}/>
                    </Col>
                    <Col>
                    <Row>
                      <h4 className="text-white">Old Users</h4>
                    </Row>
                    <Row className="mt-2">
                      <h1 className="text-white">400</h1>
                    </Row>
                    </Col>
                    
                  </Row>
                  
                  </Card>
                  <Card className="p-3 mt-3" style={{backgroundColor:"#002151"}}>
                  <Row >
                  
                    <Col>
                    <img src={New} height={70} width={70}/>
                    </Col>
                    <Col>
                    <Row>
                      <h4 className="text-white">New Users</h4>
                    </Row>
                    <Row className="mt-2">
                      <h1 className="text-white">100</h1>
                    </Row>
                    </Col>
                    
                  </Row>
                  
                  </Card>
                </Col>
                <Col lg={8}>
                <Card className="p-3" style={{backgroundColor:"#002151"}}>
                <ReactApexChart options={options111} series={series111} type="line" height={490} />
                </Card>
                </Col>
            </Row>

           <Row className="mt-3">
                
                
                        <Col className="mb-5 mb-xl-0 " xl="12" style={{}}>
                            <Card className="" style={{boxShadow:"",backgroundColor:"#002151",height:"400px",
                            /*backgroundImage:"linear-gradient(to right, #133D7A 0%, #3759B2 100%)",*/
                            border:"0px"
                            /*boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"*/
                            /*boxShadow:"inset 2px 2px 5px #e7e7e7, inset -3px -3px 7px #bbbec3",backgroundColor:"#F8F8F8"*/}}>
                            <CardHeader className="border-0" 
                            style={{ backgroundColor:"#002151",/*backgroundImage:"linear-gradient(to right, #133D7A 0%, #3759B2 100%)",*/
                            border:"0px"}}>
                                <Row className="align-items-center">
                                <div className="col">
                                    <h3 className="mb-0 text-white">Table</h3>
                                </div>
                                
                                </Row>
                            
                            
                            </CardHeader>
                            <Table className="align-items-center  table-flush" responsive >
                            <thead className="">
                            <tr className="" style={{color:"#FFB178"}}>
                                <th scope="col">Date</th>
                                <th scope="col">Campaign Name</th>
                                <th scope="col">User</th>
                                <th scope="col">New User</th>
                                <th scope="col">Bounce Rate</th>
                                
                            </tr>
                            </thead>
                            {table.map((item, index)=>(
                            <tbody  >
                            <tr key={index} className="text-white" >
                                <td scope="row">{item.date}</td>
                                <td scope="row">{item.name}</td>
                                <td>{item.user}</td>
                                <td>{item.newuser}</td>
                                <td>{item.bouncerate}</td>
                               
                            
                            </tr>
                        
                        
                        
                            
                            </tbody>
                            ))}
                        </Table>
                            </Card>
                        </Col>
                        
                        
                    
                    
           </Row>

          
           
        </div>
    );
}