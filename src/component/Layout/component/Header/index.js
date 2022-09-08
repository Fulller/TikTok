import classNames from 'classnames/bind';
import style from './Header.module.scss';
let cx = classNames.bind(style);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/1280px-TikTok_logo.svg.png"></img>
                </div>
                <div className={cx('search')}>
                    <input spellCheck="false" placeholder="Search accounts and videos"></input>
                    <i className={cx('fa-solid fa-circle-xmark')}></i>
                    <span></span>
                    <button className={cx('search-btn')}>
                        <i className={cx('fa-solid fa-magnifying-glass')}></i>
                    </button>
                </div>
                <div className={cx('action')}>action</div>
            </div>
        </header>
    );
}
export default Header;
