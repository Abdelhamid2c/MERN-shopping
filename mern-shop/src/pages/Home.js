import React from 'react'
import { Products } from '../products/products.js'
import { Stack, Grid } from '@mui/material'
import Product from '../components/Product.js'

export default function Home() {

    return (
        <div>
            <h2> Products </h2>
            <Grid container spacing={2} pl={3}>
                {Products.map(product => {
                    return (
                        <Grid item sm={12} md={6} lg={4} xl={3}>
                            {product.name}
                        </Grid>
                        // <Product produit={product} />


                    )
                })}
            </Grid>
        </div>
    )
}
