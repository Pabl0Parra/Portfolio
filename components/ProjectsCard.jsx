import React from "react";

import { Card, CardBody, Col, Button } from "reactstrap";

import { Fade } from "react-reveal";

const ProjectsCard = ({ data }) => {
  return (
    <Col lg="6">
      <Fade bottom duration={2000}>
        <Card className="shadow-lg--hover shadow mt-4 grow">
          <CardBody>
            <div className="d-flex px-3">
              <div className="pl-4 ">
                <h3 className="text-center">{data.name}</h3>
                <img
                  src={data.image}
                  alt="project image"
                  className="img-fluid w-50 margin"
                />
                <p className="description mt-3 text-center">{data.desc}</p>
                <div className="margin-btn">
                  {data.github ? (
                    <Button
                      className="btn-icon "
                      color="github"
                      href={data.github}
                      target="_blank"
                      rel="noopener"
                      aria-label="Github"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-github" />
                      </span>
                    </Button>
                  ) : null}
                  {data.link ? (
                    <Button
                      className="btn-icon"
                      color="success"
                      href={data.link}
                      target="_blank"
                      rel="noopener"
                      aria-label="Twitter"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-arrow-right mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">Demo</span>
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ProjectsCard;
