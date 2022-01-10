import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cartDeleteAction, createCartAction, deleteCartAction, getCartAction } from './action'

 class Cart extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              carts:{
                  id:"",
                  name:"",
                  shopping:""
              }
         }
     }
     
    showCarts=()=>{
        this.props.handleGet()
    }
    deleteCart=()=>{
        this.props.handleDelete()
    }
    handleChange=(e)=>{
     let newcart={...this.state.carts}
     newcart[e.target.name]=e.target.value
     this.setState({carts:newcart})
    }
    handleCreate=()=>{
        this.props.createCart(this.state.carts)
    }
   cartDelete=(cart)=>{
       this.props.cartDeleteData(cart)
   }
    render() {
        console.log(this.props)
        return (
            <div>
                <h2>Hello from Carts</h2>
                <form >
                    <label htmlFor="id">Id:</label>
                    <input type="text" name="id" value={this.state.id} onChange={(e)=>{this.handleChange(e)}} /><br />
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={(e)=>{this.handleChange(e)}}/><br />
                    <label htmlFor="shopping">Shopping:</label>
                    <input type="text" name="shopping" value={this.state.shopping} onChange={(e)=>{this.handleChange(e)}}/><br />
                     <button onClick={this.handleCreate} type='button'>Add Carts</button>
                </form>
                {/* <button onClick={this.showCarts}>Carts</button>
                <button onClick={this.deleteCart}>DeleteCart</button> */}
                {this.props.carts && this.props.carts.map((a)=>{
                    return <ul>
                      <li>Id:{a.id}</li><br />
                      <li>Name:{a.name}</li><br />
                      <li>Shopping:{a.shopping}</li><br />
                      <button onClick={()=>{this.cartDelete(a)}}>Delete</button>
                    </ul>
                })}
            </div>
        )
    }
}
function stateToProps(state) {
    return{
        carts:state
    }
}
function mapStateToProps(dispatch) {
    return{
        handleGet:()=>dispatch(getCartAction()),
        handleDelete:()=>dispatch(cartDeleteAction()),
        createCart:(cart)=>dispatch(createCartAction(cart)),
        cartDeleteData:(cart)=>dispatch(deleteCartAction(cart))
    }
}
export default connect(stateToProps,mapStateToProps)(Cart)
