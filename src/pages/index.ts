import Routing from './MainPage.vue';

export const routes = [
    {path: '/', component: () => import('./HomePage')},
    {path: '/calc', component: () => import('./CalcPage')},
];

export {Routing}