import React from 'react';
import HomePage from '../components/homePage'
import BookingList from "../components/page/page-ListBooking";
import Job from "../components/page/jobSearch";

const routes = [
    {
        path: '/',
        exact: true,
        name: 'Trang chủ',
        main: () => <HomePage />,
    }, {
        path: '/trang-chu',
        exact: false,
        name: 'Trang chủ',
        main: () => <HomePage />,
    }, {
        path: '/a',
        exact: true,
        name: 'Giới thiệu',
        main: () => <HomePage />,
    },
    {
        path: '/job',
        exact: false,
        name: 'Hướng dẫn',
        main: () => <Job/>,
    },{
        path: '/tim-viec',
        exact: false,
        name: 'Tìm việc',
        main: () => <Job />,
    },
    {
        path: '/tim-nguoi',
        exact: false,
        name: 'Tìm người',
        main: () => <BookingList />,
    },

];
export default routes;
