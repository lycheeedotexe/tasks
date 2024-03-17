/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode-check"
                label="<--------------------- Edit Mode Toggle"
                checked={editMode}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setEditMode(event.target.checked)
                }
            />
            {editMode ? (
                <>
                    <Form.Group controlId="formStudentName">
                        <Form.Label>Student Name:</Form.Label>
                        <Form.Control
                            value={name}
                            disabled={!editMode}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setName(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Is a student"
                        checked={isStudent}
                        disabled={!editMode}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setIsStudent(event.target.checked)}
                    />
                </>
            ) : (
                `${name} is ${!isStudent ? "not" : ""} a student.`
            )}
        </div>
    );
}
