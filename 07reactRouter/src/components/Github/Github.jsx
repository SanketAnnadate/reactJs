import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/sanketannadate')
    //         .then(response => response.json())
    //         .then(data => {
    //             setData(data);
    //         })
    //         .catch(error => console.error('Error fetching data:', error));
    // }, []);
  return (
    <>
        <div className='text-center m-4 bg-gray-600 text-white'
        >Github Followers: {data?.followers}</div>
        <img 
        className='mx-auto'
        src={data?.avatar_url} 
        alt="Git picture" 
        width={300}/>
    </>
  )
}

export default Github

export const gitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sanketannadate');
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
}