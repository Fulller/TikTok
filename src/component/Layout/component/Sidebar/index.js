import style from './Sidebar.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(style);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>side bar</h2>
        </aside>
    );
}
export default Sidebar;
