//Functional
import * as React from 'react';

//Components
import {Box, TextField, Button, Stack }from '@mui/material';
import {useForm} from 'react-hook-form';
import {object, string, number} from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Form = () => {
    const personSchema = object({
        first_name: string().required("Must enter a first name.").min(2),
        last_name: string().min(3, "Last Name must be 3 characters."),
    });

    const {register, handleSubmit, setValue, watch, formState:{errors}, reset} = useForm({
        resolver: yupResolver(personSchema)
    });

    const handleChange = (event) => {
        setValue(event.target.name, event.target.value);
    }

    const onSubmit = (data) => {
        let JSONData = JSON.stringify(data);
        console.log(JSONData);
        /*
            Here is when we would use axios to send json data to the backend.
            build axios "options" 
        */
        reset();
    }

    return (
        <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        >
            <TextField 
                id="outlined-basic" 
                label="First Name" 
                variant="outlined" 
                {...register("first_name")}
                onChange={handleChange}//must be after the register 
                helperText={errors.first_name && <span>{errors.first_name.message}</span>}
                error={errors.first_name !== undefined}
            />

            <TextField 
                id="outlined-basic" 
                label="Last Name" 
                variant="outlined" 
                {...register("last_name")}
                onChange={handleChange}//must be after the register 
                helperText={errors.last_name && <span>{errors.last_name.message}</span>}
                error={errors.last_name !== undefined}
            />

            <Stack direction="row" spacing={2}>
                <Button type="submit" variant="contained" color="success">Submit</Button>
                <Button onClick={() => reset()}  variant="contained" color="error">Reset</Button>
            </Stack>
        </Box>
    );
}

export default Form;