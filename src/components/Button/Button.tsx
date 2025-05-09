import React from 'react';
import {Button as MuiButton, type ButtonProps} from "@mui/material";

export const Button: React.FC<ButtonProps> = ({children, ...props}) => (
    <MuiButton
        variant="contained"
        sx={{
            padding: '0 30px',
            height: '30px',
            background: 'black'
        }}
        {...props}
    >
        {children}
    </MuiButton>
);