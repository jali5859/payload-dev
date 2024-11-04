// src/fields/DateRange.tsx
import React, { useState, useCallback } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FieldProps } from "payload/types";

const DateRange: React.FC<FieldProps> = ({ data, onChange }) => {
  const [startDate, setStartDate] = useState<Date | null>(
    data?.startDate ? new Date(data.startDate) : null
  );
  const [endDate, setEndDate] = useState<Date | null>(
    data?.endDate ? new Date(data.endDate) : null
  );

  const handleStartDateChange = useCallback(
    (date) => {
      setStartDate(date);
      onChange({
        ...data, // Include existing data (important for other fields in the document).
        startDate: date,
      }); // Call onChange to let Payload know about changes
    },
    [onChange, data]
  );

  const handleEndDateChange = useCallback(
    (date) => {
      setEndDate(date);
      onChange({
        ...data,
        endDate: date,
      });
    },
    [onChange, data]
  );

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={handleStartDateChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="Pp"
        placeholderText="Start Date"
      />
      <DatePicker
        selected={endDate}
        onChange={handleEndDateChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="Pp"
        minDate={startDate}
        placeholderText="End Date"
      />
    </div>
  );
};

export default DateRange;
