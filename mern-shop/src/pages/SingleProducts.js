import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { Typography, Rating, List, ListItem, Button } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import axios from 'axios';

export default function SingleProducts() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [product, setproduct] = useState({})

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`http://localhost:2000/products/${id}`)
            console.log(data)
            setproduct(data)
        }
        fetchProduct()
    }, [])


    const lien = `../${product.picture}`
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
                        src={lien}
                        height='200'
                        alt={product.name}
                    />

                </Grid>
                <Grid xs={6} md={4}>
                    <List>
                        <ListItem>
                            <h2>
                                {product.name}
                            </h2>
                        </ListItem>
                        <ListItem>
                            <Rating value={product.rating} precision={0.5} readOnly />
                        </ListItem>
                        <ListItem>
                            <Typography color="text.secondary">
                                Price : {product.price} DH
                            </Typography>

                        </ListItem>
                        <ListItem >
                            <Typography variant="body2" >
                                {product.description}
                            </Typography>
                        </ListItem>
                        <ListItem >
                            Status : {product.stocks > 0 ? 'Valable' : 'Out of stock '}
                        </ListItem>
                        <ListItem >
                            <Button
                                disabled={product.stocks === 0}
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

