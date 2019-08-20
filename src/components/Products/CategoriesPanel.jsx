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
                                        onClick={() => props.onCategorySelected(category.text)}
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
                                    onClick={() => props.onCategorySelected(category.text)}
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCategorySelected: (category) => {
            dispatch({ type: CATEGORY_CHANGE, newCategory: category });
            dispatch(fetchAllProducts(category));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPanel);