import React, {useEffect} from "react";
import {withRouter} from "react-router-dom";

const ScrollTop = ({history}) => {
    useEffect(() => {
        const unListen = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unListen();
        }
    }, [history]);
    return <React.Fragment/>

}
export default withRouter(ScrollTop)


