import Button from '../../../Button';
import style from '../Menu.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(style);
function Header({ title, state }) {
    let { history, setHistory } = state;

    return (
        <head className={cx('menu-header')}>
            <Button
                onClick={() => {
                    let newHistory = history;
                    newHistory.pop();
                    setHistory([...newHistory]);
                }}
            >
                <i class="fa-solid fa-angle-left"></i>
            </Button>
            <div>{title}</div>
        </head>
    );
}
export default Header;
