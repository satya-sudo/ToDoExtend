import React, {useState,useEffect} from 'react';
import AddBar  from './components/AddBar';
import Task from './components/Tasks';
// import {data_fetch,data_set} from './data/data';

import { data_set,getData } from './data/data';


const App = () => {

    const [list, setList] = useState([]);
    
    useEffect(() => {
        const data = getData();
        setList(data);
    },[]);
    //  handleRemove={() => setList(list.filter((_,i) => i !== index))} handleCut={() => setList(list.filter((_,i) => i !== index))}
    
    const handleAdd = (value) => {
        const newList = [...list,value];
        data_set(newList);
        setList(newList);
    }

    const handleRemove = async (index) => {
        const newList = list.filter((_,i) => i !== index)
        await data_set(newList);

        setList(newList);
    }

    const handleCut = (index) => {
        list[index].strike = !list[index].strike;
        setList([...list]);
    }
    return (
        <div>
            <AddBar addTodo={handleAdd} />
            <div>
                {list.map((item,index) => {
                    return <Task key={index} data={item} index={index} handleRemove={handleRemove} handleCut={handleCut}/>
                })}
            </div>
        </div>
    );
}


export default App;
