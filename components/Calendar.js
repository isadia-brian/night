import { useEffect, useState, useRef } from "react";
import { DateRangePicker } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const DateRange = () => {
  //toggle open and close for the calendar
  const [open, setOpen] = useState(false);

  const [arrival, setArrival] = useState("Arrival");

  const handleChange = () => {
    setArrival();
  };
  //initial start date

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ]);

  const refOne = useRef(null);

  return (
    <div className="relative">
      <form
        className="md:flex w-[550px] items-center shadow-md rounded-full text-black bg-green-50  pl-4 cursor-pointer hidden border-r-green-800"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center justify-around flex-grow">
          <div className="border-r-[1px] pr-2 border-gray-300">
            <input
              className="text-sm font-medium outline-none bg-inherit w-[90px]"
              value={`${format(range[0].startDate, "MM/dd/yyyy")}`}
            />
          </div>
          <div className="flex flex-col border-r-[1px] border-gray-300 pr-3">
            <input
              className="text-sm font-medium outline-none bg-inherit w-[90px]"
              value={`${format(range[0].endDate, "MM/dd/yyyy")}`}
            />
          </div>
          <div className="flex flex-col mr-2">
            <p className="text-gray-500 text-sm">Add Guests</p>
            {/* <input
              type="text"
              className="outline-none bg-inherit border-b-[0.8px] "
            /> */}
          </div>
        </div>
        <div>
          <button className="bg-green-800 text-white flex items-center justify-between px-3 py-3 text-sm font-extrabold rounded-full">
            CHECK AVAILABILITY
          </button>
        </div>
      </form>
      <div ref={refOne} className="absolute -left-36  top-[85px] ">
        {open && (
          <DateRangePicker
            onChange={(item) => setRange([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={range}
            direction="horizontal"
          />
        )}
      </div>
    </div>
  );
};

export default DateRange;
