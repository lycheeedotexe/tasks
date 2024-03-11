import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    type Question = QuestionType;
    const [q, setQ] = useState<Question>("short_answer_question");

    function switchQ(): void {
        if (q === "short_answer_question") {
            setQ("multiple_choice_question");
        } else {
            setQ("short_answer_question");
        }
    }

    return (
        <div>
            <Button onClick={switchQ}>Change Type</Button>
            {q === "short_answer_question" ? (
                <div>Short Answer</div>
            ) : (
                <div>Multiple Choice</div>
            )}
        </div>
    );
}
