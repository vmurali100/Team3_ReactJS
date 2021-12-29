import React,{Component} from 'react'

export const Parent = (OriginalComponent) => {

    class Container extends Component {
        constructor(props) {
            super(props)
    
            this.state = {
                url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            }
        }
        handleImage = () => {
            this.setState({ url:"ImageDeleted" })
        }
        handleHover=()=>{
            this.setState({url:"https://wallpaperaccess.com/full/267434.jpg"})
        }
        render() {
            return (
                <div >
                <OriginalComponent url={this.state.url} handleImage={this.handleImage} handleHover={this.handleHover}/>
                </div>
            )
        }
    }

    return (
        Container
    )
}
