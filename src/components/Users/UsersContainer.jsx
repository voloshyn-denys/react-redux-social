import { connect } from "react-redux";
import { followUserCreator } from "../../redux/usersReducer";
import Users from "./Users";

const mapStateToProps = (state) => {
    return ({
        users: state.usersPage.users
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        toggleFollowStatus: (userId) => {
            dispatch(followUserCreator(userId));
        }
    })
    
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;