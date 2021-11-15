import React from "react"
import { Link } from "react-router-dom"
const NotFound = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-28   text-xl sm:text-3xl  text-center">
        Error 404 Not Found
      </h1>
      <Link to="/">
        <p className=" mt-10 pt    bg-red-light  text-white-light hover:bg-red-dark  hover:text-white-light  rounded-lg h-8  font-medium text-lg w-24 text-center">
          Back
        </p>
      </Link>
    </div>
  )
}

export default NotFound
