import React from 'react';
import { connect } from 'react-redux';
import { FontIcon, TextField } from 'react-md';
import { VIEW_TYPE_CHANGE } from '../../actions/types';

const CategoriesPanel = (props) => {
    const normalClass = 'products__view-type-button'
    const classSelected = `${normalClass} products__view-type-button--selected`;

    const classList = props.viewType === 'list'
        ? classSelected
        : normalClass;

    const classBlock = props.viewType === 'block'
        ? classSelected
        : normalClass;

    return(
        <header className='products__top-panel'>
            <div>
                <div>
                    <FontIcon
                        className={classList}
                        onClick={() => props.onViewTypeSelected('list')}
                    >
                        view_list
                    </FontIcon>
                    <FontIcon
                        className={classBlock}
                        onClick={() => props.onViewTypeSelected('block')}
                    >
                        view_module
                    </FontIcon>
                </div>
                {
                    props.hiddenProducts
                        ? <div>Showing <b>{props.showedProducts}</b> products - Hidden: <b>{props.hiddenProducts}</b></div>
                        : <div>Showing <b>{props.showedProducts}</b> products</div>
                }
            </div>
            <TextField id="placeholder-only-title" placeholder="Search" className="md-cell md-cell--bottom" />
        </header>
    );
}

const mapStateToProps = (state) => {
    return {
        showedProducts: state.showedProducts,
        hiddenProducts: state.hiddenProducts,
        viewType: state.viewType,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onViewTypeSelected: (viewType) => {
            dispatch({ type: VIEW_TYPE_CHANGE, newViewType: viewType });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPanel);