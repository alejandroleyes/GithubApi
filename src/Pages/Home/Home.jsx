import React, { useState } from "react"
import { Redirect } from "react-router"
import UserForm from "../../components/Home/Form/UserForm"
import Loader from "../../components/Custom/Loader/Loader"
import GithubUser from "../../components/Home/GithubUser/GithubUser"

//HOOKS
import { useFetchData } from "../../Hooks/useFetchData"
const Home = () => {
  //state
  const [userName, setuserName] = useState("")

  //Uso de Custom hook
  const { data, loader, error, handleSearchButton } = useFetchData(
    `https://api.github.com/users/${userName}`
  )

  //functions
  const handleInputChange = (e) => {
    setuserName(e.target.value)
  }

  return (
    <div>
      <h1 className="mt-8    text-black-dark2  text-base font-bold text-center   sm:text-lg md:text-xl  ">
        Search a Github user!!
      </h1>
      <UserForm
        handleInputChange={handleInputChange}
        handleSearchButton={handleSearchButton}
      />

      {data ? (
        <GithubUser
          avatar={data?.avatar_url}
          name={data?.name}
          loginName={data?.login}
          followers={data.followers}
          following={data.following}
          repos={data.public_repos}
        />
      ) : null}

      {loader && <Loader />}
      {error && <Redirect to="/404"></Redirect>}
    </div>
  )
}

export default Home
