import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🧧" | "🎄" | "🎃" | "🤡" | "🥮";

const HOLIDAYS_BY_YEAR: Record<Holiday, Holiday> = {
    "🧧": "🤡",
    "🤡": "🥮",
    "🥮": "🎃",
    "🎃": "🎄",
    "🎄": "🧧"
};

const HOLIDAYS_BY_ABC: Record<Holiday, Holiday> = {
    "🤡": "🎄",
    "🎄": "🎃",
    "🎃": "🧧",
    "🧧": "🥮",
    "🥮": "🤡"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🧧");

    function changeHolidayYear(): void {
        const newHoliday = HOLIDAYS_BY_YEAR[holiday];
        setHoliday(newHoliday);
    }
    function changeHolidayABC(): void {
        const newHoliday = HOLIDAYS_BY_ABC[holiday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            <div>Holiday: {holiday}</div>
            <div>
                <Button onClick={changeHolidayABC}>Advance by Alphabet</Button>
                <Button onClick={changeHolidayYear}>Advance by Year</Button>
            </div>
        </div>
    );
}
