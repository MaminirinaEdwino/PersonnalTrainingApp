import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";

export default function Training({ trainingname, i, deleteTraining }) {
  const [training, setTraining] = useLocalStorage(
    trainingname,
    localStorage.getItem(trainingname)
  );
  const [tmp, setTmp] = useState(training);
  const predictNext = () => {
    return parseInt(1.054054054054054 * training + 10.27027027027027);
  };
  const serieMaker = () => {
    let series = [training];
    for (let index = 1; index < 5; index++) {
      series.push(0.842606149341142 * series[index - 1] - 0.576134699853588);
    }
    return series;
  };
  const [serie, setSeries] = useState(serieMaker());
  const [toggle, setToggle] = useState(false)
  return (
    <article className="shadow-2xl flex flex-col bg-white  m-5 p-2 rounded ">
      <h1 className="text-2xl font-bold">{trainingname}</h1>
      <span>Last : {training}</span>
      <span>Target : {predictNext()}</span>
      <div className="flex flex-col gap-1 p-1">
        <label htmlFor="atteint">New number</label>
        <input
          type="number"
          id="atteint"
          onChange={(e) => {
            setTmp(e.target.value);
          }}
          value={tmp}
          className="input"
        />
      </div>
      <div className="p-1 justify-end w-full flex gap-2">
        <button
          onClick={(e) => {
            setTraining(parseInt(tmp));
            setSeries(serieMaker());
          }}
          className=" bg-blue-400 bouton "
        >
          update
        </button>
        <button className="bouton bg-red-400"
          onClick={(e) => {
            deleteTraining(i);
            window.localStorage.removeItem(trainingname);
          }}
        >
          remove
        </button>
      </div>
      <div>
        <h1 onClick={(e)=>{
            setToggle(toggle=>!toggle)
        }} className=" select-none font-bold w-fit p-1 rounded"
        style={{
            background: (toggle? "var(--color-blue-400)" : "none"),
            color: (toggle? "white" : "black")
        }}>Series</h1>
        <div style={{
            display : (toggle ? "block" : "none")
        }} className="p-1">
          {serie.map((s, i) => (
            <h1>
              {parseInt(s)}
            </h1>
          ))}
        </div>
      </div>
    </article>
  );
}
