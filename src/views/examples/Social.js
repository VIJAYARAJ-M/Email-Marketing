import React from "react"
import {Row, Col, Card} from "reactstrap"
import ReactApexChart from "react-apexcharts"
import Twitter from "../../assets/img/brand/Twitter.png"
import Person from "../../assets/img/brand/person.png"
import New from "../../assets/img/brand/New user.png"
import Fav from "../../assets/img/brand/favorite.png"
import Insta from "../../assets/img/brand/Insta.png"
import Like from "../../assets/img/brand/Likes.png"
import Post from "../../assets/img/brand/Post.png"
import Linked from "../../assets/img/brand/Linked.png"
import Click from "../../assets/img/brand/Clicks.png"
import Facebook from "../../assets/img/brand/Facebook.png"
import Commands from "../../assets/img/brand/Commands.png"

const seriescolumn= [{
    name: 'Twitter',
    data: [44, 55, 41, 67, 22, 43, 21, 49]
  }, {
    name: 'Instagram',
    data: [13, 23, 20, 8, 13, 27, 33, 12]
  }, {
    name: 'LinkedIn',
    data: [11, 17, 15, 15, 21, 14, 15, 13]
  },{
    name: 'Facebook',
    data: [11, 17, 15, 15, 21, 14, 15, 13]
  }]

 const optionscolumn= {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      stackType: '100%',
      toolbar:{
        show:!1,
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'App', 'May', 'Jun',
        'Jul', 'Aug'
      ],
      style:{
        color:"white",
      },labels:{
        style:{
          colors:"white",
          
        },
  },
    },
    yaxis: {
        title: {
          text: 'Count',
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
    legend: {
      position: 'right',
      offsetX: 0,
      offsetY: 50,
      labels: {
    
        colors:"white",
        
        }
    },
  }
export default function Social(){
    return(
        <div>
            <h3>Social</h3>
            <Row>
                <Col lg={6}>
                <Card className="p-3" style={{backgroundColor:"#002151"}}>
                    <Row>
                        <Col lg={1}>
                          <img src={Twitter} height={30}/>
                        </Col>
                        <Col lg={11}>
                          <h3 className="text-white">Twitter Status</h3>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                        <Card style={{backgroundColor:"#19335A"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Person} height={50}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white">Followers</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h1 className="text-white">20,000</h1>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{backgroundColor:"#19335A"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={New} height={50}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white"> New Followers</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h1 className="text-white">167</h1>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                        <Card style={{backgroundColor:"#19335A"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Twitter} height={50}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white">New Tweets</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h1 className="text-white">200</h1>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{backgroundColor:"#19335A"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Fav} height={50}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white"> Favorites</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h1 className="text-white">4,000</h1>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                    </Row>
                </Card>
                </Col>
                <Col lg={6}>
                <Card className="p-3" style={{backgroundColor:"#002151"}}>
                    <Row>
                        <Col lg={1}>
                          <img src={Insta} height={30}/>
                        </Col>
                        <Col lg={11}>
                          <h3 className="text-white">Instagram</h3>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                        <Card style={{backgroundColor:"#19335A"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Person} height={50}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white">Fans</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h1 className="text-white">20,000</h1>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{backgroundColor:"#19335A"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={New} height={50}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white"> New Fans</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h1 className="text-white">167</h1>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                        <Card style={{backgroundColor:"#19335A"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Like} height={50}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white">Likes</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h1 className="text-white">200</h1>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{backgroundColor:"#19335A"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Post} height={50}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white"> Post Reach</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h1 className="text-white">4,000</h1>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                    </Row>
                </Card>
                </Col>
            </Row>

            <Row className="mt-3">
            <Col lg={6}>
                <Card className="p-3" style={{backgroundColor:"#002151"}}>
                    <Row>
                        <Col lg={1}>
                          <img src={Linked} height={30}/>
                        </Col>
                        <Col lg={11}>
                          <h3 className="text-white">LinkedIn Status</h3>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                        <Card style={{backgroundColor:"#19335A"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Person} height={50}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white">Followers</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h1 className="text-white">3,000</h1>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{backgroundColor:"#19335A"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={New} height={50}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white"> New Followers</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h1 className="text-white">12</h1>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                        <Card style={{backgroundColor:"#19335A"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Click} height={50}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white">Clicks</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h1 className="text-white">200</h1>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{backgroundColor:"#19335A"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Like} height={50}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white"> Likes</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h1 className="text-white">400</h1>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                    </Row>
                </Card>
                </Col>
                <Col lg={6}>
                <Card className="p-3" style={{backgroundColor:"#002151"}}>
                    <Row>
                        <Col lg={1}>
                          <img src={Facebook} height={30}/>
                        </Col>
                        <Col lg={11}>
                          <h3 className="text-white">Facebook Status</h3>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                        <Card style={{backgroundColor:"#19335A"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Person} height={50}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white">Fans</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h1 className="text-white">20,000</h1>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{backgroundColor:"#19335A"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={New} height={50}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white"> New Fans</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h1 className="text-white">167</h1>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                        <Card style={{backgroundColor:"#19335A"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Like} height={50}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white">Likes</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h1 className="text-white">200</h1>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{backgroundColor:"#19335A"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Commands} height={50}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white">Commands</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h1 className="text-white">40</h1>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                    </Row>
                </Card>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col>
                <Card className="p-3" style={{backgroundColor:"#002151"}}>
                <ReactApexChart options={optionscolumn} series={seriescolumn} type="bar" height={350} />
                </Card>
                </Col>
            </Row>
        </div>
    );
}