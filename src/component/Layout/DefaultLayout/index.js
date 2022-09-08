import Header from '../component/Header';
import Sidebar from '../component/Sidebar';
import classNames from 'classnames/bind';
import style from './DefaultLayout.module.scss';
let cx = classNames.bind(style);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <Sidebar></Sidebar>
                <div className="content">{children}</div>
            </div>
        </div>
    );
}
export default DefaultLayout;
