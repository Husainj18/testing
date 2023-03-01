import Navbar from './Navbar';
import { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';






const FormVal = () => {
    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match')
            
    });


    const formOptions = { resolver: yupResolver(validationSchema) };

    const [getdata, setdata] = useState({})
    const { register, handleSubmit, formState: { errors } } = useForm(formOptions);
    const onSubmit = (data) => {
        console.log("ffff", data);
        setdata(data)
    }



        return (
            <>
                <Navbar data={getdata} />
                <div className='container'>
                    <h2>SignUp-</h2>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Field>
                            <label>First Name</label>
                            <input placeholder='First Name' type="text"  {...register("firstName", { required: true, maxLength: 10 })} />
                        </Form.Field>
                        {errors.firstName && <p>ERROR!!!-Limit is 10 word</p>}
                        <Form.Field>
                            <label>Last Name</label>
                            <input placeholder='Last Name' type="text"  {...register("LastName", { required: true, maxLength: 10 })} />
                        </Form.Field>
                        {errors.LastName && <p>ERROR!!!- Please Enter the Last Name</p>}
                        <Form.Field>
                            <label>Email</label>
                            <input placeholder='Email' type="email"  {...register("email", { required: true })} />
                        </Form.Field>

                        <Form.Field>
                            <label htmlFor="password">Password</label>
                            <input placeholder='Password' type="password"  {...register("password")} className={`form-control ${errors.password ? 'is-invalid' : ''}`} 
                            
                            />
                             <div className="invalid-feedback">{errors.password?.message}</div>
                        </Form.Field>
                        <Form.Field>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input placeholder='Password' type="password" {...register("confirmPassword")}  className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                            />
                             <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
                        </Form.Field>

                        <Button type='submit'  >Submit</Button>
                    </Form>
                </div>

            </>
        )
    }

  
 
    export default FormVal

