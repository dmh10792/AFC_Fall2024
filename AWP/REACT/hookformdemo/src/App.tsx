import { useState } from 'react'
import {useForm} from 'react-hook-form'
import {object, string, number} from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import './App.css'

function App() {
  const userSchema = object({
    fname: string().required("Must enter a first name.").max(5, "Cannot be more than 5 characters."),
    lname: string().min(1, "Must be more that 1 character.").max(6, "Must be less than 6 characters."),
    age: number().min(1, "Must be positive.").max(99, "Must be less that 100").required(),
    email: string().required().email(),
    password: string().min(8, "Must be more than 8 characters.").max(12, "Must be less than 12 characters.")
  })

  const {register, handleSubmit, setValue, reset, formState: {errors}} = useForm({
    resolver: yupResolver(userSchema)
  });

  const onSubmit = (data: any): void => {
    console.log(data);
    reset();
  }

  const handleChange = (event : any): void=> {
    setValue(event.target.name, event.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <label htmlFor="fname">First Name: </label>
          <input type="text" {...register("fname")} onChange={handleChange} id="fname" />
          {errors.fname && <span>{errors.fname.message}</span>}
        </div>
        <div className="container">
          <label htmlFor="lname">Last Name: </label>
          <input type="text" {...register("lname")} onChange={handleChange} id="lname" />
          {errors.lname && <span>{errors.lname.message}</span>}
        </div>
        <div className="container">
          <label htmlFor="age">Age: </label>
          <input type="number" {...register("age")} onChange={handleChange} id="age"  autoComplete='off'/>
          {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div className="container">
          <label htmlFor="email">Email: </label>
          <input type="text" {...register("email")} onChange={handleChange} id="email" />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className="container">
          <label htmlFor="password">Password: </label>
          <input type="password" {...register("password")} onChange={handleChange} id="password" />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
