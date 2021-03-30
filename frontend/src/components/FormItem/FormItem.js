import React from 'react'
import './FormItem.css'
import { FormControl } from '@material-ui/core'
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormControl'
import Checkbox from '@material-ui/core/Checkbox'


export const FormRadio = ({ name, fieldName, value, onClick }) => {
    return (
        <FormControl className="form-item" component="fieldset">
            <FormLabel component="legend">{fieldName}</FormLabel>
            <RadioGroup aria-label={fieldName} name={name} value={value} >
                <FormControlLabel control={
                    <Radio checked={value[0] === true} onClick={(e) => onClick(e, "Yes")}  />
                } label="Yes" />
                <FormControlLabel control={
                    <Radio checked={value[0] === false} onClick={(e) => onClick(e, "No")}  />
                } label="No" />
            </RadioGroup>
        </FormControl>
    )
}

export const FormCheckbox = ({ name, labels, onClick, fieldName, value }) => {
    return (
        <FormControl className="form-item" component="fieldset" >
            <FormLabel component="legend">{fieldName}</FormLabel>
            <FormGroup name={name}>
                {labels.map((label, idx) => (
                    <FormControlLabel
                        key={idx}
                        control={
                            <Checkbox 
                                name={name}
                                checked={value[idx]} 
                                onClick={(e) => onClick(e, idx)} 
                            />
                        }
                        label={label}
                    />
                ))}
            </FormGroup>
        </FormControl>
    )
}

export const FormRadioMultiple = ({ name, fieldName, value, onClick, labels}) => {
    return (
        <FormControl className="form-item" component="fieldset">
            <FormLabel component="legend">{fieldName}</FormLabel>
            <RadioGroup aria-label={fieldName} name={name} value={value} >
                {labels.map((label, idx) => (
                    <FormControlLabel key={idx} control={
                        <Radio checked={value[idx]} onClick={(e) => onClick(e, idx)}  />
                    } label={label} />
                ))}
            </RadioGroup>
        </FormControl>
    )
}
