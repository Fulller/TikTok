import Button from '../../Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    return (
        <Button className={cx('menu-item')} to={data.to} onClick={onClick}>
            <span>{data.icon}</span>
            <span>{data.title}</span>
        </Button>
    );
}
export default MenuItem;
