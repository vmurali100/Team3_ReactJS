import React ,{Component}from 'react'

export const CompContainer = (OriginalComponent) => {
   class NewCompon extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
             increasecount:function(){
                this.setState({count:this.state.count+1})
            }
        }
        this.startCount=()=>{
            this.increseCount = setInterval(()=>{
               this.setState({count:this.state.count+1})
           }, 1000);
           }
          this.stopCount=()=>{
            clearInterval(this.increseCount)
         }
    }
   
    
        render() {
            return (
                <div>
                    <OriginalComponent count={this.state.count} startCount={this.startCount} stopCount={this.stopCount}/>
                    
                </div>
            )
        }
    }
    
    return (
        NewCompon
    )
}
