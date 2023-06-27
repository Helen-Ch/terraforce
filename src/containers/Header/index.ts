import {connect} from "react-redux";
import Header from "../../components/Header";
import {RootState} from "../../store";

const mapStateToProps = (state: RootState) => ({
    count: state.posts.filter(post => !post.deleted_at).length,
});

export default connect(mapStateToProps)(Header);