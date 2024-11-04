// src/fields/DateRange.tsx
import React, { useState, useEffect, useCallback } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type DateRangeProps = {
  value?: { startDate: string | null; endDate: string | null };
  onChange: (value: {
    startDate: string | null;
    endDate: string | null;
  }) => void;
};

const DateRange: React.FC<DateRangeProps> = ({
  value = { startDate: null, endDate: null },
  onChange,
}) => {
  const [startDate, setStartDate] = useState<Date | null>(
    value?.startDate ? new Date(value.startDate) : null
  );
  const [endDate, setEndDate] = useState<Date | null>(
    value?.endDate ? new Date(value.endDate) : null
  );

  // useCallback ensures a stable reference which aids with optimization & prevents infinite rerenders
  const handleChange = useCallback((date: Date | null, name: string) => {
    if (name === "startDate") {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  }, []);

  // useCallback ensures a stable reference which aids with optimization & prevents infinite rerenders

  const handleOnChange = useCallback(() => {
    onChange({
      startDate: startDate ? startDate.toISOString() : null,
      endDate: endDate ? endDate.toISOString() : null,
    });
  }, [startDate, endDate, onChange]);

  useEffect(() => {
    handleOnChange();
  }, [startDate, endDate, handleOnChange]);

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => handleChange(date, "startDate")}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="Pp"
        placeholderText="Start Date"
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => handleChange(date, "endDate")}
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
