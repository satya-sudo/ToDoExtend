import React from 'react';


const Task = ({index,data,handleRemove,handleCut}) => {
    


    return (
        <div className="card">
            <div className="card-content red-text">
                <div className="row">
                    <div className="col s8">
                        {data.strike ? 
                        <strike> {data.value} </strike> : <p>{data.value}</p>}
                    
                    </div>
                    <div className="col s2"> 
                        <button className="btn-floating btn-small waves-effect waves-light red" onClick={()=>handleCut(index)}><i class="material-icons">done</i></button>
                    </div>
                    <div className="col s2"> 
                        <button className="btn-floating btn-small waves-effect waves-light red" onClick={()=>handleRemove(index)}><i class="material-icons">delete</i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Task;