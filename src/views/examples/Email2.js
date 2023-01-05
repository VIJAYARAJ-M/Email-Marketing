import React from "react"
import {Row, Col, Card,CardHeader,Table} from "reactstrap"
import ReactApexChart from "react-apexcharts"

const seriesarea= [{
  name: 'bounce',
  data: [31, 40, 28, 51, 42, 109, 100]
}, {
  name: ' block',
  data: [11, 32, 45, 32, 34, 52, 41]
}]
const optionsarea= {
  chart: {
    height: 350,
    type: 'area',
    toolbar:{
      show:!1,
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'year',
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    labels:{
      style:{
        colors:"white",
        
      },
},
  },
  yaxis:{
    labels:{
      style:{
        colors:"white",
        
      },
},
  },
  legend: {
    display: true,
    position: "bottom",
   
  labels: {
     colors:"white",
  }
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
}
const table = [{
  
  name :"Brand",
  email :"995",
  open:"40%",
  click:"2.4%",
  unsuncribed:"1.5%",
  bounced:"2.54%",
  time:"oct-16-2022",
 
},
{
  name :"Brand",
  email :"995",
  open:"40%",
  click:"2.4%",
  unsuncribed:"1.5%",
  bounced:"2.54%",
  time:"oct-16-2022",
},
{
  name :"Brand",
  email :"995",
  open:"40%",
  click:"2.4%",
  unsuncribed:"1.5%",
  bounced:"2.54%",
  time:"oct-16-2022",
},
{
  name :"Brand",
  email :"995",
  open:"40%",
  click:"2.4%",
  unsuncribed:"1.5%",
  bounced:"2.54%",
  time:"oct-16-2022",
},
{
  name :"Brand",
  email :"995",
  open:"40%",
  click:"2.4%",
  unsuncribed:"1.5%",
  bounced:"2.54%",
  time:"oct-16-2022",
},
{
  name :"Brand",
  email :"995",
  open:"40%",
  click:"2.4%",
  unsuncribed:"1.5%",
  bounced:"2.54%",
  time:"oct-16-2022",
},

]
export default function email2(){
    return(
        <div>
            <h2>Email2</h2>

            <Row className="mt-3">
                <Col>
                  <Card className="p-3" style={{backgroundColor:"#002151"}}>
                    <Row>
                        <Col className="d-flex justify-content-center ">
                        <h4 className="text-white">Replies</h4>
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
                        <h4 className="text-white">Bounce Rate</h4>
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
                        <h4 className="text-white">Polls</h4>
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
                        <h4 className="text-white">Blocked</h4>
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
              <Card className="p-2" style={{backgroundColor:"#002151"}}>
                <ReactApexChart options={optionsarea} series={seriesarea} type="area" height={350} />
              </Card>
              </Col>
              <Col lg={6}>
             
             <Card className="" style={{boxShadow:"",backgroundColor:"#002151",height:"379px",
             /*backgroundImage:"linear-gradient(to right, #133D7A 0%, #3759B2 100%)",*/
             border:"0px"
             /*boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"*/
             /*boxShadow:"inset 2px 2px 5px #e7e7e7, inset -3px -3px 7px #bbbec3",backgroundColor:"#F8F8F8"*/}}>
             <CardHeader className="border-0" 
             style={{ backgroundColor:"#002151",/*backgroundImage:"linear-gradient(to right, #133D7A 0%, #3759B2 100%)",*/
             border:"0px"}}>
                 <Row className="align-items-center">
                 <div className="col">
                     <h4 className="mb-0 text-white">Campaigns</h4>
                 </div>
                 
                 </Row>
             
             
             </CardHeader>
             <Table className="align-items-center  table-flush" responsive >
             <thead className="">
             <tr className="" style={{color:"#FFB178"}}>
                 <th scope="col">Name</th>
                 <th scope="col">Email Sent</th>
                 <th scope="col">Open Rate</th>
                 <th scope="col">Click Rate</th>
                 <th scope="col">Unsubscribed</th>
                 <th scope="col">Bounced</th>
                 <th scope="col">Sent Time</th>
                 
             </tr>
             </thead>
             {table.map((item, index)=>(
             <tbody  >
             <tr key={index} className="text-white" >
                 <td scope="row">{item.name}</td>
                 <td scope="row">{item.email}</td>
                 <td>{item.click}</td>
                 <td>{item.open}</td>
                 <td>{item.unsuncribed}</td>
                 <td>{item.bounced}</td>
                 <td>{item.time}</td>
                
             
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