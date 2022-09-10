import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/Upload';
import Feedback from '../pages/Feedback';
import { DefaultLayout, HeaderOnly } from '../component/Layout';

const publicRoutes = [
    { path: '/', element: Home },
    { path: '/home', element: Home },
    { path: '/following', element: Following },
    { path: '/upload', element: Upload, layout: HeaderOnly },
    { path: '/feedback', element: Feedback, layout: HeaderOnly },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
