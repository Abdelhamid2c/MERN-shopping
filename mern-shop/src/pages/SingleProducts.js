import React from 'react'
import { Products } from '../products/products.js'
import { useParams, useNavigate, Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { Typography, Rating, List, ListItem, Button } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material';

export default function SingleProducts() {

    const navigate = useNavigate();
    const { id } = useParams();
    const carExiste = Products.find(car => car._id === id)
    return (
        <>
            <Link onClick={
                () => {
                    navigate(-1)
                }
            }>
                Go Back
            </Link>
            <Grid container spacing={2} sx={{ my: 3 }}>
                <Grid xs={8} md={6}>

                    <img
                        src={carExiste.picture}
                        height='200'
                        alt={carExiste.name}
                    />

                </Grid>
                <Grid xs={6} md={4}>
                    <List>
                        <ListItem>
                            <h2>
                                {carExiste.name}
                            </h2>
                        </ListItem>
                        <ListItem>
                            <Rating value={carExiste.rating} precision={0.5} readOnly />
                        </ListItem>
                        <ListItem>
                            <Typography color="text.secondary">
                                Price : {carExiste.price} DH
                            </Typography>

                        </ListItem>
                        <ListItem >
                            <Typography variant="body2" >
                                {carExiste.description}
                            </Typography>
                        </ListItem>
                        <ListItem >
                            Status : {carExiste.stocks > 0 ? 'Valable' : 'Out of stock '}
                        </ListItem>
                        <ListItem >
                            <Button
                                disabled={carExiste.stocks === 0}
                                variant="contained" size="small"
                                startIcon={<AddShoppingCartIcon />}>
                                Add to Cart
                            </Button >
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </>
    )
}

