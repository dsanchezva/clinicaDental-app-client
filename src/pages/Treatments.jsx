import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import service from '../services/config'
import TreatmentCard from '../components/TreatmentCard'

function Treatments() {
  const navigate = useNavigate()
  const [treatments, setTreatments] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

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





      </div>



    </div>
  )
}

export default Treatments