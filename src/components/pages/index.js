import Home from './Home';
import Search from './Search';

export default [
  {
    key: 'Home',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    key: 'Search',
    path: '/search/:city',
    exact: true,
    component: Search,
  }
];
