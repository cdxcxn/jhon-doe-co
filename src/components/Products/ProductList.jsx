import React from 'react';
import { connect } from 'react-redux';
import { Card, CardText, CardTitle } from 'react-md';
import TopPanel from './TopPanel';

const ProductsList = (props) => {
    const cardViewType = props.viewType === 'list'
        ? 'md-cell md-cell--12'
        : 'md-cell md-cell--12 products__product-card';

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
        <section>
            <header>
                <TopPanel />
            </header>
            <section className='products__product-list'>
                {
                    props.products && props.products.map((product) => {
                        return (
                            <Card key={product.id} className={cardViewType}>
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
                                        <p>
                                            {product.description}
                                            <br />
                                            <br />
                                            <b>Stock:</b> {product.stock}
                                            <br />
                                            <b>Price:</b> ${product.price}
                                        </p>
                                    </section >
                                </CardText>
                            </Card>
                        )
                    })
                }
            </section>
        </section>
    );
}

const mapStateToProps = (state) => {
    return {
        viewType: state.viewType,
        selectedCategory: state.selectedCategory,
        products: state.products,
        loading: state.loading,
    }
}

export default connect(mapStateToProps)(ProductsList);
