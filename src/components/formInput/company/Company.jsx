import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import './company.css';

const Company = () => {

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const names = [
        'Google',
        'Microsoft',
        'Accenture',
        'Meta',
        'Oracle',
        'Amazon',
        'Flipcart',
        'Apple',
        'Samsung',
        'Xiomi',
    ];

    const theme = useTheme();
    const [companyName, setCompanyName] = useState('');

    function getStyles(name, companyName, theme) {
        return {
            fontWeight:
            companyName.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setCompanyName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };


  return (
    <div className="inputContainer">
            <div className="label">
                <InputLabel htmlFor="component-simple">Choose your organization</InputLabel>
            </div>
            <div className='input'>

                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel htmlFor="component-simple">Name</InputLabel>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        single
                        value={companyName}
                        onChange={handleChange}
                        input={<OutlinedInput label="Name" />}
                        MenuProps={MenuProps}
                        autoWidth='true'
                    >
                        {names.map((name) => (
                            <MenuItem
                                key={name}
                                value={name}
                                style={getStyles(name, companyName, theme)}
                            >
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

            </div>
        </div>
  )
}

export default Company;