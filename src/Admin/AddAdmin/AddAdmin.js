import React from 'react';
import { useForm } from "react-hook-form";

const AddAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        fetch("https://afternoon-meadow-22769.herokuapp.com/makeAdmin", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        alert('Added admin successfully!!!!')

    };
    return (
        <div className="add-service">
            <div className="contact1">
                <div className="container-contact1 d-flex justify-content-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="contact1-form validate-form ">
                        <span className="contact1-form-title">
                            Make Admin
                        </span>
                        <div className="wrap-input1 validate-input " data-validate="Name is required">
                            <input className="input1 w-100" placeholder="Admin email" {...register("email")} />
                        </div>


                        <div className="container-contact1-form-btn">
                            <button type='submit' className="contact1-form-btn">
                                <span>
                                    Make admin
                                
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;



