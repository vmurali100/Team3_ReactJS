import React, {PureComponent } from 'react'
import { HoComp2 } from './HoComp2'

 class ImgCompo extends PureComponent {
    render() {
        return (
            <div>
                <img src={this.props.imgurl} style={{width:"25%",height:"25%"}}/>
            <br />
                <button onClick={this.props.HandleImage}>click image</button>
            </div>
        )
    }
}
export default HoComp2(ImgCompo)
