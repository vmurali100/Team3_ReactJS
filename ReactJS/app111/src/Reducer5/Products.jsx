import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPrdtAction, deletePrdtAction, getPrdtAction, ProductDltAction } from './action'

class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: {
                Id: "",
                Name: "",
                Type: ""
            }
        }
    }

    getData = () => {
        this.props.getPrdtData()
    }
    handleDelete = () => {
        this.props.deletePrdt()
    }
    handleChange = (e) => {
        let newproduct = { ...this.state.products }
        newproduct[e.target.name] = e.target.value
        this.setState({ products: newproduct })
    }
    handleCreate = () => {
        console.log(this.props)
        this.props.createData(this.state.products)
    }
    PrdtDelete =(product)=>{
        this.props.DeletePrdt(product)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h2>click to get the products</h2>
                <form >
                    <label htmlFor="Id">ProductId:</label><br />
                    <input type="text" name="Id" value={this.state.Id} onChange={(e) => { this.handleChange(e) }} /><br />
                    <label htmlFor="Name">ProductName:</label><br />
                    <input type="text" name="Name" value={this.state.Name} onChange={(e) => { this.handleChange(e) }} /><br />
                    <label htmlFor="Type">ProductId:</label><br />
                    <input type="text" name="Type" value={this.state.Type} onChange={(e) => { this.handleChange(e) }} /><br />
                    <button onClick={this.handleCreate} type='button'>Add</button>
                </form>
                {/* <button onClick={this.getData}>Products</button>
                <button onClick={this.handleDelete}>Delete</button> */}
                {this.props.products && this.props.products.map((prdt) => {
                    return <ul>
                        <li>productId:{prdt.Id}</li><br />
                        <li>productName:{prdt.Name}</li><br />
                        <li>productType:{prdt.Type} --- <button onClick={()=>this.PrdtDelete(prdt)}>delete</button></li>
                    </ul>
                })}
            </div>
        )
    }
}
function stateToProps(state) {
    return {
        products: state
    }
}
function mapstateToProps(dispatch) {
    return {
        getPrdtData: () => dispatch(getPrdtAction()),
        deletePrdt: () => dispatch(deletePrdtAction()),
        createData: (product) => dispatch(createPrdtAction(product)),
        DeletePrdt:(product)=>dispatch(ProductDltAction(product))
    }
}
export default connect(stateToProps, mapstateToProps)(Products)