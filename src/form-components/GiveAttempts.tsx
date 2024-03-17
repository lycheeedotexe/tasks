import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("");

    function useAttempt(): void {
        setAttemptsLeft(attemptsLeft - 1);
    }

    function addAttempts(): void {
        if (parseInt(attemptsRequested)) {
            setAttemptsLeft(attemptsLeft + parseInt(attemptsRequested));
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <span>
                Attempts left: <span>{attemptsLeft}</span>
            </span>
            <Form.Group controlId="attemptsUserInput">
                <Form.Label>Enter number of attempts to be added:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAttemptsRequested(event.target.value)
                    }
                />
            </Form.Group>
            <Button onClick={useAttempt} disabled={attemptsLeft < 1}>
                use
            </Button>
            <Button onClick={addAttempts}>gain</Button>
        </div>
    );
}
