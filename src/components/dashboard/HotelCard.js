import React from "react";
import hotelImg from "../../assets/images/hotels/hotel_1.png";
import { Container, Row, Col } from 'reactstrap';

import { faStar, faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import "./HotelCard.css";

export default class HotelCard extends React.Component {
    constructor(props) {
        super(props);

        this.markedAsFavorite = this.markedAsFavorite.bind(this);
    }

    markedAsFavorite(){

    }

    render() {
        const hotel = this.props.hotel;

        const getStarRating = (starRating) => {
            const fullStars = Array(starRating).fill(<FontAwesomeIcon icon={faStar} color="#FFA500" />);
            const emptyStars = Array(5 - starRating).fill(<FontAwesomeIcon icon={faStar} />);
            return fullStars.concat(emptyStars);
        }

        return (
            <div className="card-container">
                {this.props.hotel &&
                    <Container>
                        <Row>
                            <Col sm="5">
                                <Container className="card-image-container">
                                    <Row>
                                        <Col>
                                            <div className="photo-stack card-thumbnail-container">
                                                <img src={hotelImg} />
                                                <img src={hotelImg} />
                                                <img src={hotelImg} />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            {getStarRating(hotel.starRating)}
                                            <span>{hotel.reviewCount}</span>
                                        </Col>
                                    </Row>
                                </Container>

                            </Col>
                            <Col sm="7">
                                <p className="card-hotel-name">{hotel.name}
                                <span><FontAwesomeIcon icon={fasHeart} className={this.props.favorite? "heart-favorite":"heart-gray"}/></span></p>
                                <p className="card-description">{hotel.description}</p>
                                <p className="card-price">
                                    <span>$35</span><span>/night</span> <span> $251 total</span>
                                </p>

                            </Col>
                        </Row>
                    </Container>
                }
            </div>
        )
    }
}