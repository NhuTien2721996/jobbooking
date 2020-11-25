// export const API_URL = "https://localhost:44302/api/";
// export const HOST_URL = "https://localhost:44302/";
export const URL = "https://api-admin.bytesoft.vn";
// export const URL = "http://113.190.253.172:5899";
// export const URL = "http://113.190.253.172:5899";
// export const URL = "http://103.35.65.173:5898";

export const CURRENT_USER = "CURRENT_USER";

export const VIEW_ACTION = "View";
export const CREATE_ACTION = "Create";
export const UPDATE_ACTION = "Update";
export const DELETE_ACTION = "Delete";
export const EXPORT_ACTION = "Export";
export const IMPORT_ACTION = "Import";
export const MASSUPDATE_ACTION = "Massupdate";
export const TOKEN_USER = "TOKEN_USER";
export const API_URL="https://api.jobbooking.com/api";

export const SHOW_FILE_INLINE = "inline";
export const SHOW_FILE_POPUP = "popup";

export const FILE_TYPE_IMAGE = "image";
export const FILE_TYPE_DOCUMENT = "document";

export const PAGE_SIZE = 10;
export const OPTION_PAGE_SIZE = [
    { value: 5, label: "5" },
    { value: 10, label: '10' },
    { value: 50, label: '50' },
    { value: 100, label: '100' },
    { value: 300, label: '300' },
    { value: 900, label: '900' },
]

export const transformDate = (data, type) => {
    let dateArr = [];
    let time = [];
    let newDay = [];
    for (let i = 0; i <= data.length - 1; i++) {
        if (data[i].type === type) {
            dateArr.push(data[i].createddate);
        }
    }
    for (let i = 0; i <= dateArr.length - 1; i++) {
        time.push(new Date(dateArr[i]))
        newDay.push(time[i].getFullYear() + "/" + (time[i].getMonth() + 1) + "/" + time[i].getDate());
    }
    return newDay;

}
export const getDate=(data)=>{
    let dateArr = [];
    let time = [];
    let newDay = [];
    for (let i = 0; i <= data.length - 1; i++) {
        dateArr.push(data[i].createddate);
    }
    for (let i = 0; i <= dateArr.length - 1; i++) {
        time.push(new Date(dateArr[i]))
        newDay.push(time[i].getFullYear() + "/" +((time[i].getMonth() + 1)>10? (time[i].getMonth() + 1): "0"+(time[i].getMonth() + 1)) + "/" + (time[i].getDate()>10? time[i].getDate():"0"+time[i].getDate()));
    }
    return newDay;
}
export const getDateModal=(data)=>{
    let dateArr = [];
    let time = [];
    let newDay = [];
    for (let i = 0; i <= data.length - 1; i++) {
        dateArr.push(data[i].customercreatedate);
    }
    for (let i = 0; i <= dateArr.length - 1; i++) {
        time.push(new Date(dateArr[i]))
        newDay.push(time[i].getFullYear() + "/" +((time[i].getMonth() + 1)>10? (time[i].getMonth() + 1): "0"+(time[i].getMonth() + 1)) + "/" + (time[i].getDate()>10? time[i].getDate():"0"+time[i].getDate()));
    }
    return newDay;
}
export const getDateJob=(data)=>{
    let dateArr = [];
    let time = [];
    let newDay = [];
    for (let i = 0; i <= data.length - 1; i++) {
        dateArr.push(data[i].field_datecreate);
    }
    for (let i = 0; i <= dateArr.length - 1; i++) {
        time.push(new Date(dateArr[i]))
        newDay.push(time[i].getFullYear() + "/" + (time[i].getMonth() + 1) + "/" + time[i].getDate());
    }
    return newDay;
}
export const transformDateFooter = (data, value) => {
    let dateArr = [];
    let time = [];
    let newDay = [];
    for (let i = 0; i <= data.length - 1; i++) {
        if (data[i].isfooter === value) {
            dateArr.push(data[i].createddate);
        }
    }
    for (let i = 0; i <= dateArr.length - 1; i++) {
        time.push(new Date(dateArr[i]))
        newDay.push(time[i].getFullYear() + "/" + (time[i].getMonth() + 1) + "/" + time[i].getDate());
    }
    return newDay;

}
export const filterData = (data, type) => {
    let newData = [];
    for (let i = 0; i <= data.length - 1; i++) {
        if (data[i].type === type) {
            newData.push(data[i])
        }
    }
    return newData;
}

