import React from "react";

function CreateTeam() {
  return (
    <div>
      <h1>Añadir nuevo miembro del equipo:</h1>
      <form>
        <div class="form-outline mb-4">
          <input type="text" id="form4Example1" class="form-control" />
          <label class="form-label" for="form4Example1">
            Name
          </label>
        </div>
        <br />
        <label htmlFor="description">Descripcion:</label>
        <textarea type="text" htmlFor="description" />
        <br />
        <div className="mb-3 w-96">
          <label
            htmlFor="formFile"
            className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
          >
            Añade una foto:
          </label>
          <input
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            type="file"
            id="formFile"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateTeam;
