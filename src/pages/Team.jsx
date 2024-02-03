import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import service from '../services/config';
import TeamCard from '../components/TeamCard';

function Team() {
  const navigate = useNavigate()
  const [team, setTeam] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  
  
  
  
  
  const getData = async () => {
    try {
      const response = await service.get('/team/teamAll')
      console.log(response.data)
      setTeam(response.data)
      setIsLoading(false)
    }catch(err) {
      console.log(err)
      navigate('/error')
    }
  }
  
  useEffect(() =>{
    getData()
  }, []);
  
  if (isLoading) {
    return <h1>Loading ...</h1>
  }
  
  
  return (
    <div>
      <h1>Nuestro equipo</h1>
      <div className='team-list-container flex flex-row flex-wrap gap-9 justify-center align-middle'>
        {team.map((each, index) => {
          return <TeamCard key={index} data={each}></TeamCard>
        })}
      </div>

    </div>
  )
}

export default Team