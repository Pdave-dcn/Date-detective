import { useState, useEffect } from "react";
import DisplaySection from "./components/DisplaySection";
import InputFields from "./components/InputFields";
import Presentation from "./components/Presentation";

export type WeekDays =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

function App() {
  const [dayOfMonth, setDayOfMonth] = useState<number | null>(null);
  const [dayOfWeek, setDayOfWeek] = useState<number | null>(null);
  const [month, setMonth] = useState<number | null>(null);
  const [isValid, setIsValid] = useState(false);

  const [tempDayOfMonth, setTempDayOfMonth] = useState<number | null>(null);
  const [tempWeek, setTempWeek] = useState<number | null>(null);
  const [tempMonth, setTempMonth] = useState<number | null>(null);

  useEffect(() => {
    if (tempDayOfMonth !== null && tempWeek !== null && tempMonth !== null) {
      setDayOfMonth(tempDayOfMonth);
      setDayOfWeek(tempWeek);
      setMonth(tempMonth);
      setIsValid(true);
    }
  }, [tempDayOfMonth, tempWeek, tempMonth]);

  return (
    <div className="flex justify-center items-center min-h-screen animate-fadeIn">
      <div className="flex flex-col min-h-screen w-full lg:flex-row lg:min-h-0 lg:w-[1096px] bg-white lg:shadow-xl lg:rounded-lg">
        <div className="lg:flex-1 lg:bg-seasalt lg:p-5">
          <Presentation />
        </div>

        <div className="flex flex-col flex-1 lg:box-border lg:p-5 lg:bg-seasalt">
          <InputFields
            setTempDayOfMonth={setTempDayOfMonth}
            setTempWeek={setTempWeek}
            setTempMonth={setTempMonth}
          />
          <DisplaySection
            dayOfMonth={dayOfMonth}
            dayOfWeek={dayOfWeek}
            month={month}
            isValid={isValid}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
