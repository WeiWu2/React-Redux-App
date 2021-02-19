import React from 'react';
import {connect} from 'react-redux'
import {getCat} from '../actions'
class CatPicture extends React.Component{
    handleClick = (e) => {
        console.log('test')
        console.log(this.props)
        this.props.getCat();
    }
render(){
return(
    
    <div> 
      {this.props.loading ? (
          <div>Your cat is loading...</div>
      ) : (
        <div>
        <img src={this.props.imgSrc}></img>
        </div>
      )}
        <button onClick={this.handleClick}>Click Here for your daily cat picture!</button>
    </div>
)
}

}
const mapStateToProps = (state) => {
    return ({
        imgSrc: state.imgSrc,
        loading:state.loading
      })

}
export default connect(mapStateToProps, {getCat})(CatPicture)

