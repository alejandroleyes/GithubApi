import React from "react"
import { Link } from "react-router-dom"

const GithubUser = ({
  avatar,
  name,
  loginName,
  followers,
  following,
  repos,
}) => {
  return (
    <div className="flex justify-center mt-8  ">
      <div
        className={
          followers
            ? "flex flex-col    bg-white-light  h-96   w-64  rounded-lg  px-5 py-4 shadow-2xl  border border-green-lightx2  transform transition duration-100 hover:scale-105  "
            : "flex flex-col    bg-white-light  h-72   w-64  rounded-lg  px-5 py-4 shadow-2xl   border border-green-lightx2 transform transition duration-100 hover:scale-105"
        }
      >
        <img
          src={avatar}
          alt={loginName}
          className="  h-40 w-40  self-center rounded "
        />
        <h3 className=" mt-3 self-center  font-bold  text-green-dark2">
          {name}
        </h3>
        <h3
          className={
            followers
              ? "followers?mt-px  text-sm self-center   font-medium text-black-light"
              : "followers?mt-2  text-base self-center   font-medium text-black-light"
          }
        >
          {loginName}
        </h3>
        <h3 className=" mt-2 cursor-pointer text-black-light ">
          {followers ? (
            <Link to={`/followers/${loginName}`}>
              Followers:
              <span className="ml-1 text-red-dark  ">{followers}</span>
            </Link>
          ) : null}
        </h3>
        <h3 className="text-black-light ">
          {following ? (
            <>
              Following:
              <span className="ml-1 text-red-dark  ">{following}</span>
            </>
          ) : null}
        </h3>
        <h3 className=" text-black-light ">
          {repos ? (
            <>
              Repos:
              <span className="ml-1 text-red-dark  ">{repos}</span>
            </>
          ) : null}
        </h3>
        <Link className="" to={`/Repos/${loginName}`}>
          <h3 className="  mt-3 bg-white-light text-black-light border-2 border-green-dark hover:bg-green-light  hover:text-white-light  rounded-lg h-8 max-w-full text-center">
            Repos
          </h3>
        </Link>
      </div>
    </div>
  )
}

export default GithubUser
