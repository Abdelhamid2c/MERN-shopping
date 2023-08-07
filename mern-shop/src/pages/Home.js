import React from 'react'
import { Products } from '../products/products.js'
import { Stack, Grid, Container, Typography } from '@mui/material'
import Product from '../components/Product.js'

export default function Home() {

    const styles = {
        padding: 5
    }

    return (
        <div>
            <Typography variant="h4" color="text.secondary" style={styles}> Cars </Typography>
            <Container maxWidth="lg">
                <Grid container spacing={2} pl={3}>
                    {Products.map(product => {
                        return (
                            <Grid item sm={12} md={6} lg={4} xl={3}>
                                <Product SingleProduct={product} />
                            </Grid>


                        )
                    })}
                </Grid>
            </Container>

        </div>
    )
}
