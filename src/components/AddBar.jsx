import React, {useState} from 'react';

const AddBar = ({addTodo}) => {
    const [value,AddValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) return;
        addTodo({
            value:value,
            strike:false
        });
        AddValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={e => AddValue(e.target.value)} className="red-text" placeholder="Add TODOS" />
        </form>
    ) 
}


export default AddBar;
