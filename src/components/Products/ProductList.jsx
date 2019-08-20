import React from 'react';
import { connect } from 'react-redux';
import { Card, CardText, CardTitle } from 'react-md';

const ProductsList = (props) => {
    console.log(props.loading);
    if (props.loading) {
        return(
            <section className='products__product-list'>
                <div className='products__loading-wrapper'>
                    <div className="lds-dual-ring"></div>
                </div>
            </section>
        );
    }
    return (
        <section className='products__product-list'>
            {
                props.products && props.products.map((product) => {
                    return (
                        <Card key={product.id} className="md-cell md-cell--12 md-text-container">
                            <CardTitle
                                title={product.name}
                                subtitle={`${product.categories.toString()} - ${product.brand}`}
                            />
                            <CardText className='products__card-content'>
                                <aside className='products__card-content-image-container'>
                                    <img
                                        className='products__card-content-image'
                                        src={product.photo}
                                        alt={`${product.name}`}
                                    />
                                </aside>
                                <section className='products__card-content-info'>
                                </section >
                            <p>
                                {product.description}
                                <br />
                                <br />
                                <b>Stock:</b> {product.stock}
                                <br />
                                <b>Price:</b> {product.price}
                            </p>
                            </CardText>
                        </Card>
                    )
                })
            }
        </section>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        viewType: state.viewType,
        selectedCategory: state.selectedCategory,
        products: state.products,
        loading: state.loading,
    }
}

export default connect(mapStateToProps)(ProductsList);
