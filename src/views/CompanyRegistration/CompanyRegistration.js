import React from 'react'
import { Container, TextField, Button, Typography } from '@material-ui/core'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useStyle } from './style'

const CompanyRegistration = ()=>{
    const classes = useStyle();
    return (
        <Container>
            <Typography
                variant='h6'
                color='textSecondary'
                gutterBottom
            >
                Company Registration 
            </Typography>
            <form>
                <TextField 
                    onChange={()=>{

                    }}
                    fullWidth
                    variant='outlined'
                    label='Country' 
                    className={classes.field}
                />
                <TextField 
                    onChange={()=>{
                        
                    }}
                    fullWidth
                    variant='outlined'
                    label='City' 
                    className={classes.field}
                />
                <TextField 
                    onChange={()=>{
                        
                    }}
                    fullWidth
                    variant='outlined'
                    label='Company Name' 
                    className={classes.field}
                />
                <TextField 
                    onChange={()=>{
                        
                    }}
                    fullWidth
                    variant='outlined'
                    label='Address' 
                    className={classes.field}
                />
                <TextField 
                    onChange={()=>{
                        
                    }}
                    fullWidth
                    variant='outlined'
                    label='Tax Number' 
                    className={classes.field}
                />
                <TextField 
                    onChange={()=>{
                        
                    }}
                    fullWidth
                    variant='outlined'
                    label='Email Address' 
                    className={classes.field}
                />
            </form>
            <Button
                type="submit"
                color='primary'
                variant='contained'
                endIcon={<ArrowRightIcon color='primary' fontSize='small'/>}
            >
                Submit
            </Button>
        </Container>
    )
}

export {CompanyRegistration}