import React, { useEffect, useState } from 'react'
 

function Github() {
    const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/muditmathurr')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        setData(data)
    })
  }, [])

  return (
    

    <div className='bg-gray-600 font-weight: 200 text-white p-4 m-4'>
    <h1> Mudit Mathur</h1>
      My Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
    
  )
}

export default Github
