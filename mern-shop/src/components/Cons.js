import React from 'react'
import CardMedia from '@mui/material/CardMedia'
import { Card, CardContent, Typography } from '@mui/material'
import v from "./tree.jpg"

export default function Cons() {

    return (
        <div>
            <Card >
                <CardMedia component="img" image="images/voitures/arteon.png" height='130' alt='voitures' variant='top' />
                <CardContent>
                    <Typography>
                        Content
                    </Typography>

                </CardContent>

            </Card>
        </div>
    )
}
