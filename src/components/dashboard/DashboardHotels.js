import React from "react";
import { Container, Row, Col } from 'reactstrap';
import HotelCard from "./HotelCard";
import Map from "../map/Map";

import "./HotelCard.css";

export default class DashboardHotels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hotels: [],
            favoriteHotels: []
        };
    }

    componentDidMount() {
        const hotels = [
            {
                id: 1,
                name: "Exaple hotel",
                description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                starRating: 3,
                reviewCount: 95
            },
            {
                id: 2,
                name: "Exaple hotel",
                description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                starRating: 5,
                reviewCount: 215
            },
            {
                id: 3,
                name: "Exaple hotel",
                description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                starRating: 2,
                reviewCount: 21
            },
        ];

        // Ids of the favorite hotels
        const favoriteHotels = [2];

        this.setState({ hotels, favoriteHotels });
    }

    render() {
        return (
            <div>
                {this.state.hotels &&
                    <Container>
                        <Row>
                            <Col xs="6">
                                {this.state.hotels.map(hotel => {
                                    return (
                                        <div className="hotel-card-container">
                                            <HotelCard hotel={hotel} 
                                            favorite={this.state.favoriteHotels.includes(hotel.id)} />
                                        </div>
                                    );
                                })}
                            </Col>
                            <Col xs="6">
                                <Map />
                            </Col>
                        </Row>

                        <Row>

                        </Row>
                    </Container>
                }
            </div>
        )
    }
}