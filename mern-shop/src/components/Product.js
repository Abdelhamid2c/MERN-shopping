import React from 'react'
import {
    Box,
    Card,
    CardContent,
    CardMedia, Typography, Rating
} from '@mui/material'
import { useNavigate } from 'react-router-dom'


export default function Product({ SingleProduct }) {

    const styles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const navigate = useNavigate();



    return (

        <Box width='300px'>
            <Card onClick={
                () => {
                    navigate(`/product/${SingleProduct._id}`)
                }
            }
                sx={{
                    cursor: "pointer"
                }}>
                <CardMedia component="img" src={SingleProduct.picture} height='90' width='90' alt={SingleProduct.name} variant='top' />
                <CardContent>
                    <Typography style={styles} color="ActiveCaption"  >
                        {SingleProduct.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={styles} sx={{
                        my: 3
                    }}>
                        <Rating value={SingleProduct.rating} precision={0.5} readOnly />  {SingleProduct.reviews}
                    </Typography>
                    <Typography variant="body1" style={styles}>
                        {SingleProduct.price} Dh
                    </Typography>
                </CardContent>

            </Card>
        </Box>

    )
}
