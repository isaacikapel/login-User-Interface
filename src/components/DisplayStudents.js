import { useState, useEffect } from "react";
import axios from "axios";

const DisplayStudents = () => {
        const [data, setData] = useState ([])

        useEffect(() => {
            axios.get("http://localhost:4000/api/students/getAllStudent")
            .then(res => {setData(res.data) })
            .then(err => console.log(err))
        })
    
    return (
        <table className="table">
            <td>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                </tr>
            </td>
            <tbody>
                {data.map((d, i) => (
                    <tr key={i}>
                        <td>{d.firstName}</td>
                        <td>{d.lastName}</td>
                        <td>{d.gender}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DisplayStudents;