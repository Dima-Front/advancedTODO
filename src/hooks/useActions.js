import * as PostActionCreators from "../api/apiRequests"
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators({...PostActionCreators}, dispatch)
}