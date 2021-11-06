import React from 'react'


export const InputBox = ({handleChange}) => {
        return (
            <div>
                <textarea onChange={handleChange} className="flex flex-col w-96 h-48 resize-none border focus:ring-gray-500 rounded-md bg-gray-300 ml-72 text-white "></textarea>
            </div>
        );
}