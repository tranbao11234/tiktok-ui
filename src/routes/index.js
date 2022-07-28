import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import { HeaderOnly } from '~/components/Layouts';
import Search from '~/pages/Search';

export const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];

export const privateRoutes = [{}];
