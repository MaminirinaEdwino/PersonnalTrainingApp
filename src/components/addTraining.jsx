import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";
import { IoAddCircle } from "react-icons/io5";

export default function AddTraining({ setTraining, training }) {
  const [newTraining, setNewTraining] = useState("name");
  const StoreNewTraining = ()=>{
    window.localStorage.setItem(newTraining, 0)
  }
  const [train, setTrain] = useLocalStorage(newTraining, 0)
  return (
    <section className=" max-w-fit bg-white p-5 m-10 rounded shadow-2xl drop-shadow-xl border border-blue-200 flex flex-col mx-auto ">
      <h1 className="font-bold text-2xl mb-3">Add Training</h1>
      <label htmlFor="trainingName" className="font-bold mb-2">Training Name</label>
      <input
        type="text"
        id="trainingName"
        className="input "
        onChange={(e) => {
          setNewTraining(e.target.value);
          window.localStorage.removeItem(newTraining)

        }}
        value={newTraining}
        
      />
      <button
        onClick={(e) => {
          if (newTraining != "") {
            var tester = false;
            training.map((t) => {
              if (t == newTraining) {
                tester = true;
              }
            });
            !tester &&
              setTraining([...training, newTraining]);
            setNewTraining("");
          }
        }}
        className="text-3xl m-1 border hover:border-blue-400 w-fit  rounded-4xl border-white transition-all duration-200 hover:bg-blue-200"
      >
        <IoAddCircle />
      </button>
    </section>
  );
}
