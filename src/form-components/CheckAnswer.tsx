import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="checkAnswer" as={Row}>
                <Form.Label column sm={2}>
                    Type your answer:
                </Form.Label>
                <Col>
                    <Form.Control value={answer} onChange={updateAnswer} />
                </Col>
                <Col>
                    {answer === expectedAnswer ? (
                        <span>✔️</span>
                    ) : (
                        <span>❌</span>
                    )}
                </Col>
            </Form.Group>
        </div>
    );
}
