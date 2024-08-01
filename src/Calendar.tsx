// src/Calendar.tsx
import React from "react";

const Calendar: React.FC = () => {
  return (
    <div>
      <h2>Devon's Calendar</h2>
      <p>
        Here you will find a calendar that shows my availablilty. If you would
        like to schedule with me. Please navigate to the contact page.
      </p>
      <iframe
        src="https://outlook.office365.com/owa/calendar/9b99f29702564fe8863fd7930c17205e@flypjc.com/4e2da2ee284347d3959e12f85f9947be15994668081015561621/calendar.html"
        style={{ border: 0 }}
        width="1200"
        height="600"
      ></iframe>
    </div>
  );
};

export default Calendar;
