import React from "react";
import {Button, Container, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const Login = ({ setAuthenticate }) => {
    const navigate = useNavigate();
    const loginUser = (event) => {
        event.preventDefault()  // form에서 refresh 하는 것을 막는다.
        setAuthenticate(true);
        navigate("/");
    }

    return (
        /**
         * submit 버튼 클릭 시 페이지를 다시 새로고침 한다.
         */
        <Container className="login-area">
            <Form className="login-form" onSubmit={(event) => loginUser(event)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="danger" type="submit">
                    로그인
                </Button>
            </Form>
        </Container>
    );
};

export default Login;