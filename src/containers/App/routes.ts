import React from 'react';
import { HomePage } from '../HomePage/index';
import { Login } from '../Login/index';

export interface RoutesType {
    readonly path: string;
    readonly component: React.FC
}

export default [
    { path: '/', component: HomePage },
    { path: '/login', component: Login },
    /*{ path: '/movies', component: MoviesPage },
    { path: '/movie/:movieId', component: MovieDetail }*/
];
