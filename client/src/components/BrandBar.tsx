import React, {FC, useContext} from 'react';
import {Context, ContextInterface} from "../index";
import {Card, Stack} from "react-bootstrap";
import styled from "styled-components";
import {observer} from "mobx-react-lite";

const BrandItem = styled(Card)`
    cursor: pointer;
`

const BrandBar:FC = observer(() => {
    const {device} = useContext(Context) as ContextInterface

    console.log(device.selectedBrand);
    return (
        <Stack  direction="horizontal" className='d-flex flex-wrap'>
            {device.brands.map(brand =>
                <BrandItem
                    className='m-1 mt-0'
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand?.id ? 'danger' : 'light'}
                    key={brand.id}
                >
                    <BrandItem.Body className='p-2'>
                        <BrandItem.Title className='m-0'>
                            {brand.name}
                        </BrandItem.Title>
                    </BrandItem.Body>
                </BrandItem>
            )}
        </Stack>
    );
});

export default BrandBar;