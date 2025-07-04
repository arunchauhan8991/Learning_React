import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // Alternatively, you can use the useState and useEffect hooks to fetch data

  //----------------------OR--------------------

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //     fetch('https://api.github.com/users/arunchauhan8991')
  //         .then(response => response.json())
  //         .then(data => {
  //             console.log(data)
  //             setData(data)
  //         })
  // }, []);
  return (
    <div className=" m-4 text-center bg-gray-600 text-white p-4 text-3xl">
      <h1>Github Followers: {data.followers} </h1>
      <img src={data.avatar_url} alt="githuhb profile pic" width={300} />
    </div>
  );
}

export default Github;
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/arunchauhan8991");
  
  return response.json()
}