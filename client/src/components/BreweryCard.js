import React from "react";
import { Row, Col, Card, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function BreweryCard({
  name,
  logo,
  website,
  address,
  favorites,
  phone,
  brewery_state,
  image,
  setBrewery,
}) {
  return (
    <>
      <Col sm={12} md={12} lg={6} className="gap-3 mb-5 mt-5">
        <Card
          as={Link}
          className="card-div mx-auto"
          onClick={(e) => setBrewery(id)}
          to={`/brewery/${id}`}
        >
          <Card.Img
            className="img-responsive card-img-filter"
            src={image}
            alt=""
          />
          <Card.ImgOverlay className="card-img-o">
            <div className="p-4 mt-2 flex-column d-flex justify-content-center text-light">
              <Card.Title className="update_title_color">
                <h3>{name}</h3>
              </Card.Title>
              <Card.Text className="p-1">{address}</Card.Text>
              <Card.Text className="p-1">{website}</Card.Text>
              <Card.Text className="card-p-text p-1">{phone}</Card.Text>
              <Button
                variant="light"
                className="mx-auto"
                as={Link}
                onClick={(e) => setBrewery(id)}
                to={`/brewery/${id}`}
              >
                View Beers On Tap!
                {/* <p className="p-2 text-light">On Tap Now!</p> */}
              </Button>
            </div>

            <div className="card-footer-div bg-light text-muted ">
              <div className="card-b-logo bg-white mx-auto">
                <Image className="" src={logo} alt="" />
              </div>
            </div>
          </Card.ImgOverlay>
        </Card>
      </Col>
    </>
  );
}

export default BreweryCard;
