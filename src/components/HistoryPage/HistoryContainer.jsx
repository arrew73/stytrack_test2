import React from "react";
import {HistoryPage} from "./History";
import {connect} from "react-redux";

class HistoryContainer extends React.Component {
    render() {
       return <HistoryPage story={this.props.story}/>
    }
}



const mapStateToProps = (state) => {
   return{
       story: state.historyPage.history
   }
}

export default connect(mapStateToProps)(HistoryContainer)