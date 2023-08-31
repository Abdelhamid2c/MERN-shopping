import React from 'react'
import CardMedia from '@mui/material/CardMedia'
import { Card, CardContent, Typography } from '@mui/material'
import v from "./tree.jpg"
import v2 from "../products/voitures/amarok.jpg"

export default function Cons() {
    console.log(v)
    console.log(v2)
    return (
        <div>
            <Card >
                <CardMedia component="img" image={v} height='130' alt='voitures' variant='top' />
                <CardContent>
                    <Typography>
                        Content
                    </Typography>

                </CardContent>

            </Card>
        </div>
    )
}
