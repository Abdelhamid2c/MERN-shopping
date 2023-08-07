import React from 'react'
import {
    Box,
    Card,
    CardContent,
    CardMedia, Typography, CardActionArea, Rating
} from '@mui/material'

export default function Product({ SingleProduct }) {

    const styles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }


    return (

        <Box width='300px'>
            <Card>
                <CardActionArea to={`/product/${SingleProduct._id}`}>
                    <CardMedia component="img" image={SingleProduct.picture} height='130' alt='voitures' variant='top' />
                    <CardContent>
                        <Typography style={styles} color="ActiveCaption" >
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
                </CardActionArea>
            </Card>
        </Box>

    )
}
