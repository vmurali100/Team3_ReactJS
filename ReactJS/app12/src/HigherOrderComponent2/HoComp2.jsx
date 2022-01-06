import React, { Component } from 'react'

export const HoComp2 = (OriginalComponent) => {

   class NewCompo extends Component {
        constructor(props) {
            super(props)

            this.state = {
                imgurl: "https://image.shutterstock.com/image-photo/3d-wallpaper-design-waterfall-sea-260nw-1380925703.jpg"
            }
        }
        HandleHover = () => {
            this.setState({ imgurl:"https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" })
        }
        HandleImage=()=>{
            this.setState({imgurl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg"})
        }
        render() {
            return (
                <div>
                    <OriginalComponent imgurl={this.state.imgurl} HandleImage={this.HandleImage}
                    HandleHover={this.HandleHover}/>
                </div>
            )
        }
    }

    return (
        NewCompo
    )
}
