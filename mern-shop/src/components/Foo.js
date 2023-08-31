import React from 'react'
import Typography from '@mui/material/Typography'

export default function Foo() {
    return (
        <Typography variant="body2" color="text.secondary" align='center' sx={{
            mb: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

        }}>
            Copyright &copy; 2023
            <br />
            LksKarf
        </Typography>
    )
}
