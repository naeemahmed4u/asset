import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';


export const Signup = () => {
    const validate = Yup.object({
        firstName: Yup.string()
        .max(15, 'Must be 15 charaters or less')
        .required('Required'),
        lastName: Yup.string()
        .max(20, 'Must be 20 charaters or less')
        .required('Required'),
        email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
        password: Yup.string()
        .min(6, 'Password must be at least 6 charaters')
        .required('Password is required'),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .required('Confirm password is required'),
    })

    let values;

    const PostData = async (e) => {
        e.preventDefault();
        const { firstName, lastName, email, password, confirmPassword } = values;

        const res = await fetch("/naeem", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                firstName, lastName, email, password, confirmPassword  
            })
        });

        const data = await res.json();
        if (data.status === 422 || !data) {
            window.alert("Invaild Registration");
            console.log("Invaild Registration");
        } else {
            window.alert("Sign Up Sucessfully");
            console.log("Sign Up Sucessfully");
        }
    }

    return (
        <Formik 
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
            }}
            validationSchema={validate}
            onSubmit = {PostData}
        >
            {formik =>(
                <div>
                    <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
                    <Form method="POST">
                        <TextField label="First Name" name="firstName" type="text"/>
                        <TextField label="Last Name" name="lastName" type="text"/>
                        <TextField label="Email" name="email" type="email"/>
                        <TextField label="Password" name="password" type="password"/>
                        <TextField label="Confirm Password" name="confirmPassword" type="password"/>
                        <button className="btn btn-dark mt-3" type="submit">Register</button>
                        <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}
