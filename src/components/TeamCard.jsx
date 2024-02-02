import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function TeamCard(props) {
  const { name, description, imgUrl } = props.data;
  const {isLoggedIn} = useContext(AuthContext)

  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full " src={imgUrl} alt="Foto miembro equipo" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{name}</div>
        <p class="text-gray-700 text-base">{description}</p>
      </div>
      {isLoggedIn ?    
      <div className="flex flex-row gap-10 justify-center mb-5">
        <button class="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full">
          Borrar
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Editar
        </button>
      </div>
        : <></>}
    </div>
  );
}

export default TeamCard;
