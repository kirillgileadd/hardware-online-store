import React, {FC} from 'react';
import {IDevice} from "../types";
import {Button, Card, Col, Image} from "react-bootstrap";
import styled from "styled-components";
import star from '../assets/img/star.svg'
import {useNavigate} from "react-router-dom";
import {RouteName} from "../routes";

interface DeviceItemProps {
    device: IDevice
}

const DeviceItemCard = styled(Card)`
  cursor: pointer;
`

const DeviceItem: FC<DeviceItemProps> = ({device}) => {
    const navigate = useNavigate()
    console.log(device.id);

    return (
        <Col md={3}>
            <DeviceItemCard className='m-0 p-0'>
                <DeviceItemCard.Img
                    src={device.img}
                    onClick={() => navigate(RouteName.DEVICE_PAGE + '/' + device.id)}
                />
                <DeviceItemCard.Body className='p-2'>
                    <div
                        onClick={() => navigate(RouteName.DEVICE_PAGE + '/' + device.id)}
                    >
                        <DeviceItemCard.Title style={{textOverflow: 'ellipsis'}}>
                            {device.name}
                        </DeviceItemCard.Title>
                    </div>
                    <DeviceItemCard.Text>
                        Apple...
                    </DeviceItemCard.Text>
                    <div className='d-flex justify-content-start align-items-center mb-2'>
                        <div className='m-0 p-0'>{device.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                    <Button variant="primary" style={{width: "100%"}}>Add to Cart</Button>
                </DeviceItemCard.Body>
            </DeviceItemCard>
        </Col>
    );
};

export default DeviceItem;