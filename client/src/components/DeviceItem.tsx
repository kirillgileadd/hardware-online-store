import React, {FC} from 'react';
import {IDevice} from "../types";
import {Card, Col, Image} from "react-bootstrap";
import styled from "styled-components";
import star from '../assets/img/star.svg'
import {useNavigate} from "react-router-dom";

interface DeviceItemProps  {
    device: IDevice
}

const DeviceItemCard = styled(Card)`
    cursor: pointer;
`

const DeviceItem:FC<DeviceItemProps> = ({device}) => {
    const navigate = useNavigate()

    return (
        <Col md={3}>
            <DeviceItemCard className='m-0 p-0'>
                <DeviceItemCard.Img src={device.img}/>
                <DeviceItemCard.Body className='p-2 d-flex justify-content-between'>
                    <div>
                        <DeviceItemCard.Title style={{textOverflow: 'ellipsis'}}>
                            {device.name}
                        </DeviceItemCard.Title>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='m-0 p-0'>{device.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </DeviceItemCard.Body>
                <DeviceItemCard.Text className='px-2 pb-2'>
                    Apple...
                </DeviceItemCard.Text>
            </DeviceItemCard>
        </Col>
    );
};

export default DeviceItem;