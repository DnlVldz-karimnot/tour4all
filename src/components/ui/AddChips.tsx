import React, { useState, KeyboardEvent, useEffect } from 'react';
import { Chip, TextField } from '@mui/material';

interface ChipInputProps {
    onChipAdd: any;
    label?: string;
    selected?: string[]
}

const AddChips: React.FC<ChipInputProps> = ({ onChipAdd, label = "", selected = null }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [values, setValues] = useState<string[]>([]);

    useEffect(() => {
        if (selected) setValues(selected)
    }, [selected])


    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {

        if (event.key === 'Enter' && inputValue.trim() !== '') {
            event.preventDefault();
            setValues([...values, inputValue])
            onChipAdd([...values, inputValue]);
            setInputValue('');

        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const onDelete = (val: string) => {
        const newValues = values.filter((value) => value !== val)
        setValues(newValues)
        onChipAdd(newValues);
    }


    return (
        <div>
            <TextField
                sx={{ mb: 2 }}
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                label={label}

            />

            {
                values.map((val, i) => <Chip
                    key={i}
                    variant="filled"
                    color='primary'
                    label={val}
                    onDelete={() => onDelete(val)}
                    style={{ marginLeft: '8px' }}
                />)
            }
            {/* {inputValue.trim() !== '' && (
                <Chip
                variant="filled"
                color='primary'
                    label={inputValue}
                    onDelete={() => setInputValue('')}
                    style={{ marginLeft: '8px' }}
                />
            )} */}
        </div>
    );
};

export default AddChips;

