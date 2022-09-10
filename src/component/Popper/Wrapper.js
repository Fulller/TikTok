import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
let cx = classNames.bind(styles);
function Wrapper({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}
export default Wrapper;
