import React, { useState } from "react";
import Header from "../component/Header/Header";
import videoBg from "../video/video.mp4";
import "./HomeStyle.scss";
import { Button, Form, Input, Select } from "antd";
import CardDes from "../component/CradDes/CardDes";
import CardTrip from "../component/CardTrip/CardTrip";
import {
  momth,
  bsetTrips,
  cate,
  des,
  destinations,
  sort,
  news,
} from "../dataMaps/Datamap";
import CardNew from "../component/CardNew/CardNew";
import Footer from "../component/Footer/Footer";
function Home() {
  const [form] = Form.useForm();
  const [searchMore, setSearchMore] = useState(false);

  return (
    <>
      <Header />
      <div className="home-page">
        <div className="banner">
          <video src={videoBg} autoPlay muted loop className="video-bg" />
          <div className="bg-overplay"></div>
          <div className="content-banner container">
            <div className="title-content">Where do you want to go?</div>
            <div className="sub-title-content">
              Trips, experiences, and places. All in one service
            </div>
            <div className="form-content">
              <Form form={form}>
                <div className="form-items container">
                  <Form.Item>
                    <Input placeholder="Destination, City" />
                  </Form.Item>
                  <Form.Item>
                    {/* <Input placeholder="Destination, City" /> */}
                    <Select placeholder="Any Momth" defaultValue={0}>
                      {momth?.map((i) => (
                        <Select.Option value={i.id}>{i.name}</Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <Select placeholder="Sort By Date" defaultValue={1}>
                      {sort?.map((i) => (
                        <Select.Option value={i.id}>{i.name}</Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <Button>Search</Button>
                  </Form.Item>
                </div>
                <>
                  {searchMore ? (
                    <div className="form-items container">
                      <Form.Item>
                        {/* <Input placeholder="Destination, City" /> */}
                        <Select placeholder="Any Momth" defaultValue={1}>
                          {cate?.map((i) => (
                            <Select.Option value={i.id}>{i.name}</Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                      <Form.Item>
                        <Select placeholder="Sort By Date" defaultValue={1}>
                          {des?.map((i) => (
                            <Select.Option value={i.id}>{i.name}</Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                      <Form.Item>
                        <Input placeholder="Max budget ex. 500" />
                      </Form.Item>
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              </Form>
              <p
                className="more-btn"
                onClick={() => setSearchMore(!searchMore)}
              >
                Addvanced Search
              </p>
            </div>
          </div>
        </div>
        <div className="destinations">
          <div className="container">
            <div className="title-des">Popular Destinations</div>
            <div className="sub-title-des">
              World's best tourist destinations
            </div>
          </div>
          <div className="card-destinations container">
            {destinations?.map((i) => (
              <CardDes img={i.img} key={i.id} name={i.name} />
            ))}
          </div>
        </div>
        <div className="best-trip">
          <div className="container">
            <div className="title-des">Best Value Trips</div>
            <div className="sub-title-des">Best offers trips from us</div>
          </div>
          <div className="best-trip-card container">
            {bsetTrips?.map((i) => (
              <CardTrip
                key={i.id}
                img={i.img}
                name={i.name}
                price={i.price}
                des={i.des}
                rate={i.rate}
                view={i.view}
                date={i.date}
              />
            ))}
          </div>
        </div>
        <div className="why-choose">
          <div className="container">
            <div className="title-des">Why Choose Us</div>
            <div className="sub-title-des">
              Here are reasons you should plan trip with us
            </div>
          </div>
          <div className="content-why container">
            <div className="content">
              <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png" />
              <p className="title-content">Handpicked Hotels</p>
              <p className="sub-title-content">
                Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa
              </p>
            </div>
            <div className="content">
              <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png" />
              <p className="title-content">World Class Service</p>
              <p className="sub-title-content">
                Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa
              </p>
            </div>
            <div className="content">
              <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png" />
              <p className="title-content">Best Price Guarantee</p>
              <p className="sub-title-content">
                Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa
              </p>
            </div>
          </div>
        </div>
        <div className="img-content"></div>
        <div className="new">
          <div className="container">
            <div className="title-des">Articles & Tips</div>
            <div className="sub-title-des">
              Explore some of the best tips from around the world
            </div>
          </div>
          <div className="new-card container">
            {news?.map((i) => (
              <CardNew
                key={i.id}
                img={i.img}
                date={i.date}
                name={i.name}
                content={i.content}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
