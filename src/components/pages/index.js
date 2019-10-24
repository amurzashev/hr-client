import Home from './Home';
import Search from './Search';
import City from './City';
import NotFound from './NotFound';

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
  },
  {
    key: 'City',
    path: '/city/:coordinates',
    exact: true,
    component: City,
  },
  {
    key: 'NotFound',
    component: NotFound,
  },
];
