import React, { useState, useEffect } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import { subYears, format } from 'date-fns';

// Import your JSON data
import activityData from '../data/activity.json';

const ActivityHeatmap = () => {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(subYears(new Date(), 1));
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    // You can process your raw data here if needed, but for the provided
    // JSON structure, we can use it directly.
    setData(activityData);
  }, []);

const classForValue = (value) => {
  if (!value || value.count === 0) {
    return 'color-empty';
  }
  if (value.count > 10) return 'bg-green-500';
  if (value.count > 7) return 'bg-green-400';
  if (value.count > 4) return 'bg-green-300';
  return 'bg-green-200';
};
  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Activity Heatmap</h1>
      <div className="overflow-x-auto">
        <CalendarHeatmap
          startDate={startDate}
          endDate={endDate}
          values={data}
          classForValue={classForValue}
          // The titleForValue prop is perfect for tooltips
          titleForValue={(value) =>
            value
              ? `${value.date} - ${value.count} activities`
              : 'No activity'
          }
          gutterSize={2}
          showWeekdayLabels={true}
          // You can also add `tooltipDataAttrs` for more advanced tooltips
        />
      </div>
    </div>
  );
};

export default ActivityHeatmap;