import React from "react";
import { Col, Container, Row, Card, CardHeader, CardBody } from "reactstrap";
import "./Users.css";

class User extends React.Component {
    state = {
        user: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                this.setState({ user: data })
            })
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        {this.state.user.map((users) => (
                            <Col className='mb-3' md='4'>
                                <Card key={users.id}>
                                    <CardHeader>
                                        <h2>
                                            {users.name}
                                        </h2>
                                    </CardHeader>
                                    <CardBody>
                                        <h3>
                                            {users.username}
                                        </h3>
                                        <div>
                                            Phone: <a className='mx-2 text-decoration-none' href='tel:{users.phone'>
                                                {users.phone}
                                            </a>
                                        </div>
                                        <div className='my-2'>
                                            Email: <a className='text-decoration-none' href="mailto:{users.email}">
                                                {users.email}
                                            </a>
                                        </div>
                                        <div>
                                            Address: <address className='text-secondary fst-italic'>
                                                {users.address.city}
                                            </address>
                                        </div>

                                    </CardBody>
                                </Card>

                            </Col>
                        ))}
                    </Row>
                </Container>
            </>
        )
    }
}


export default User;