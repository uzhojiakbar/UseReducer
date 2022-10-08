import React from "react";

const Body = ({ students, deleteUser }) => {

    return (
        <div  >
            <h1>Students List - {students.length}</h1>
            {
                students.map(v => {
                    return <h2 key={v.id}>
                        {v.id} -
                        {v.name} -
                        {v.surname} - {' '}
                        <button onClick={() => deleteUser(v.id)} >Delete</button>
                    </h2>
                })
            }
        </div>
    )
}
export default Body;