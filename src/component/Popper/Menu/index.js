import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);
function Menu({ data, className }) {
    return (
        <div className={cx(className)}>
            {data.map((item, index) => {
                return <MenuItem data={item} key={index}></MenuItem>;
            })}
        </div>
    );
}
export default Menu;
