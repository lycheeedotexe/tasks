import React from "react";
import "./App.css";
import catpic from "./images/cowboy_frogs.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>new header text :D</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Christina was here ;0</p>
            <p>Hello World</p>
            <img
                src={catpic}
                alt="An image of two green frogs wearing cowboy hats."
            />
            <ol>
                <li>peanut</li>
                <li>butter</li>
                <li>jelly</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "88%",
                                height: "69%",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "42vw",
                                height: "22vh",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
