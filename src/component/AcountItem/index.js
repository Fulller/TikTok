import classNames from 'classnames/bind';
import style from './AcountItem.module.scss';
let cx = classNames.bind(style);
function AcountItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.avatar} alt="Avatar"></img>
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <span>{data.nickname}</span>
                    {data.tick ? <i class="fa-solid fa-circle-check"></i> : <></>}
                </div>
                <div className={cx('username')}>{data.full_name}</div>
            </div>
        </div>
    );
}
export default AcountItem;
