import React from "react"
import { Row,Col,Card,CardHeader,Table } from "reactstrap";

const table = [{
    id:"2743696",
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

export default function Email4(){
    return(
        <div>
            <h4>Email4</h4>
            <Row>
                <Col>
                <Card className="" style={{boxShadow:"",backgroundColor:"#002151",height:"240px",
                            /*backgroundImage:"linear-gradient(to right, #133D7A 0%, #3759B2 100%)",*/
                            border:"0px"
                            /*boxShadow:"10px 10px 15px #9b9b9b, -10px -10px 15px #ffffff"*/
                            /*boxShadow:"inset 2px 2px 5px #e7e7e7, inset -3px -3px 7px #bbbec3",backgroundColor:"#F8F8F8"*/}}>
                            <CardHeader className="border-0" 
                            style={{ backgroundColor:"#002151",/*backgroundImage:"linear-gradient(to right, #133D7A 0%, #3759B2 100%)",*/
                            border:"0px"}}>
                                <Row className="align-items-center">
                                <div className="col">
                                    <h4 className="mb-0 text-white">Campaign Details</h4>
                                </div>
                                
                                </Row>
                            
                            
                            </CardHeader>
                            <Table className="align-items-center  table-flush" responsive >
                            <thead className="">
                            <tr className="" style={{color:"#FFB178"}}>
                                <th scope="col">ID</th>
                                <th scope="col">Campaigns</th>
                                <th scope="col">Recipients</th>
                                <th scope="col">Opens</th>
                                <th scope="col">Clicks</th>
                                <th scope="col">Unsubs</th>
                                <th scope="col">Bounces</th>
                                <th scope="col">Blocks</th>
                                <th scope="col">Replies</th>
                               
                            </tr>
                            </thead>
                            {table.map((item, index)=>(
                            <tbody  >
                            <tr key={index} className="text-white" >
                                <td scope="row" href="#">{item.date}</td>
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
