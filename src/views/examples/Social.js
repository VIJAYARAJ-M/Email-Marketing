import React from "react"
import {Row, Col, Card,Button} from "reactstrap"
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


 const seriesstack= [{
    name: 'Twitter',
    data: [44, 55, 41, 37, 22]
  }, {
    name: 'Instagram',
    data: [53, 32, 33, 52, 13]
  }, {
    name: 'LinkedIn',
    data: [12, 17, 11, 9, 15]
  }, {
    name: 'Facebook',
    data: [9, 7, 5, 8, 6]
  }, ]
 const optionsstack= {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar:{
        show:!1,
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: '13px',
              fontWeight: 900
            }
          }
        }
      },
    },
    stroke: {
      width: 0,
      colors: ['#fff']
    },
    title: {
      text: 'Social Values',
      style:{
        color:"white",
      }
    },
    xaxis: {
        categories: ['01-02-2023', '01-03-2023', '01-04-2023', '01-05-2023',
        '01-06-2023'
      ],
      labels: {
        formatter: function (val) {
          return val + "K"
        },
        style:{
            colors:"white",
            
          },
      }
    },
    yaxis: {
        title: {
          text: '',
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
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "K"
        }
      }
    },
    fill: {
      opacity: 1
    },
    legend: {
        position: 'right',
        offsetX: -10,
        offsetY: 50,
        labels: {
      
          colors:"white",
          
          }
      },
  }
export default function Social(){
    return(
        <div>
            <Row>
                <Col className="d-flex justify-content-center ">
                <h2 className="text-white">Social Media Campaign</h2>
                </Col>
            </Row>
            <Row  className="">
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
                      
                       
                        <Col lg={6} className="d-flex justify-content-end align-items-center">
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

            <Row className="mt-1">
                <Col lg={4}>
                <Card className="p-3" style={{backgroundColor:"#002151"}}>
                    <Row>
                        <Col lg={2}>
                          <img src={Twitter} height={30}/>
                        </Col>
                        <Col lg={10}>
                          <h3 className="text-white">Twitter Status</h3>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                        <Card style={{backgroundColor:"#19335A"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Person} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white">Followers</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h4 className="text-white">20,000</h4>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{backgroundColor:"#19335A"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={New} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white"> New Followers</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h4 className="text-white">167</h4>
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
                                 <img src={Twitter} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white">New Tweets</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h4 className="text-white">200</h4>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{backgroundColor:"#19335A"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Fav} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white"> Favorites</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h4 className="text-white">4,000</h4>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                    </Row>
                </Card>
                </Col>
                <Col lg={4}>
                <Card className="p-3" style={{backgroundColor:"#002151"}}>
                    <Row>
                        <Col lg={2}>
                          <img src={Insta} height={30}/>
                        </Col>
                        <Col lg={10}>
                          <h3 className="text-white">Instagram Status</h3>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                        <Card style={{backgroundColor:"#19335A"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Person} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white">Fans</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h4 className="text-white">20,000</h4>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{backgroundColor:"#19335A"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={New} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white"> New Fans</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h4 className="text-white">167</h4>
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
                                 <img src={Like} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white">Likes</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h4 className="text-white">200</h4>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{backgroundColor:"#19335A"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Post} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white"> Post Reach</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h4 className="text-white">4,000</h4>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                    </Row>
                </Card>
                </Col>
                <Col lg={4}>
                <Card className="p-3" style={{backgroundColor:"#002151"}}>
                    <Row>
                        <Col lg={2}>
                          <img src={Linked} height={30}/>
                        </Col>
                        <Col lg={10}>
                          <h3 className="text-white">LinkedIn Status</h3>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                        <Card style={{backgroundColor:"#19335A"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Person} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white">Followers</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h4 className="text-white">3,000</h4>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{backgroundColor:"#19335A"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={New} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white"> New Followers</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h4 className="text-white">12</h4>
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
                                 <img src={Click} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white">Clicks</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h4 className="text-white">200</h4>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{backgroundColor:"#19335A"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Like} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white"> Likes</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h4 className="text-white">400</h4>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                    </Row>
                </Card>
                </Col>
            </Row>

            <Row className="mt-2">
           
                <Col lg={4}>
                <Card className="p-3" style={{backgroundColor:"#002151"}}>
                    <Row>
                        <Col lg={2}>
                          <img src={Facebook} height={30}/>
                        </Col>
                        <Col lg={10}>
                          <h3 className="text-white">Facebook Status</h3>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                        <Card style={{backgroundColor:"#19335A"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Person} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white">Fans</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h4 className="text-white">20,000</h4>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{backgroundColor:"#19335A"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={New} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white"> New Fans</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h4 className="text-white">167</h4>
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
                                 <img src={Like} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white">Likes</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h4 className="text-white">200</h4>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{backgroundColor:"#19335A"}}>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                 <img src={Commands} height={30}/>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h5 className="text-white">Commands</h5>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                <h4 className="text-white">40</h4>
                                </Col>
                                
                            </Row>
                            
                        </Card>
                        </Col>
                    </Row>
                </Card>
                </Col>
                <Col lg={8}>
                <Card className="p-3" style={{backgroundColor:"#002151"}}>
                <ReactApexChart options={optionsstack} series={seriesstack} type="bar" height={213} />
    
                </Card>
                </Col>
            </Row>

            

            
        </div>
    );
}