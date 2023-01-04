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
import Click from "../../../src/assets/img/brand/Clicks.png"
import Forward from "../../../src/assets/img/brand/Forward.png"
import Count from "../../../src/assets/img/brand/Handle.png"
import BounceCount from "../../../src/assets/img/brand/BounceCount.png"
import Unique from "../../../src/assets/img/brand/UniqueClick.png"

import Hard from "../../../src/assets/img/brand/Hardness.png"


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
const seriesdount= [44, 5]

const optionsdount= {
  chart: {
    width: 380,
    type: 'pie',
  },
  stroke: {
    width: 0
  },
  title: {
    text: 'Opened Vs Unsubscribed',
    style:{
      color:"white",
    }
  },
  labels: ['Opened', 'Unsubscribed'],
  colors:["#00cccc", "#007bff"],
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

const series11= [44, 5]



const options11= {
  chart: {
    width: 380,
    type: 'pie',
  },
  title: {
    text: 'Delivered Vs Unsubscribed',
    style:{
      color:"white",
    }
  },
  stroke: {
    width: 0
  },
  labels: ['Delivered', 'Unsubscribed'],
  colors:["#6f42c1", "#00cccc",],
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
  name: 'Hard Bounce',
  type: 'column',
  data: [40, 50, 41, 67, 22, 41, 20, 35, 75, 32, 25, 16]
}, {
  name: 'Soft bounce',
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
    text: 'Bounce Categories',
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
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 
  'Jul', 'Aug', 'Sep', 'Oct', 'Nev', 'Dec'],
  xaxis: {
    type: 'year',
    labels:{
      style:{
        colors:"white",
        
      },
},
  },
  yaxis: [{
    title: {
      text: 'Hard Bounce Count',
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
      text: 'Soff bounce count',
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

export default function Model4(){

    return(
        <div>

            <Row className="mt-4">
                <Col lg={3}>
                 
                  <Card className="" style={{backgroundColor:"#002151"}}>
                  <Row >
                  
                    <Col lg={4} className="d-flex justify-content-center align-items-center">
                    <img src={Hard} height={40} width={40}/>
                    </Col>
                    <Col lg={8}>
                    <Row>
                      <h4 className="text-white">Hard bounce count Rate(%)</h4>
                    </Row>
                    <Row className="mt-2">
                      <h1 className="text-white">40%</h1>
                    </Row>
                    </Col>
                    
                  </Row>
                  
                  </Card>
                  <Card className=" mt-3" style={{backgroundColor:"#002151"}}>
                  <Row >
                  
                    <Col lg={4} className="d-flex justify-content-center align-items-center">
                    <img src={BounceCount} height={40} width={40}/>
                    </Col>
                    <Col lg={8}>
                    <Row>
                      <h4 className="text-white">Soft bounce count Rate(%)</h4>
                    </Row>
                    <Row className="mt-2">
                      <h1 className="text-white">10%</h1>
                    </Row>
                    </Col>
                    
                  </Row>
                  
                  </Card>
                  <Card className=" mt-3" style={{backgroundColor:"#002151"}}>
                  <Row >
                  
                    <Col lg={4} className="d-flex justify-content-center align-items-center">
                    <img src={Unique} height={40} width={40}/>
                    </Col>
                    <Col lg={8}>
                    <Row>
                      <h4 className="text-white">Unique click count Rate(%)</h4>
                    </Row>
                    <Row className="mt-2">
                      <h1 className="text-white">40%</h1>
                    </Row>
                    </Col>
                    
                  </Row>
                  
                  </Card>
                 
                </Col>
                <Col lg={9}>

                <Row>
                  <Col>
                  <Card className="" style={{backgroundColor:"#002151"}}>
                  <Row className="">
                  
                    <Col lg={4} className="d-flex justify-content-center align-items-center">
                    <img src={Click} height={40} width={40}/>
                    </Col>
                    <Col lg={8}>
                    <Row>
                      <h4 className="text-white">Click through Rate(%)</h4>
                    </Row>
                    <Row className="mt-2">
                      <h1 className="text-white">30%</h1>
                    </Row>
                    </Col>
                    
                  </Row>
                  
                  </Card>
                  </Col>
                  <Col>
                  <Card className="" style={{backgroundColor:"#002151"}}>
                  <Row >
                  
                    <Col lg={4} className="d-flex justify-content-center align-items-center">
                    <img src={Forward} height={40} width={40}/>
                    </Col>
                    <Col lg={8}>
                    <Row>
                      <h4 className="text-white">Forwarding Rate(%)</h4>
                    </Row>
                    <Row className="mt-2">
                      <h1 className="text-white">20%</h1>
                    </Row>
                    </Col>
                    
                  </Row>
                  
                  </Card>
                  </Col>

                  <Col>
                  <Card className="" style={{backgroundColor:"#002151"}}>
                  <Row >
                  
                    <Col lg={4} className="d-flex justify-content-center align-items-center">
                    <img src={Count} height={40} width={40}/>
                    </Col>
                    <Col lg={8}>
                    <Row>
                      <h4 className="text-white">Forward count Rate(%)</h4>
                    </Row>
                    <Row className="mt-2">
                      <h1 className="text-white">40%</h1>
                    </Row>
                    </Col>
                    
                  </Row>
                  
                  </Card>
                  </Col>
                </Row>
                
                <Row className="mt-2">
                  <Col>
                    <Card className="p-3" style={{backgroundColor:"#002151"}}>
                     <ReactApexChart options={options111} series={series111} type="line" height={220} />
                    </Card>
                  </Col>
                </Row>
                
                </Col>
            </Row>

           

          
          
           
        </div>
    );
}