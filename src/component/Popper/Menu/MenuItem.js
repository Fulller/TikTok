import Button from '../../Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);
function MenuItem({ data }) {
    console.log(data);
    return (
        <Button className={cx('menu-item')} to={data.to}>
            {data.icon}
            {data.title}
        </Button>
    );
}
export default MenuItem;
