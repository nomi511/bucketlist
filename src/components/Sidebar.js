import { useState } from 'react';
import '../styles/sidebar.css'



const Sidebar = ({sidelist, changeid, setList, maindelete}) => {

    
    const [listcount, setlistcount] = useState(5);
    const [single, setsingle] = useState('')

    const changehandler = (val) => 
    {
        setsingle(val);
    }

    const handlsubmit = (e) => 
    {
        if(single === '')
        {
            alert("enter some data")
        }else{
            e.preventDefault();
            setList(listcount, single);
            setlistcount(listcount + 1);
            setsingle('')
        }
        
    }


    
    
    return ( 
        <div className="sidebarinput">
            <form className="formsearch" onSubmit={handlsubmit}>
                <input type="text" placeholder="New Collection... " value={single} onChange={(e)=>changehandler(e.target.value)}/>
                <button type="submit">Add</button>
            </form>

            <div className="slist">

            <ul className="lst">
                { sidelist ?
                    sidelist.map((li)=>(
                        
                        <li onClick={()=>changeid(li.id)} className="item" key={li.id}>
                            <div className='itemtsk'>
                                {li.task}
                            </div>
                            
                            <button onClick={() => maindelete(li.id)}>X</button>
                        </li>
                        
                    )) : <li>No Wishes...</li>
                }
            </ul>

            </div>
            
        </div>
        
     );
}
 
export default Sidebar;