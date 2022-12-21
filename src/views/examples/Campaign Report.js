import React from "react"
import {Row, Col, Card, Table, CardHeader} from "reactstrap"
import ReactApexChart from "react-apexcharts"

import { HiUsers } from 'react-icons/hi'
import { FaUser } from 'react-icons/fa'
import { GiBouncingSpring } from 'react-icons/gi'
import { FiUsers } from 'react-icons/fi'
import {MdMarkEmailUnread} from 'react-icons/md'



import Recepient from "../../../src/assets/img/brand/Recepient.png"
import Delivery from "../../../src/assets/img/brand/Email Delivery.png"
import Open from "../../../src/assets/img/brand/Email Open.png"
import Unopen from "../../../src/assets/img/brand/Email Unopen.png"
import Click from "../../../src/assets/img/brand/Email Clicked.png"
import Unclick from "../../../src/assets/img/brand/Email Unclicked.png"
import Bounce from "../../../src/assets/img/brand/Bounce.png"

const table = [{
  date :"12-10-2022",
  user :"995",
  newuser:"191",
  bouncerate:"47.75%",
 
},
{
  date :"12-10-2022",
  user :"822",
  newuser:"404",
  bouncerate:"22.72%",
},
{
  date :"12-10-2022",
  user :"808",
  newuser:"468",
  bouncerate:"21.8%",
},
{
  date :"12-10-2022",
  user :"799",
  newuser:"400",
  bouncerate:"20%",
},
{
  date :"12-10-2022",
  user :"750",
  newuser:"350",
  bouncerate:"18.6%",
},
{
  date :"12-10-2022",
  user :"700",
  newuser:"300",
  bouncerate:"16%",
},

]
const series11= [44, 55, 13, 43, 22]

const options11= {
  chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['Campign 1', 'Campign 2', 'Campign 3', 'Campign 4 ', 'Campign 5'],
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
  },
  stroke: {
    width: [0, 4]
  },
  title: {
    text: 'Users'
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1]
  },
  labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
  xaxis: {
    type: 'datetime'
  },
  yaxis: [{
    title: {
      text: 'New Users',
    },
  
  }, {
    opposite: true,
    title: {
      text: 'Users'
    }
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
  },
  stroke: {
    width: [0, 4]
  },
  title: {
    text: 'Undelivered Sources'
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1]
  },
  labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
  xaxis: {
    type: 'datetime'
  },
  yaxis: [{
    title: {
      text: 'Spam Emails',
    },
  
  }, {
    opposite: true,
    title: {
      text: 'Wrong Emails'
    }
  }]
}


const series= [{
    name: 'Count',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }]
const options= {
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
    title: {
      text: '',
      
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
        text: 'Opens Count',
        style:{
           color:"white",
        },
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
          return   val
        }
      }
    }
}
const series1= [{
    name: 'Count',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }]
const options1= {
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
    colors:['#6f42c1'],
    title: {
      text: '',
      
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
        text: 'Clicks Count',
        style:{
          color:"white",
       },
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
          return   val
        }
      }
    }
  }

export default function CampaignReport(){

    return(
        <div>
            <Row className="mt-3">
                <Col className="justify-content-center d-flex" >
                  <h1 className="text-white" style={{color:""}}>Report</h1>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                <Card className="p-2 " style={{backgroundColor:'#002151'}}>
                    <Row>
                        <Col className="justify-content-center d-flex">
                        <h5 className="text-white">Recipients</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="justify-content-center d-flex">
                        <h2 className="text-white">200</h2>
                        </Col>
                    </Row>
                </Card>
                </Col>
                <Col>
                <Card className="p-2" style={{backgroundColor:'#002151'}}>
                    <Row>
                        <Col className="justify-content-center d-flex">
                        <h5 className="text-white">Email Delivered</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="justify-content-center d-flex">
                        <h2 className="text-white">100</h2>
                        </Col>
                    </Row>
                </Card>
                </Col>
                <Col>
                <Card className="p-2" style={{backgroundColor:'#002151'}}>
                    <Row>
                        <Col className="justify-content-center d-flex">
                        <h5 className="text-white">Email Opened</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="justify-content-center d-flex">
                        <h2 className="text-white">80</h2>
                        </Col>
                    </Row>
                </Card>
                </Col>
                <Col>
                <Card className="p-2" style={{backgroundColor:'#002151'}}>
                    <Row>
                        <Col className="justify-content-center d-flex">
                        <h5 className="text-white">Email Unopened</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="justify-content-center d-flex">
                        <h2 className="text-white">10</h2>
                        </Col>
                    </Row>
                </Card>
                </Col>
                <Col>
                <Card className="p-2" style={{backgroundColor:'#002151'}}>
                    <Row>
                        <Col className="justify-content-center d-flex">
                        <h5 className="text-white">Email Clicked</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="justify-content-center d-flex">
                        <h2 className="text-white">50</h2>
                        </Col>
                    </Row>
                </Card>
                </Col>
                <Col>
                <Card className="p-2" style={{backgroundColor:'#002151'}}>
                    <Row>
                        <Col className="justify-content-center d-flex">
                        <h5 className="text-white">Email Unclicked</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="justify-content-center d-flex">
                        <h2 className="text-white">50</h2>
                        </Col>
                    </Row>
                </Card>
                </Col>
                <Col>
                <Card className="p-2" style={{backgroundColor:'#002151'}}>
                    <Row>
                        <Col className="justify-content-center d-flex">
                        <h5 className="text-white">Email Bounced</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="justify-content-center d-flex">
                        <h2 className="text-white">10</h2>
                        </Col>
                    </Row>
                </Card>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col>
                <Card style={{backgroundColor:'#002151'}}>
                   <ReactApexChart options={options} series={series} type="bar" height={300} />
                </Card>
                </Col>
                <Col>
                <Card style={{backgroundColor:'#002151'}}>
                   <ReactApexChart options={options1} series={series1} type="bar" height={300} />
                </Card>
                </Col>
            </Row>

            <Row className="mt-5">
              <Col>
              <Card >
                <Row>
                  <Col className="justify-content-center d-flex">
                  <h3>Total Delivered mail</h3></Col>
                </Row>
                <Row>
                  <Col>
                  <ReactApexChart options={options11} series={series11} type="pie"  width={380} />
                  </Col>
                </Row>
              

              </Card>
              </Col>
              <Col>
              <Card >
              <Row>
                  <Col className="justify-content-center d-flex">
                  <h3>Total Unsend mail</h3></Col>
                </Row>
                <Row>
                  <Col>
                  <ReactApexChart options={options11} series={series11} type="donut"  width={380} />
                  </Col>
                </Row>

              </Card>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col>
              <Card >
              <ReactApexChart options={optionss} series={seriess} type="line" height={350} />

              </Card>
              </Col>
            </Row>
            

            <Row className="mt-4">
              <Col lg={3}>
                <Card className="p-3">
                <Row className="mt-2">
                 
                  <Col>
                  <MdMarkEmailUnread  size="4rem"/>
                  </Col>
                  <Col>
                  <Row>
                    <h4>Bounces</h4>
                  </Row>
                  <Row className="mt-2">
                    <h1>300</h1>
                  </Row>
                  </Col>
                  
                </Row>
                
                </Card>
                <Card className="p-3 mt-3">
                <Row >
                 
                  <Col>
                  <FiUsers  size="4rem"/>
                  </Col>
                  <Col>
                  <Row>
                    <h4>Average Users</h4>
                  </Row>
                  <Row className="mt-2">
                    <h1>790</h1>
                  </Row>
                  </Col>
                  
                </Row>
                
                </Card>
                <Card className="p-3 mt-3">
                <Row >
                 
                  <Col>
                  <FaUser   size="4rem"/>
                  </Col>
                  <Col>
                  <Row>
                    <h4>Old Users</h4>
                  </Row>
                  <Row className="mt-2">
                    <h1>400</h1>
                  </Row>
                  </Col>
                  
                </Row>
                
                </Card>
                <Card className="p-3 mt-3">
                <Row >
                 
                  <Col>
                  <HiUsers  size="4rem"/>
                  </Col>
                  <Col>
                  <Row>
                    <h4>New Users</h4>
                  </Row>
                  <Row className="mt-2">
                    <h1>100</h1>
                  </Row>
                  </Col>
                  
                </Row>
                
                </Card>
              </Col>
              <Col lg={9}>
              <Card className="p-3">
              <ReactApexChart options={options111} series={series111} type="line" height={490} />
              </Card>
              </Col>
            
           </Row>

           <Row className="">
                
                <Col >
                    <Card className="" style={{backgroundColor:'#002151'}}>
                    
                        <Col className="mb-5 mb-xl-0 p-1" xl="12" style={{}}>
                            <Card className="" style={{boxShadow:"",backgroundColor:"#00072b",height:"400px",
                            /*backgroundImage:"linear-gradient(to right, #133D7A 0%, #3759B2 100%)",*/
                            border:"0px"
                            /*boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"*/
                            /*boxShadow:"inset 2px 2px 5px #e7e7e7, inset -3px -3px 7px #bbbec3",backgroundColor:"#F8F8F8"*/}}>
                            <CardHeader className="border-0" 
                            style={{ backgroundColor:"#00072b",/*backgroundImage:"linear-gradient(to right, #133D7A 0%, #3759B2 100%)",*/
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
                                <th scope="col">User</th>
                                <th scope="col">New User</th>
                                <th scope="col">Bounce Rate</th>
                                
                            </tr>
                            </thead>
                            {table.map((item, index)=>(
                            <tbody  >
                            <tr key={index} className="text-white" >
                                <td scope="row">{item.date}</td>
                                <td>{item.user}</td>
                                <td>{item.newuser}</td>
                                <td>{item.bouncerate}</td>
                               
                            
                            </tr>
                        
                        
                        
                            
                            </tbody>
                            ))}
                        </Table>
                            </Card>
                        </Col>
                        
                        
                    
                    </Card>
                </Col>
                
                </Row>

                

                <Row className="mt-4">
                  <Col >
                  <Card className="p-3">
                    <Row>
                      <Col lg={4} className=" justify-content-center d-flex align-items-center">
                       <img src={Recepient} height={50} width={50}/>
                      </Col>
                      <Col lg={8} >
               
                        <Row>
                            <Col className="">
                            <h4 className="text-black">Recipients</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="">
                            <h2 className="text-black">200</h2>
                            </Col>
                        </Row>
             
                      </Col>
                    </Row>
                  </Card>
                  </Col>

                  <Col >
                  <Card className="p-3">
                    <Row>
                      <Col lg={4} className="justify-content-center d-flex align-items-center">
                       <img src={Delivery} height={50} width={50}/>
                      </Col>
                      <Col lg={8}>
               
                    <Row>
                        <Col className="">
                        <h4 className="text-black">Email Delivered</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="">
                        <h2 className="text-black">100</h2>
                        </Col>
                    </Row>
             
                      </Col>
                    </Row>
                  </Card>
                  </Col>

                  <Col >
                  <Card className="p-3">
                    <Row>
                      <Col lg={4} className="justify-content-center d-flex align-items-center">
                       <img src={Open} height={50} width={50}/>
                      </Col>
                      <Col lg={8} >
               
                    <Row>
                        <Col className="">
                        <h4 className="text-black">Email Open</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="">
                        <h2 className="text-black">80</h2>
                        </Col>
                    </Row>
             
                      </Col>
                    </Row>
                  </Card>
                  </Col>
                  <Col >
                  <Card className="p-3">
                    <Row>
                      <Col lg={4} className="justify-content-center d-flex align-items-center">
                       <img src={Unopen} height={50} width={50}/>
                      </Col>
                      <Col lg={8} >
               
                    <Row>
                        <Col className="">
                        <h4 className="text-black">Email Unopened</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="">
                        <h2 className="text-black">10</h2>
                        </Col>
                    </Row>
             
                      </Col>
                    </Row>
                  </Card>
                  </Col>

                 
                </Row>

                <Row className="mt-4">
                <Col >
                  <Card className="p-3">
                    <Row>
                      <Col lg={4} className="justify-content-center d-flex align-items-center">
                       <img src={Click} height={50} width={50}/>
                      </Col>
                      <Col lg={8}>
               
                    <Row>
                        <Col className="">
                        <h4 className="text-black">Email clicked</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="">
                        <h2 className="text-black">50</h2>
                        </Col>
                    </Row>
             
                      </Col>
                    </Row>
                  </Card>
                  </Col>

                  <Col >
                  <Card className="p-3">
                    <Row>
                      <Col lg={4} className="justify-content-center d-flex align-items-center">
                       <img src={Unclick} height={50} width={50}/>
                      </Col>
                      <Col lg={8}>
               
                    <Row>
                        <Col className="">
                        <h4 className="text-black">Email Unclicked</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="">
                        <h2 className="text-black">50</h2>
                        </Col>
                    </Row>
             
                      </Col>
                    </Row>
                  </Card>
                  </Col>

                  <Col >
                  <Card className="p-3">
                    <Row>
                      <Col lg={4} className="justify-content-center d-flex align-items-center">
                       <img src={Bounce} height={50} width={50}/>
                      </Col>
                      <Col lg={8}>
               
                    <Row>
                        <Col className="">
                        <h4 className="text-black">Email Bounced</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="">
                        <h2 className="text-black">10</h2>
                        </Col>
                    </Row>
             
                      </Col>
                    </Row>
                  </Card>
                  </Col>
                </Row>
           
        </div>
    );
}