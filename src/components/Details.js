import { useState } from 'react';
import '../styles/details.css'




const Details = ({data, id}) => {

    const [detData, setdetData] = useState(data)
    const [newinput, setnewinput] = useState('');

    const [licounter, setlicounter] = useState(10);

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



    
    return ( 
        <div className="detailsection">
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