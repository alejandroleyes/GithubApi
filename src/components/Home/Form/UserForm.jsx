import React from "react"

const UserForm = ({ handleInputChange, handleSearchButton }) => {
  return (
    <form
      onSubmit={(e) => handleSearchButton(e)}
      className="mt-5 flex justify-center  "
    >
      <input
        type="text"
        placeholder="User Name"
        onChange={(e) => handleInputChange(e)}
        className=" px-2 border-2 border-black-light   "
      />
      <button
        className="  px-3 bg-black-light text-white-light border-2 border-black-light  h-8"
        type="submit"
      >
        Search
      </button>
    </form>
  )
}

export default UserForm
