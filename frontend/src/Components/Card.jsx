import React from 'react'
import { ArrowUp,ArrowDown } from 'lucide-react';
const Card = ({ title, value, trend, icon }) => {
  const trendColors = {
    up: 'text-green-500',
    down: 'text-red-500',
    neutral: 'text-gray-500'
  };

  const trendIcons = {
    up: <ArrowUp className="h-4 w-4" />,
    down: <ArrowDown className="h-4 w-4" />,
    neutral: <span className="h-4 w-4"></span>
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${trendColors[trend]} bg-opacity-20`}>
          {icon}
        </div>
      </div>
      <div className={`flex items-center mt-2 text-xs ${trendColors[trend]}`}>
        {trendIcons[trend]}
        <span className="ml-1">
          {trend === 'up' ? 'Increased' : trend === 'down' ? 'Decreased' : 'No change'} from last week
        </span>
      </div>
    </div>
  );
};

export default Card;