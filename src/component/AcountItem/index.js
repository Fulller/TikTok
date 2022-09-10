import classNames from 'classnames/bind';
import style from './AcountItem.module.scss';
let cx = classNames.bind(style);
function AcountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://netbiz.net.vn/stores/news_dataimages/minhphong.le/042022/09/11/son-tung-m-tp-bat-ngo-cap-nhat-avatar-den-khien-fan-hoang-mang_8.jpg?rt=20220409112003"
                alt="Avatar"
            ></img>
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <span>fuller99</span>
                    <i class="fa-solid fa-circle-check"></i>
                </div>
                <div className={cx('username')}>Nguyễn Phước Đầy</div>
            </div>
        </div>
    );
}
export default AcountItem;
