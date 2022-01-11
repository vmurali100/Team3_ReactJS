
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProductAction, deleteProductAction, updateProductAction } from './action/action'
class Products_redux extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: {
                name: ""
            },
            products: [{ name: "Books" }, { name: "pens" }, { name: "mobiles" }],
            index: null
        }
    }
    // handleAdd=()=>{
    // let allProduct=[...this.state.products]  
    // allProduct.push(this.state.product)
    // this.setState({products:allProduct})
    // this.handleClear()
    // }
    handleChange = (e) => {
        let newProduct = { ...this.state.product }
        newProduct[e.target.name] = e.target.value
        this.setState({ product: newProduct })
    }
    handleClear = () => {
        this.setState({
            product: {
                name: ""
            }
        })
    }
    handleEdit = (product, i) => {
        this.setState({ product, index: i })
    }
    handleUpdate = () => {
        // let allProduct = [...this.state.products]
        // allProduct[this.state.index] = this.state.product
        // this.setState({ products: allProduct, index: null })
        let updateProduct={...this.state.product}
        updateProduct['id']=this.state.index
        this.props.updateProductFunc(updateProduct)
        this.handleClear()
    }
    // handleDelete=(product)=>{
    //     let allProduct=[...this.state.products]  
    //     this.setState({products:allProduct.filter((prdt)=>prdt.name !== product.name)})
    //     this.handleClear()
    // }
    render() {
        const { addProductFunc, deleteProductFunc, updateProductFunc } = this.props
        return (
            <div>
                <form >
                    <label htmlFor="name">Product Name:</label>
                    <input type="text" name="name" value={this.state.product.name} onChange={(e) => this.handleChange(e)} />
                    {this.state.index ? (<button type='button' onClick={this.handleUpdate}>Update</button>) :
                        (<button onClick={() => addProductFunc(this.state.product)} type='button'>Add</button>)}

                </form>
                {this.props.products && this.props.products.map((prdt, i) =>
                    <p > <span onClick={() => this.handleEdit(prdt, i)}>{prdt.name} </span>
                        -<span onClick={() => deleteProductFunc(prdt)}>X</span> </p>)}
            </div>
        )
    } 
}
function mapStateToProps(state) {
    console.log(state)
    return {
        products: state
    }
}
function stateToProps(dispatch) {
    return {
        addProductFunc: (product) => dispatch(addProductAction(product)),
        deleteProductFunc: (product) => dispatch(deleteProductAction(product)),
        updateProductFunc: (product) => dispatch(updateProductAction(product))
    }

}
export default connect(mapStateToProps, stateToProps)(Products_redux)