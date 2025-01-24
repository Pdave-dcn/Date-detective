import { WeekDays } from "../App";
import SelectElement from "./SelectElement";

type InputFieldsType = {
  setTempDayOfMonth: React.Dispatch<React.SetStateAction<number | null>>;
  setTempWeek: React.Dispatch<React.SetStateAction<number | null>>;
  setTempMonth: React.Dispatch<React.SetStateAction<number | null>>;
};

const InputFields = ({
  setTempDayOfMonth,
  setTempWeek,
  setTempMonth,
}: InputFieldsType) => {
  // Days from 1 to 31
  const daysArray = Array.from({ length: 31 }, (_, i) => i + 1);

  const weekArray: { id: number; name: WeekDays }[] = [
    { id: 0, name: "Sunday" },
    { id: 1, name: "Monday" },
    { id: 2, name: "Tuesday" },
    { id: 3, name: "Wednesday" },
    { id: 4, name: "Thursday" },
    { id: 5, name: "Friday" },
    { id: 6, name: "Saturday" },
  ];

  const monthsArray = [
    { id: 0, name: "January" },
    { id: 1, name: "February" },
    { id: 2, name: "March" },
    { id: 3, name: "April" },
    { id: 4, name: "May" },
    { id: 5, name: "June" },
    { id: 6, name: "July" },
    { id: 7, name: "August" },
    { id: 8, name: "September" },
    { id: 9, name: "October" },
    { id: 10, name: "November" },
    { id: 11, name: "December" },
  ];

  const monthWith30Days = [3, 5, 8, 10];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const dayOfMonthSelect = document.getElementById(
      "days-of-month"
    ) as HTMLSelectElement;
    const dayOfWeekSelect = document.getElementById(
      "days-of-week"
    ) as HTMLSelectElement;
    const monthSelect = document.getElementById(
      "month-of-year"
    ) as HTMLSelectElement;

    const selectedDayOfMonth = parseInt(dayOfMonthSelect.value, 10);
    const selectedDayOfWeek = parseInt(dayOfWeekSelect.value, 10);
    const selectedMonth = parseInt(monthSelect.value, 10);

    if (selectedDayOfMonth === 31 && monthWith30Days.includes(selectedMonth)) {
      alert("The selected month has 30 days maximum!!");
      return;
    }

    if (selectedMonth === 1 && selectedDayOfMonth > 29) {
      alert("February has 29 days maximum!!");
      return;
    }

    setTempDayOfMonth(selectedDayOfMonth);
    setTempWeek(selectedDayOfWeek);
    setTempMonth(selectedMonth);
  };

  return (
    <div className="bg-electricViolet lg:bg-transparent text-onyx">
      <form
        className="p-5 sm:p-10 lg:p-0 bg-seasalt flex flex-col rounded-t-[20%] lg:rounded-none"
        onSubmit={handleSubmit}
      >
        <div className="sm:border-b-2 sm:border-onyx sm:pb-8 lg:pb-0 lg:border-none">
          <div className="flex justify-between mt-8 lg:mt-5 font-bold">
            <SelectElement
              array={daysArray as [number]}
              labelContent="Day of the month"
              customStyle="w-36 sm:w-72 lg:w-56"
              id="days-of-month"
            />
            <SelectElement
              array={weekArray as [{ id: number; name: string }]}
              labelContent="Day of the week"
              customStyle="w-36 sm:w-72 lg:w-56"
              id="days-of-week"
            />
          </div>
          <div className="mt-4 lg:mt-6 font-bold">
            <SelectElement
              array={monthsArray as [{ id: number; name: string }]}
              labelContent="Month of the year"
              customStyle=""
              id="month-of-year"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-platinum flex justify-center items-center h-14 sm:h-20 lg:h-14 mt-8 sm:mt-14 lg:mt-12 lg:mb-10 rounded-lg shadow-md shadow-electricViolet/20 lg:shadow-none active:opacity-75 lg:hover:shadow-lg lg:hover:shadow-electricViolet/20 submit__btn"
        >
          <img
            src="magnifying-glass.svg"
            alt="Magnifying glass icon"
            className="w-20 lg:w-[90px] -mr-7 lg:-mr-6 transform rotate-45 glass__icon"
          />
          <p className="font-bold text-xl lg:text-2xl">Find Dates</p>
        </button>
      </form>
    </div>
  );
};

export default InputFields;
