import React, { useContext, useState } from "react";
import TimeContext from "../context/timeContext";

export const TimePicker = () => {
    const { setHours,setMinutes } = useContext(TimeContext);
    const [Ihours,setIHours] = useState('');
    const [Iminutes, setIminutes] = useState('');
    const handleHoursChange = (e) =>{
        e.preventDefault();
        setIHours(e.target.value);
    }
    const handleMinutesChange = (e) =>{
        e.preventDefault();
        setIminutes(e.target.value);
    }
  return (
    <div className="flex justify-center ml-96 -mt-20">
      <div className="mt-2 p-5 w-40 bg-white rounded-lg shadow-xl">
        <div className="flex">
          <select
            name="hours"
            className="bg-transparent text-xl appearance-none outline-none"
            value={Ihours}
            onChange={handleHoursChange}
            onClick={()=>{
                setHours(Ihours);
            }}
          >
            <option value="2">1 </option>
            <option value="3">2 </option>
            <option value="4">3 </option>
            <option value="5">4 </option>
            <option value="6">5 </option>
            <option value="7">6 </option>
            <option value="8">7 </option>
            <option value="9">8 </option>
            <option value="10">9 </option>
            <option value="11">10 </option>
            <option value="12">11 </option>
            <option value="13">12 </option>
          </select>
          <span className="text-xl ml-3 mr-3"> :</span>
          <select
            name="minutes"
            className="bg-transparent text-xl appearance-none outline-none mr-4"
            value={Iminutes}
            onChange={handleMinutesChange}
            onClick={()=>{
                setMinutes(Iminutes);
            }}
          >
            <option value="00">00</option>
            <option value="05">05</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="35">35</option>
            <option value="40">40</option>
            <option value="45">45</option>
            <option value="50">50</option>
            <option value="55">55</option>
          </select>
          <select
            name="ampm"
            className="bg-transparent text-xl appearance-none outline-none"
          >
            <option value="am">AM</option>
            <option value="pm">PM</option>
          </select>
        </div>
      </div>
    </div>
  );
};
