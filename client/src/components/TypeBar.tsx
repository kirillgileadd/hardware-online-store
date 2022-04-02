import React, {FC, useContext} from 'react';
import {ListGroup} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context, ContextInterface} from "../index";
import styled from "styled-components";

const TypeItem = styled(ListGroup.Item)`
    cursor: pointer;
`

const TypeBar: FC = observer(() => {
    const {device} = useContext(Context) as ContextInterface
    return (
        <ListGroup>
            {device.types.map((type) =>
                <TypeItem
                    onClick={() => device.setSelectedType(type)}
                    active={type.id === device.selectedType?.id}
                    key={type.id}
                >{type.name}
                </TypeItem>)
            }
        </ListGroup>
    );
});

export default TypeBar;