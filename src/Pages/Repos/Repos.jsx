import React from "react"
import { useParams } from "react-router"
import { useFetchData } from "../../Hooks/useFetchData"
import Repository from "../../components/Repository/Repository"
import Loader from "../../components/Custom/Loader/Loader"
import { Link } from "react-router-dom"

const Repos = () => {
  const { user } = useParams()
  const { data, loader } = useFetchData(
    `https://api.github.com/users/${user}/repos`
  )

  return (
    <>
      <h3 className="mt-2 ml-3 font-medium">
        Owner: <span>{user}</span>
      </h3>
      <h1 className=" mt-4 text-center   text-3xl mb-3  font-bold">
        Repositories
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3   items-center justify-items-center ">
        {data && data.length > 0 && !loader ? (
          data.map((item) => <Repository key={item.id} name={item.name} />)
        ) : (
          <Loader />
        )}
      </div>

      <div className=" w-full flex flex-row justify-center">
        <Link to="/">
          <h3 className=" mt-10 pt    bg-red-light  text-white-light hover:bg-red-dark  hover:text-white-light  rounded-lg h-8  font-medium text-lg w-24 text-center">
            Back
          </h3>
        </Link>
      </div>
    </>
  )
}

export default Repos
