import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../services/config.js";
import TeamCard from "../components/TeamCard.jsx";
import { AuthContext } from "../context/auth.context.jsx";

function Team() {
  const navigate = useNavigate();
  const [team, setTeam] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { isLoggedIn } = useContext(AuthContext);


  const handleCreateTeam = () => {
    navigate('/teamCreate')
  }


  const getData = async () => {
    try {
      const response = await service.get("/team/teamAll");
      setTeam(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      navigate("/error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <>
      <h4 className="text-xl">Tu bienestar oral es nuestra misión, porque una sonrisa saludable es una vida plena.</h4>
      <h4 className="text-xl">Por eso tenemos el mejor equipo:</h4>
      <br />
      <div className="team-list-container flex flex-row flex-wrap gap-9 justify-center align-middle">
        {team.map((each, index) => {
          return <TeamCard key={index} data={each}></TeamCard>;
        })}
      </div>
      <br />
      {isLoggedIn ? (
        <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg mt-100"
        onClick={handleCreateTeam}>
          Añadir nuevo miembro del equipo
        </button>
      ) : (
        <></>
        )}
    </>
  );
}

export default Team;
