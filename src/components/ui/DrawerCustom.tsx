import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import { makeStyles, styled } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import { Typography, TextField, Button, Box, FormControl, InputLabel, Select, Checkbox } from '@mui/material';
import { InputAdornment } from '@mui/material';
import * as Yup from "yup";
import DeleteIcon from '@mui/icons-material/Delete';

const validationSchema = Yup.object().shape({
    height: Yup.number()
        .required('La altura es requerida')
        .min(0, 'La altura debe ser mayor o igual que cero'),
    width: Yup.number()
        .required('El ancho es requerido')
        .min(0, 'El ancho debe ser mayor o igual que cero'),
    thick: Yup.number()
        .required('El grosor es requerido')
        .min(0, 'El grosor debe ser mayor o igual que cero'),
    weight: Yup.number()
        .required('El peso es requerido')
        .min(0, 'El peso debe ser mayor o igual que cero'),
});



const drawerWidth = 500;

const useStyles = makeStyles((theme: any) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#FAF9F9',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}));

interface FormValues {

}


interface Props {
    children?: React.ReactNode;
    isOpen: boolean;
    toggleDrawer: any
    title?: string;
}

interface Box {
    height: number;
    width: number;
    thick: number;
    weight: number;
}
export const DrawerCustom: React.FC<Props> = ({ isOpen, toggleDrawer, title = "", children }) => {
    const classes = useStyles();
    const [boxes, setboxes] = useState<Box[]>([])

    const handleSubmit = async (values: any, error: any, setValues: any) => {

        const newBox = { ...values }
        let newBoxes = [...boxes, newBox]
        if (Object.keys(error).length === 0) {
            setboxes(newBoxes);
            setValues({
                height: 0,
                width: 0,
                thick: 0,
                weight: 0,
            })
        }

    };
    return (
        <>
            <Formik
                initialValues={{
                    height: 0,
                    width: 0,
                    thick: 0,
                    weight: 0,
                }}
                validationSchema={validationSchema}
                onSubmit={() => { }}
            >
                {({ isSubmitting, errors, touched, handleChange, values, setValues }) => (
                    <Form>

                        <Drawer
                            className={classes.drawer}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            anchor="right"
                            open={isOpen}
                            onClose={toggleDrawer}
                        >

                            <div className='m-2'>
                                <IconButton onClick={toggleDrawer}>
                                    <ArrowBackIosIcon />
                                </IconButton>
                            </div>
                            <div className='mt-2 ms-2'>
                                <Typography variant='h5' className='ms-2' sx={{ fontWeight: "bolder" }}>{title}</Typography>
                                <hr />
                                <Box className="row m-3" display={'flex'} alignItems={'center'}>
                                    {children}
                                </Box>
                            </div>

                        </Drawer>
                    </Form>
                )}
            </Formik>

        </>

    )
}
