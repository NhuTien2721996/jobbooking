import * as constants from './constants';

export const getNewDetail = data => {
    return {
        type: constants.GET_ALL_NEWS_DETAIL,
        data
    }
}
