import {useState} from "react";
import { FaEdit,FaTrash } from 'react-icons/fa';
import {useSelector,useDispatch} from 'react-redux'
import {DeleteForm, SortedForm,SetDataToForm,SetUpdatedindex} from '../redux/form/Action';
import { FormValue } from "../redux/form/ActionTypes"

function Table() {
    const forms=useSelector((state:any)=>state.FormReducer.FormToTable)
    const dispatch=useDispatch()
    const [sortEname, setSortEname] = useState(true);
    const [sortGender, setSortGender] = useState(true);
   

    const ButtonToggle = (key: keyof FormValue) => {
        const sortedForms = [...forms];
        if ((key === "ename" && sortEname) || (key === "gender" && sortGender)) {
            sortedForms.sort((a, b) => (a[key] || "").localeCompare(b[key] || ""));
        } else {
            sortedForms.sort((a, b) => (b[key] || "").localeCompare(a[key] || ""));
        }

        if (key === "ename") {
            setSortEname(!sortEname);
        }

        if (key === "gender") {
            setSortGender(!sortGender);
        }

        dispatch(SortedForm(sortedForms));
    };

    const deleteData = (index:number) => {
        const newform=(forms.filter((_:FormValue, i:number) => index !== i));
        dispatch(DeleteForm(newform))
    };

    const updateData=(form:FormValue,index:number|null)=>{
        dispatch(SetUpdatedindex(index))
        return(
            dispatch(SetDataToForm(form))
        )   
       
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>
                            Employee Name &nbsp;{" "}
                            <button onClick={() => ButtonToggle("ename")}>{sortEname ? "Asc" : "Desc"}</button>
                        </th>
                        <th>
                            Gender &nbsp;{" "}
                            <button onClick={() => ButtonToggle("gender")}>{sortGender ? "Asc" : "Desc"}</button>
                        </th>
                        <th>Department</th>
                        <th>Date of Joining</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                 
                    {forms.map((form:FormValue, index:number) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{form.ename}</td>
                            <td>{form.gender}</td>
                            <td>{form.department}</td>
                            <td>{form.doj}</td>
                            <td>{form.email}</td>
                            <td>
                                <button onClick={() => updateData(form, index)} style={{ color: 'green' }}><FaEdit /></button>
                                <button onClick={() => deleteData(index)} style={{ color: 'red' }}><FaTrash /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;