import React from "react";

import { Card, Col, Row, Container } from "reactstrap";

import SocialLinks from "../components/SocialLinks";
import Image from "next/image";

const GithubProfileCard = ({ prof }) => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img
                src="https://res.cloudinary.com/dcwx2biey/image/upload/v1666023390/github-pic_wgnovp.jpg"
                style={{ width: "200px" }}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Reach Out to me!</h2>
              <p className="lead text-white mt-3">
                DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR
                ALL{" "}
              </p>
              <a href="mailto: frontend.bcn.dev@gmail.com">
                <i className="fa fa-envelope text-white mr-2" />
              </a>
              <p className="text-white mt-3">
                <em>
                  “Strive not to be a success, but rather to be of value.” -
                  Albert Einstein
                </em>
              </p>
              {/* <div className="mb-3 icon-shape  rounded text-info"></div> */}
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
