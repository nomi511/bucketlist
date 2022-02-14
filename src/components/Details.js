import { useEffect, useState } from 'react';
import '../styles/details.css'




const Details = ({data, id, sidelistdata}) => {

    const [detData, setdetData] = useState(data)
    const [newinput, setnewinput] = useState('');
    const [licounter, setlicounter] = useState(10);
    const [title, settitle] = useState("")

    let newarr = detData.filter((item)=> item.mainid === id );
    
    const clickhandler = (e) => 
    {
        e.preventDefault()
        setdetData([...detData, {mainid: id, id: licounter, task: newinput, done: false}]);
        setlicounter(licounter + 1);
        setnewinput('')

        console.log(detData);

    }

    const completetask = (item) => 
    {
        const update = {...item, done:true}
        setdetData(()=>(
            detData.map((itm)=> ( itm.id === item.id? update: itm ))
        ))
    }

    const deletetask = (item) =>
    {
        setdetData(() => detData.filter((itm)=> itm.id !== item.id))
    }

    useEffect(()=>{

        const check = sidelistdata.find((d) => d.id === id)
        settitle(check.task.toUpperCase())
        

    }, [id])

    
    return ( 
        <div className="detailsection">
            <h3 className="title">{title}</h3>
            <div className="detailsdiv">

                
            
            { newarr && newarr.length > 0 ? newarr.map((item)=> (
                        <div key={item.id}>
                            
                            {
                                item.done === false ? <div className="item">
                                    <div className="itemtsk">
                                        {item.task}
                                    </div>
                                    <button onClick={()=>completetask(item)}>✓</button>
                                </div> : (<div className="item" id="completed"> 

                                    <div className="itemtsk completedtask">
                                        {item.task}
                                    </div>
                                    <button onClick={()=>deletetask(item)} id="deletebtn">Delete</button>
                                
                                 </div>)
                            }
                            
                        </div>
                        ))
                 : <h3>No Records...</h3>
            }
            
            </div>

            <div className="detailsbottom">
                <form onSubmit={clickhandler}>
                    <input type="text" placeholder="New Task..." onChange={ (e) => setnewinput(e.target.value)} value = {newinput}/>
                    <button type="submit" >Add</button>
                </form>

            </div>
        </div>
     );
}
 
export default Details;