import React from 'react';
import { connect } from 'react-redux';
import {
    Avatar,
    Divider,
    FontIcon,
    List,
    ListItem,
    Subheader
} from 'react-md';
import { CATEGORY_CHANGE } from '../../actions/types';
import { fetchAllProducts } from '../../actions/index';

const CategoriesPanel = (props) => {
    if(props.router.match.category) {
        props.onCategorySelected(props.router.match.category);
    }
    return(
        <aside className='products__side-panel'>
            <List>
                <Subheader primaryText='Categories' />
                {
                    props.categories.map((category) => {
                        if (category.text === 'All') {
                            return (
                                <div key='div-wrapper'>
                                    <ListItem
                                        key={category.text}
                                        active={category.selected}
                                        activeBoxClassName='md-list-item--selected'
                                        leftAvatar={<Avatar icon={<FontIcon>{category.icon}</FontIcon>} />}
                                        primaryText={category.text}
                                        onClick={() => props.onCategorySelected(category.text, props.router)}
                                    />
                                    <Divider />
                                </div>
                            );
                        } else {
                            return(
                                <ListItem
                                    key={category.text}
                                    active={category.selected}
                                    activeBoxClassName='md-list-item--selected'
                                    leftAvatar={<Avatar icon={<FontIcon>{category.icon}</FontIcon>} />}
                                    primaryText={category.text}
                                    onClick={() => props.onCategorySelected(category.text, props.router)}
                                />
                            );
                        }
                    })
                }
            </List>
        </aside>
    );
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        selectedCategory: state.selectedCategory,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCategorySelected: (category, router) => {
            router.history.push(category === 'All' ? '/products' : `/products/${category}`);
            dispatch({ type: CATEGORY_CHANGE, newCategory: category });
            dispatch(fetchAllProducts(category));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPanel);