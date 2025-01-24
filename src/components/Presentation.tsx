import { useState, useEffect } from "react";

const Presentation = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="bg-electricViolet p-4 lg:p-5 flex flex-col items-center w-full lg:flex-1 lg:h-full lg:rounded-lg">
        <img
          src="logo.png"
          alt="Logo"
          className={`w-48 sm:w-56 lg:w-60 lg:mb-5 ${
            startAnimation ? "animate-scaleUp" : ""
          }`}
        />
        <p className="text-seasalt text-center text-sm sm:text-base font-semibold w-[300px] sm:w-[400px] p-3 rounded-lg rounded-t-[20%] bg-indigo lg:hidden">
          Date Detective helps you find the last and next time a specific day of
          the month aligned with a specific day of the week, within a given
          month.
        </p>
        <p className="hidden lg:flex justify-center items-center text-seasalt font-normal p-5 lg:p-3 rounded-lg bg-indigo h-full">
          Date Detective helps you find the last and next time a specific day of
          the month (e.g., the 15th) aligned with a specific day of the week
          (e.g., Monday), within a given month. <br />
          <br />
          How to Use: <br />
          <br />
          1- Select the day of the month (1–31). <br />
          2- Select the day of the week from the dropdown menu. <br />
          3- Select the month from the dropdown menu. <br />
          4- Click "Find Dates" to get your result instantly! <br />
          <br />
          It’s simple, fast, and perfect for anyone curious about dates.
        </p>
      </div>
    </>
  );
};

export default Presentation;
