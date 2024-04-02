import { useState, useEffect } from "react";
import axios from "axios";

const DisplayReg = () => {
        const [data, setData] = useState ([])

        useEffect(() => {
            axios.get("http://localhost:4000/api/reg/getAllReg")
            .then(res => {setData(res.data) })
            .then(err => console.log(err))
        })
    
    return (
        <table className="table">
            <td>
                <tr>
                    <th> Name</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
            </td>
            <tbody>
                {data.map((d, i) => (
                    <tr key={i}>
                        <td>{d.name}</td>
                        <td>{d.email}</td>
                        <td>{d.password}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DisplayReg;