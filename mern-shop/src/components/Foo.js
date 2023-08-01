import React from 'react'
import Typography from '@mui/material/Typography'

export default function Foo() {
    return (
        <Typography variant="body2" color="text.secondary" align='center' sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
        }}>
            Copyright@2023
            <br />
            LksKarf
        </Typography>
    )
}
