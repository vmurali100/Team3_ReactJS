
import React, { Component } from 'react'

export default class Products extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             product:{
                 name:""
             },
             products:[],
             index:null
        }
    }
    handleAdd=()=>{
    let allProduct=[...this.state.products]  
    allProduct.push(this.state.product)
    this.setState({products:allProduct})
    this.handleClear()
    }
    handleChange=(e)=>{
        let newProduct={...this.state.product}
        newProduct[e.target.name]=e.target.value
        this.setState({product:newProduct})
    }
    handleClear=()=>{
        this.setState({product:{
            name:""
        }})
    }
    handleEdit=(product,i)=>{
      this.setState({product,index:i})
    }
    handleUpdate=()=>{
        let allProduct=[...this.state.products]  
        allProduct[this.state.index]=this.state.product
        this.setState({products:allProduct,index:null})
        this.handleClear()
    }
    handleDelete=(product)=>{
        let allProduct=[...this.state.products]  
        this.setState({products:allProduct.filter((prdt)=>prdt.name !== product.name)})
        this.handleClear()
    }
    render() {
        return (
            <div>
                <form >
                    <label htmlFor="name">Product Name:</label>
                    <input type="text" name="name"  value={this.state.product.name} onChange={(e)=>this.handleChange(e)}/>
                   {this.state.index ? (<button type='button' onClick={this.handleUpdate}>Update</button>) :
                   ( <button onClick={this.handleAdd} type='button'>Add</button>) }
                    
                </form>
                {this.state.products.map((prdt,i)=>
                 <p > <span onClick={()=>this.handleEdit(prdt,i)}>{prdt.name} </span>
                 -<span onClick={()=>this.handleDelete(prdt)}>X</span> </p> )}
            </div>
        )
    }
}
