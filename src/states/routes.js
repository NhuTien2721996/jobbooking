import React from 'react';
import HomePage from '../components/homePage'
import BookingList from "../components/page/page-ListBooking";

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
        main: () => <HomePage/>,
    },{
        path: '/tim-viec',
        exact: false,
        name: 'Tìm việc',
        main: () => <BookingList />,
    },
    {
        path: '/tim-nguoi',
        exact: false,
        name: 'Tìm người',
        main: () => <BookingList />,
    },

];
export default routes;
