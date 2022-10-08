import React, { useState } from "react";
import { useReducer } from "react";
import Navbar from "../Components/Navbar";
import Body from "../Components/Head";
import Selected from "../Components/Selects";

const Root = () => {

    const [students, setStudents] = useState(
        [
            { id: 1, name: 'Hojiakbar', surname: 'Murodillayev' },
            { id: 2, name: 'Azizbek', surname: 'Tohirov' },
            { id: 3, name: 'Abdulaziz', surname: 'Maxsutaliyev' },
        ]
    )
    const deleteUser = (id) => {
        let res = students.filter(v => v.id !== id)
        setStudents(res)
        console.log(students);
    }
    return (
        <>
            <Navbar students={students} />
            <Body students={students} deleteUser={deleteUser} />
            <hr />
            <Selected/>
        </>
    );
}

export default Root;