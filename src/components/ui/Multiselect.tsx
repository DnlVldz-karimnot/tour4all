import * as React from 'react';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import MenuItem from '@mui/material/MenuItem';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/system';


interface option {
    id: string;
    label: string;
}
interface MultiSelectChipProps {
    options: option[];
    selected?: option[];
    onSelect?: any;
    isDisabled?: boolean;
    label?: string;
    size?: string;
}

const MultiSelectChip: React.FC<MultiSelectChipProps> = ({ options, onSelect, selected = null, isDisabled = false, label, size }) => {
    const [selectedOptions, setSelectedOptions] = useState<option[]>([]);

    useEffect(() => {
        // console.log(selected)
        if (selected) {
            // console.log("entrea aselected")
            setSelectedOptions(selected)
            // onSelect(selected)
        }
    }, [selected])


    const handleDelete = (optionToDelete: option) => {
        /*  console.log("entre")
         console.log(selectedOptions) */
        const chip = selectedOptions.filter(option => option.id !== optionToDelete.id)
        /* console.log(chip) */
        setSelectedOptions(chip);
        onSelect(chip)
    };

    return (
        <Box>
            <Autocomplete
                multiple
                disabled={isDisabled}
                id="tags-outlined"
                options={options}
                value={selectedOptions}
                defaultValue={selectedOptions}
                getOptionLabel={(option) => option.label}
                filterSelectedOptions
                onChange={(event, newValue) => {
                    setSelectedOptions(newValue);
                    onSelect(newValue)
                }}
                renderTags={(value: option[], getTagProps) =>
                    value.map((option, index) => (
                        <div key={index}>
                            <Chip
                                variant="filled"
                                color='primary'
                                label={option.label}
                                {...getTagProps({ index })}
                                onDelete={() => handleDelete(option)}
                            />
                        </div>

                    ))
                }
                renderInput={(params) => (
                    <TextField
                        {...params}
                        // size={"small"}
                        label={label}
                        placeholder={label}
                        margin='normal'
                    />
                )}
            />
        </Box>
    );
};

export default MultiSelectChip;
