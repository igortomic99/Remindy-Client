import React, { useState, useEffect, createContext } from 'react';


interface IDateContext {
  day?: number,
  month?: number,
  year?: number,
  setDate?: (day, month, year) => void;
}

export const defaultState = {
  day: 0,
  month: 0,
  year: 0,
};


const DateContext = React.createContext<IDateContext>(defaultState);

export default DateContext;


