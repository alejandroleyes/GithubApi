import React from "react"

const Repository = ({ name }) => {
  return (
    <div
      className=" flex flex-col justify-center 
     bg-white-light h-20  w-64  rounded-lg  px-5 py-4 shadow-2xl text-center m-5  border 
      border-green-light transform transition duration-100 hover:scale-105"
    >
      <h3>{name}</h3>
    </div>
  )
}

export default Repository
