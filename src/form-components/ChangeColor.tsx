import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "tomato",
    "crimson",
    "gold",
    "lime",
    "cyan",
    "indigo",
    "pink",
    "salmon"
];

export function ChangeColor(): JSX.Element {
    const [selectedColor, setColor] = useState<string>(COLORS[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="colorChoices">
                {COLORS.map((color: string) => (
                    <Form.Check
                        inline
                        type="radio"
                        name="colors"
                        onChange={updateColor}
                        id={color}
                        label={color}
                        value={color}
                        checked={selectedColor === color}
                        style={{ backgroundColor: color }}
                        key={color}
                    />
                ))}
                <div>
                    You have chosen{" "}
                    <span
                        data-testid="colored-box"
                        style={{ backgroundColor: selectedColor }}
                    >
                        {selectedColor}
                    </span>
                    .
                </div>
            </Form.Group>
        </div>
    );
}
