import { useState, useEffect } from "react";

type DisplaySectionType = {
  dayOfMonth: number | null;
  dayOfWeek: number | null;
  isValid: boolean;
  month: number | null;
};

const DisplaySection = ({
  dayOfMonth,
  dayOfWeek,
  isValid,
  month,
}: DisplaySectionType) => {
  const [isMatch, setIsMatch] = useState(false);
  const [lastOccurrence, setLastOccurrence] = useState("");
  const [nextOccurrence, setNextOccurrence] = useState("");

  useEffect(() => {
    if (
      isValid &&
      dayOfMonth !== null &&
      dayOfWeek !== null &&
      month !== null
    ) {
      const today = new Date();

      // Find last occurrence
      let searchDate = new Date(today);
      while (true) {
        searchDate.setDate(searchDate.getDate() - 1);
        if (
          searchDate.getDate() === dayOfMonth &&
          searchDate.getDay() === dayOfWeek &&
          searchDate.getMonth() === month
        ) {
          setLastOccurrence(searchDate.toDateString());
          break;
        }
      }

      // Find next occurrence
      let searchDate2 = new Date(today);
      while (true) {
        searchDate2.setDate(searchDate2.getDate() + 1);
        if (
          searchDate2.getDate() === dayOfMonth &&
          searchDate2.getDay() === dayOfWeek &&
          searchDate2.getMonth() === month
        ) {
          setNextOccurrence(searchDate2.toDateString());
          break;
        }
      }

      setIsMatch(true); // Set match only after both dates are found
    }
  }, [dayOfMonth, dayOfWeek, isValid, month]);

  return (
    <div className="flex-1 flex bg-gradient-to-b from-seasalt from-50% to-onyx to-50% lg:bg-none lg:mb-5">
      {isMatch ? (
        <div className="bg-onyx rounded-t-[20%] lg:rounded-lg w-full p-5 flex items-center justify-center">
          <div className="mt-8 ml-40 sm:ml-64 lg:ml-0 lg:mt-0">
            <div className="flex flex-col text-seasalt font-bold mb-5">
              <label htmlFor="last-occurrence" className="font-normal text-lg">
                Last Occurrence
              </label>
              <input
                type="text"
                id="last-occurrence"
                value={lastOccurrence}
                className="text-heliotrope bg-onyx text-3xl sm:text-5xl lg:w-60 lg:text-3xl"
                readOnly
              />
            </div>
            <div className="h-[1px] w-[290px] sm:w-[425px] lg:w-[290px] bg-seasalt -ml-8 lg:hidden"></div>
            <div className="flex flex-col text-seasalt font-bold mb-5 mt-5 lg:mb-0">
              <label htmlFor="next-occurrence" className="font-normal text-lg">
                Next Occurrence
              </label>
              <input
                type="text"
                id="next-occurrence"
                value={nextOccurrence}
                className="text-heliotrope bg-onyx text-3xl sm:text-5xl lg:w-60 lg:text-3xl"
                readOnly
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-onyx rounded-t-[20%] lg:rounded-lg w-full p-5 lg:p-0 flex items-center justify-center">
          <img
            src="icon-calendar.svg"
            alt="Calendar icon"
            className="calendar__icon mt-2 sm:w-1/2 lg:w-[75%]"
          />
        </div>
      )}
    </div>
  );
};

export default DisplaySection;
