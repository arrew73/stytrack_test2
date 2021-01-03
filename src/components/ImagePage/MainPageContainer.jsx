import {connect} from "react-redux";
import React from "react";
import {getImageURL} from "../../Redux/Reducers/main-page-reducer";
import {MainPage} from "./MainPage";

class MainPageContainer extends React.Component {
    componentDidMount(){
        this.props.getImageURL()
    }
    render(){
        return <MainPage isDisabled={this.props.toggleButton} imageURL={this.props.imageURL} getImageURL={this.props.getImageURL}/>
    }
}

const mapStateToProps = (state) => {
    return {
        imageURL: state.mainPage.imageURL,
        toggleButton: state.mainPage.isDisabled
    }
}

export default connect(mapStateToProps, {getImageURL})(MainPageContainer);