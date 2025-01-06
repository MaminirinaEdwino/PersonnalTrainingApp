import Training from "./training"

export default function ListTraining({
    training, setTraining
}){
    const deleteTraining = (i)=>{
        let tmp = training
        tmp.splice(i, 1)
        setTraining(tmp)
    }
    return <section className="p-5 ">
        {training.map((t,i)=>
            <Training i={i} trainingname={t} key={t+i} deleteTraining={deleteTraining}/>
        )}
    </section>
}