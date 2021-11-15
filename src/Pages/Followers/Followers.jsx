import React from "react"
import { useParams } from "react-router"
import { useFetchData } from "../../Hooks/useFetchData"

import GithubUser from "../../components/Home/GithubUser/GithubUser"
import Loader from "../../components/Custom/Loader/Loader"

const Followers = () => {
  const { user } = useParams()
  const { data, loader } = useFetchData(
    `https://api.github.com/users/${user}/followers`
  )

  return (
    <>
      <h3 className="mt-2 ml-3  font-medium">
        User: <span>{user}</span>
      </h3>
      <h1 className=" mt-4 text-center   text-3xl mb-3  font-bold ">
        Followers
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  items-center justify-items-center ">
        {data && data.length > 0 && !loader ? (
          data.map((user, i) => (
            <GithubUser
              key={i}
              avatar={user?.avatar_url}
              loginName={user?.login}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </>
  )
}

export default Followers
