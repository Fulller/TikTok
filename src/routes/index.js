import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/Upload';
import Search from '../pages/Search';
import { DefaultLayout , HeaderOnly } from '../component/Layout'

const publicRoutes = [
    { path: '/', element: Home },
    { path: '/home', element: Home },
    { path: '/following', element: Following},
    { path: '/upload', element: Upload, layout: HeaderOnly},
    { path: '/search', element: Search, layout: null},
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
