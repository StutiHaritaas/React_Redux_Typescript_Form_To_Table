import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { SubmitForm,SetUpdatedindex } from '../redux/form/Action';
import { FormValue,State } from "../redux/form/ActionTypes"


function Form(){

    const formData=useSelector((state: { FormReducer: State })=>state.FormReducer.TableToForm)
    const updatedIndex=useSelector((state: { FormReducer: State })=>state.FormReducer.Updatedindex)
    const dispatch=useDispatch();

    const [forms, setForms] = useState<FormValue[]>([]);
    const [ename, setEname] = useState("");
    const [gender, setGender] = useState("");
    const [department, setDepartment] = useState("");
    const [doj, setDoj] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState<{ [key:string]: JSX.Element|string}>({});

    useEffect(() => {
        setEname(formData.ename||"");
        setGender(formData.gender|| "");
        setDepartment(formData.department || "");
        setDoj(formData.doj || "");
        setEmail(formData.email || "" );
    }, [formData]);

    const handleEnameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEname(e.target.value);
        setErrors((e) => ({ ...e, ename: "" }));
    };

    const handleGenderChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setGender(e.target.value);
    };

    const handleDepartmentChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setDepartment(e.target.value);
    };

    const handleDojChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setDoj(e.target.value);
        setErrors((e) => ({ ...e, doj: "" }));
    };

    const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmitForm = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent form submission
        
        let errors: { [key: string]: JSX.Element | string } = {};

        if (!ename.trim()) {
            errors.ename = <span style={{ marginLeft: "190px" }}>Please enter your name !</span>;
        }

        if (!doj.trim()) {
            errors.doj = <span style={{ marginLeft: "190px" }}>Please enter your DOJ !</span>;
        }

        if (Object.keys(errors).length !== 0) {
            setErrors(errors);
            return;
        }

        const newForm = { ename: ename, gender: gender, department: department, doj: doj, email: email };

        if (updatedIndex !== null) {
            const updatedForms = [...forms];
            updatedForms[updatedIndex] = newForm;
            setForms(updatedForms);
            dispatch(SubmitForm(newForm,updatedIndex))
            dispatch(SetUpdatedindex(null))
        } else {
            setForms((f) => [...f, newForm]);
            dispatch(SubmitForm(newForm,updatedIndex))
        }
       

        setEname("");
        setGender("");
        setDepartment("");
        setDoj("");
        setEmail("");
        setErrors({});
    };

    const handleResetForm = () => {
        setEname("");
        setGender("");
        setDepartment("");
        setDoj("");
        setEmail("");
        setErrors({});
        dispatch(SetUpdatedindex(null))

        setTimeout(() => {
            setErrors({});
        }, 0);
    };
    return (
        <div className="background-container">
            <div className="form-container">
                <h1>Registration Form</h1>
                <form onSubmit={handleSubmitForm}>
                    <label>Employee Name:</label>
                    <input
                        className="form-element"
                        type="text"
                        value={ename}
                        onChange={handleEnameChange}
                        style={{ borderColor: errors.ename ? "red" : "" }}
                    />
                    {errors.ename && (
                        <div className="error-message" style={{ color: "red" }}>
                            {errors.ename}
                        </div>
                    )}
                    <br />
                    <label>Gender:</label>
                    <select className="form-element" value={gender} onChange={handleGenderChange}>
                        <option value=""> </option>
                        <option value="Male">Male </option>
                        <option value="Female">Female</option>
                    </select>
                    <br />
                    <label>Department:</label>
                    <select className="form-element" value={department} onChange={handleDepartmentChange}>
                        <option value=""> </option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Finance">Finance</option>
                        <option value="Sales and Marketing">Sales and Marketing</option>
                        <option value="Research and Development">Research and Development</option>
                        <option value="Customer Service Development">Customer Service Development</option>
                    </select>
                    <br />
                    <label>Date of Joining:</label>
                    <input
                        className="form-element"
                        type="date"
                        value={doj}
                        onChange={handleDojChange}
                        style={{ borderColor: errors.doj ? "red" : "" }}
                    />
                    {errors.doj && (
                        <div className="error-message" style={{ color: "red" }}>
                            {errors.doj}
                        </div>
                    )}
                    <br />
                    <label>Email:</label>
                    <input
                        className="form-element"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="example@gmail.com"
                    />{" "}
                    <br />
                    <button  className="btn" value="Submit" type="submit">Submit</button>
                    <button className="btn" onClick={handleResetForm}>Reset</button>
                </form>
            </div>
        </div>
    );
}  


export default Form;