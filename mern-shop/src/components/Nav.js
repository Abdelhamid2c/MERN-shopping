import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { Stack, Button } from '@mui/material'

export default function Nav() {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <IconButton size='large' edge='start' aria-label="logo" >

                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    LKsKarf
                </Typography>
                <Stack direction='row' spacing={3}>
                    <Button color="inherit">
                        Cart
                    </Button>
                    <Button color="inherit">
                        Login
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>


    )
}
