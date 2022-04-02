import React, {FC, useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context, ContextInterface} from "../index";
import {Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList:FC = observer(() => {
    const {device} = useContext(Context) as ContextInterface
    return (
        <Row className='mt-2'>
            {device.devices.map(dev =>
                <DeviceItem key={dev.id} device={dev}/>
            )}
        </Row>
    );
});

export default DeviceList;