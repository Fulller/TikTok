import { useState } from 'react';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Header from './Header';

let cx = classNames.bind(styles);
function Menu({ items, className }) {
    let [history, setHistory] = useState([{ data: items }]);
    let current = history[history.length - 1].data;
    let headerTitle = history[history.length - 1].title;
    return (
        <div className={cx(className)}>
            {history.length >= 2 ? <Header title={headerTitle} state={{ history, setHistory }}></Header> : <></>}
            {current.map((item, index) => {
                let isParent = !!item.children;
                return (
                    <MenuItem
                        data={item}
                        key={index}
                        onClick={() => {
                            if (isParent) {
                                let newHistory = history;
                                newHistory.push(item.children);
                                setHistory([...newHistory]);
                            }
                        }}
                    ></MenuItem>
                );
            })}
        </div>
    );
}
export default Menu;
