import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import service from '../services/config'
import TreatmentCard from '../components/TreatmentCard'
import { AuthContext } from '../context/auth.context'

function Treatments() {
  const navigate = useNavigate()
  const [treatments, setTreatments] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const { isLoggedIn } = useContext(AuthContext);

  const handleCreateTeam = () => {
    navigate('/treatmentCreate')
  }


  const getData = async () => {
    try {
      const response = await service.get('/treatments/treatmentAll')
      setTreatments(response.data)
      setIsLoading(false)
    } catch (err) {
      navigate('/error')
    }
  }

  useEffect(() => {
    getData()
  }, [])
  

  if (isLoading) {
    return <h1>Loading ...</h1>
  }
  
  
  return (
    <div>
      <h1>Treatments</h1>
      <div className='treatment-list-container flex flex-col justify-center ali grow mt-auto'>
        {treatments.map((each, index) => {
          return <TreatmentCard key={index} data={each}></TreatmentCard>
        })}

{isLoggedIn ? (
        <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg mt-100"
        onClick={handleCreateTeam}>
          Añadir nuevo tratamiento
        </button>
      ) : (
        <></>
        )}



      </div>



    </div>
  )
}

export default Treatments