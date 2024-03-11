import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);
    function pressStart(): void {
        setAttempts(attempts - 1);
        setInProgress(true);
    }
    return (
        <div>
            <Button onClick={pressStart} disabled={inProgress || attempts < 1}>
                Start Quiz
            </Button>
            <Button onClick={() => setInProgress(false)} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => setAttempts(1 + attempts)}
                disabled={inProgress}
            >
                Mulligan
            </Button>
            <div>
                Number of Attempts: <span>{attempts}</span>
            </div>
            {inProgress ? (
                <div>Quiz in Progress</div>
            ) : (
                <div>Quiz not in Progress</div>
            )}
        </div>
    );
}
