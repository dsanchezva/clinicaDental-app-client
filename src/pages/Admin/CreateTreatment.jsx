import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Input,
  initTE,
} from "tw-elements";
initTE({ Input });
import service from "../../services/config";

function CreateTreatment() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState(null)
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate()

  const handleName = (e) => setName(e.target.value)
  const handleDescription = (e) => setDescription(e.target.value)
  const handleImage = async (e) =>{
    if(!e.target.files[0]) {
      return
    }
    setIsUploading(true);
    const uploadData = new FormData();
    uploadData.append("treatmentPicture", e.target.files[0]);
    try {
      const response = await service.patch('/treatments/uploadTreatmentPic', uploadData)
      setImage(response.data.treatmentPic)
      setIsUploading(false);
    } catch (e) {
      navigate('/error')
    }
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      name,
      description,
      imgUrl : image,
    }
    try {
      await service.post('/treatments/create', data)
      navigate('/treatments')


    } catch (e) {
      navigate('/error')
    }

  }


  return (
    <div className="createTreatment-container">
      <h1>Añadir nuevo tratamiento:</h1>
      <form>
        <div className="relative mb-3" data-te-input-wrapper-init>
          <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border-2 border-neutral-500 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-900 dark:placeholder:text-neutral-900 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInputText"
            placeholder="Example label"
            onChange={handleName}
          />
          <label
            htmlFor="exampleFormControlInputText"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-900 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-900 dark:peer-focus:text-primary"
          >
            Nombre:
          </label>
        </div>
        <br />
        <div className="relative mb-3" data-te-input-wrapper-init>
          <textarea
            className="peer block min-h-[auto] w-full rounded border-2 border-neutral-500 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-900 dark:placeholder:text-neutral-900 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlTextarea1"
            rows="4"
            placeholder="Your message"
            onChange={handleDescription}
          ></textarea>
          <label
            htmlFor="exampleFormControlTextarea1"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-900 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-900 dark:peer-focus:text-primary"
          >
            Descripcion:
          </label>
        </div>
        <br />
        {image ? <img src={image} className="rounded-lg w-80"/>: <></>}
        <div className="mb-3 w-96">
          <label
            htmlFor="formFile"
            className="mb-2 inline-block text-neutral-900 dark:text-neutral-900"
          >
            Añade una foto:
          </label>
          <input
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-500 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            type="file"
            id="formFile"
            onChange={handleImage}
          />
        </div>
        <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg mt-100"
        onClick={handleSubmit}
        disabled={!name && !description ? "disabled" : ""}
        >
          Añadir
        </button>
      </form>
    </div>
  );
}

export default CreateTreatment