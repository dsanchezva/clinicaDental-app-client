
import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import service from "../services/config";

function TreatmentCard(props) {
  const { name, description, imgUrl, _id } = props.data;
  const {isLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate()


  const handleDeteleTreatment = async () => {
    try {
      await service.delete(`/treatments/${_id}/delete`)

    } catch (err) {
      navigate('/error')
    }
  }

  const handleEditTreatment = () => {
    navigate(`/treatmentEdit/${_id}`)
  }



  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        title="Woman holding a mug"
      ><img className="w-full " src={imgUrl} alt="Foto miembro equipo" /></div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="flex items-center">
        {isLoggedIn ?    
      <div className="flex flex-row gap-10 justify-center mb-5">
        <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full" onClick={handleDeteleTreatment}>
          Borrar
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleEditTreatment}>
          Editar
        </button>
      </div>
        : <></>}
        </div>
      </div>
    </div>
  );
}

export default TreatmentCard;
