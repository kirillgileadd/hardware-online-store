import React, {FC} from 'react';
import {NavLink, NavLinkProps} from "react-router-dom";
import styled from "styled-components";


const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
`
const MyNavLink: FC<NavLinkProps> = (props) => {
    return <StyledNavLink {...props} >{props.children}</StyledNavLink>
};

export default MyNavLink;