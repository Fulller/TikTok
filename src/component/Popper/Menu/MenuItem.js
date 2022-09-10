import Button from '../../Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);
function MenuItem({ data, onClick, className }) {
    let classNames = ['menu-item', className];

    return (
        <Button className={cx(classNames)} to={data.to} onClick={onClick}>
            <span>{data.icon}</span>
            <span>{data.title}</span>
        </Button>
    );
}
export default MenuItem;
