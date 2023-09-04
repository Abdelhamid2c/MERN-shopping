import { React, useState, useEffect } from 'react'
// import { Products } from '../products.js'
import { Grid, Container, Typography } from '@mui/material'
import Product from '../components/Product.js'
import axios from "axios"


export default function Home() {

    const styles = {
        padding: 5
    }

    const [Products, setproducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('http://localhost:2000/products')
            console.log(data)
            setproducts(data)
        }
        fetchProducts()
    }, [])


    return (
        <div>
            <Typography variant="h4" color="text.secondary" style={styles}> Cars </Typography>
            <Container maxWidth="lg">
                <Grid container spacing={2} pl={3}>
                    {Products.map(product => {
                        return (
                            <Grid key={product._id} item sm={12} md={6} lg={4} xl={3}>
                                <Product SingleProduct={product} />
                            </Grid>


                        )
                    })}
                </Grid>
            </Container>

        </div>
    )
}
