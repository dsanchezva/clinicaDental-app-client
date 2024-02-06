import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import service from "../services/config";
import { useNavigate } from "react-router-dom";

function TeamCard(props) {
  const { name, description, imgUrl, _id } = props.data;
  const {isLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleDeleteTeam = async () => {

try {
    await service.delete(`/team/${_id}/delete`)
    navigate('/team')

}catch(err) {
}

  }

  const handleEditTeam = () => {
    navigate(`/teamEdit/${_id}`)
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imgUrl} alt="Foto miembro equipo" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      {isLoggedIn ?    
      <div className="flex flex-row gap-10 justify-center mb-5">
        <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full" onClick={handleDeleteTeam}>
          Borrar
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleEditTeam}>
          Editar
        </button>
      </div>
        : <></>}
    </div>
  );
}

export default TeamCard;
