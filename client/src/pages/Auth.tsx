import React, {FC} from 'react';
import {Button, Card, Container, Form, Row, Stack} from "react-bootstrap";
import {useLocation} from "react-router-dom";
import {RouteName} from "../routes";
import MyNavLink from "../components/UI/MyNavLink";

const Auth: FC = () => {
    const isLogin = useLocation().pathname === RouteName.AUTH

    return (
        <Container className='d-flex justify-content-center align-items-center'
                   style={{height: window.innerHeight - 54}}
        >
            <Card className='p-3' style={{width: '600px'}}>
                <h3 className='m-auto'>{isLogin ? "Login In" : "Registration"}</h3>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='my-2'
                        placeholder='E-mail'
                    />
                    <Form.Control
                        className='my-2'
                        placeholder='Password'
                    />
                </Form>
                <Stack direction="horizontal" className="justify-content-between mt-3 pl-3 pr-3">
                    {isLogin ?
                        <div>
                            Not an account? <MyNavLink style={{color: 'green'}} to={RouteName.REGISTRATION}>Sign Up!</MyNavLink>
                        </div>
                        :
                        <div>
                            Have an account? <MyNavLink style={{color: 'green'}} to={RouteName.AUTH}>Login In!</MyNavLink>
                        </div>
                    }
                    <Button
                        className='align-self-end'
                        variant={"outline-success"}
                    >
                        {isLogin ? 'Login In' : 'Sign Up'}
                    </Button>
                </Stack>
            </Card>
        </Container>
    );
};

export default Auth;