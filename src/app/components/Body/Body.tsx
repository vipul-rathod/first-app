'use client'
import React from 'react'
import {Container, Box, Grid, TextField, FormControlLabel, Checkbox, Button, FormLabel, RadioGroup, Radio, Typography, InputLabel, Select, FormControl, MenuItem, SelectChangeEvent} from '@mui/material'
import { useForm } from 'react-hook-form'
import styles from './Body.module.css'
import {useState} from 'react'
import TextInputProps from './TextInputProps'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs'

const Body = () => {
    const {register, handleSubmit} = useForm();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [dob, setDob] = useState(``);
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('female');
    const [check, setCheck] = useState(false);

    // const data = { size: 'small', backgroundColor: 'cyan', color: 'hover:white', fontSize: {sm : '14px', md : '20px', xl : '26px'}};

    const handleFormSubmit = () => {
        console.log({name, age, dob, city, phone, gender});
    }

    const handleDropdownChange = (event: SelectChangeEvent) => {
        setCity(event.target.value);
    }

  return (
    <Container component="main" maxWidth='xs' className={styles.background}>
    {/* <Container component="main" maxWidth='xs' className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500'> */}
        <Box
            sx={{
                marginTop: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // pt: '10px'
            }}
        >
            <Typography component='h1' variant='h5'>
                Personal Information
            </Typography>
            <Box component='form' onSubmit={handleSubmit(handleFormSubmit)} sx={{mt: 3}}>
                <Grid container spacing={2}>
                    {/* Name field */}
                    <Grid item xs={12} sm={2}>
                        <Typography variant={'h6'} mt={2}>
                            Name:
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <TextField
                            inputProps={TextInputProps}
                            autoComplete='given-name'
                            required
                            fullWidth
                            id='name'
                            autoFocus
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Grid>
                    {/* Age and DOB field */}
                    <Grid item xs={12} sm={2}>
                        <Typography variant={'h6'} mt={2}>
                            Age:
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            type='number'
                            InputProps={{inputProps: {max: 2, min: 0}}}
                            autoComplete='age'
                            // required 
                            fullWidth
                            id='age'
                            value={age}
                            // label='Last Name'
                            // {...register('age')}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Typography variant={'h6'} mt={2}>
                            DOB:
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker 
                                value={dayjs(dob)}
                                onChange={(value) => setDob(dayjs(value).format('DD/MM/YYYY'))}
                            />
                        </LocalizationProvider>
                    </Grid>
                    {/* City and Phone Field */}
                    <Grid item xs={12} sm={2}>
                        <Typography variant={'h6'} mt={2}>
                            City:
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <FormControl fullWidth>
                            <Select
                                id="demo-simple-select"
                                value={city}
                                onChange={handleDropdownChange}
                            >
                                <MenuItem value={'Thane'}>Thane</MenuItem>
                                <MenuItem value={'Bhayander'}>Bhayander</MenuItem>
                                <MenuItem value={'Borivali'}>Borivali</MenuItem>
                            </Select>
                            </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Typography variant={'h6'} mt={2}>
                            Phone:
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <TextField
                            type='number'
                            autoComplete='phone'
                            fullWidth
                            id='phone'
                            value={phone}
                            onInput={(e) => {(e.target as HTMLInputElement).value = Math.max(0, parseInt((e.target as HTMLInputElement).value)).toString().slice(0, 10)}}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </Grid>
                    {/* Gender Radio button */}
                    <Grid item xs={12}>
                        <FormLabel>Gender</FormLabel>
                            <RadioGroup
                                // aria-labelledby="demo-radio-buttons-group-label"
                                // defaultValue="male"
                                // name="radio-buttons-group"
                                row
                                value={gender}
                                // {...register('Gender')}
                                onChange={(e) => {setGender(e.target.value)}}
                            >
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female"/>
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                    </Grid>
                    {/* Checkbox */}
                    <Grid item xs={12}>
                        <FormControlLabel control={<Checkbox />} label="Are you sure you want to Continue" value={check} onChange={(e,val) => setCheck(val)}/>
                    </Grid>
                </Grid>
                    {/* <Button type='submit' className='p-2 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500' disabled={!check} onClick={handleButtonClick} fullWidth variant='contained' sx={{mt:3, mb:2, backgroundColor: 'aquamarine'}}>Sign-Up</Button> */}
                    {/* <Button type='submit' className='p-2 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500' disabled={!check} onClick={() => handleButtonClick()} fullWidth variant='contained' sx={{mt:3, mb:2, backgroundColor: 'aquamarine'}}>Sign-Up</Button> */}
                    <Button type='submit' className='p-2 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500' disabled={!check} fullWidth variant='contained' sx={{mt:3, mb:2, backgroundColor: 'aquamarine'}}>Sign-Up</Button>
                    {/* <Button type='submit'>Click Me</Button> */}
            </Box>
        </Box>
    </Container>
  )
}

export default Body


















// import {Button, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from '@mui/material'
// import styles from './Body.module.css'

// const Body = () => {
//     const data = { backgroundColor: 'blue', fontSize: {sm : '14px', md : '20px', xl : '26px'}};
//   return (
//     <main>
//       <h1 className={styles.body}>Employee Register</h1>
//       <div className={styles.textfield}>
//         <TextField id="employee-name" label="Employee Name" variant="filled" required={true}/>
//       </div>
//       <div className={styles.textfield}>
//         <TextField id="employee-age" type='number' label="Employee Age" variant="filled" required={true}/>
//       </div>
//       <div className={styles.padding}>
//         <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
//         <RadioGroup
//             aria-labelledby="demo-radio-buttons-group-label"
//             defaultValue="female"
//             name="radio-buttons-group"
//         >
//             <FormControlLabel value="female" control={<Radio />} label="Female" />
//             <FormControlLabel value="male" control={<Radio />} label="Male" />
//             <FormControlLabel value="other" control={<Radio />} label="Other" />
//         </RadioGroup>
//         {/* <div className={styles.padding}> */}
//         <div>
//             <FormControlLabel required control={<Checkbox />} label="I understand and confirm the details provided above is correct" />
//         </div>
//         <Button sx={data}>Sign-Up</Button>
        
//       </div>
//     </main>
//   )
// }

// export default Body

