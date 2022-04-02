import React, {FC} from 'react';
import {Button, Card, Col, Container, Image, ListGroup, Row} from "react-bootstrap";
import star from '../assets/img/star.svg'
import styled from "styled-components";

const DeviceDescriptionItem = styled(Card)`
  border: 0;
`

const DevicePage: FC = () => {
    const device = {
        id: 1,
        name: 'Pro MAX',
        price: 10000,
        img: 'https://apl-box.com/wp-content/uploads/2021/09/iphone-13-pink-select-2021.png',
        rating: 5
    }
    const description = [
        {id: 1, title: 'First', description: 'SIM2'},
        {id: 2, title: 'Second', description: 'SIM2'}
    ]
    return (
        <Container className='mt-3'>
            <h3>{device.name}</h3>
            <div className='d-flex'>
                <div>{device.rating}</div>
                <Image src={star}/>
            </div>
            <Row>
                <Col md={9}>
                    <Row>
                        <Col md={5}>
                            <Image width={400} src={device.img}/>
                        </Col>
                        <Col md={7}>
                            <h5 className='mb-2'>Specifications</h5>
                            <ListGroup>
                                {description.map(info =>
                                    <DeviceDescriptionItem key={info.id}>
                                        <DeviceDescriptionItem.Body className='d-flex justify-content-between py-1 px-0'>
                                            <DeviceDescriptionItem.Title className='mb-0'>
                                                {info.title}:
                                            </DeviceDescriptionItem.Title>
                                            <DeviceDescriptionItem.Text>
                                                {info.description}
                                            </DeviceDescriptionItem.Text>
                                        </DeviceDescriptionItem.Body>
                                    </DeviceDescriptionItem>
                                )}
                            </ListGroup>
                        </Col>
                    </Row>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                            <h2>{device.price}$</h2>
                            <Button>Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default DevicePage;