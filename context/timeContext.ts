import React, { useState, useEffect, createContext } from 'react';


interface ITimeContext {
  hours?:number;
  minutes?:number,
  setHours?: (hours) => void;
  setMinutes?: (minutes) => void;
}

export const defaultState = {
  hours: 0,
  minutes: 0,
};


const TimeContext = React.createContext<ITimeContext>(defaultState);

export default TimeContext;