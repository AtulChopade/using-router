//import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();

  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/AtulChopade")
  //       .then((response) => response.json())
  //       .then((data) => setData(data));
  //   }, []);

  return (
    <div className="text-white text-center m-4 bg-green-500 p-4 text-3xl">
      Github Followers:{data.followers}
      <img src={data.avatar_url} alt="Git_Profile_pic" width={300} />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/AtulChopade");
  return response.json();
};
