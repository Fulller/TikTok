import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import style from './Header.module.scss';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AcountItem from '../../../AcountItem';
import Button from '../../../Button';
let cx = classNames.bind(style);
function Header() {
    let [seacrchResult, setSeacrchResult] = useState([]);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={'/home'}>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/1280px-TikTok_logo.svg.png"></img>
                    </Link>
                </div>
                <Tippy
                    visible={seacrchResult.length > 0}
                    interactive={true}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Acounts</h4>
                                <AcountItem></AcountItem>
                                <AcountItem></AcountItem>
                                <AcountItem></AcountItem>
                                <AcountItem></AcountItem>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input spellCheck="false" placeholder="Search accounts and videos"></input>
                        <i className={cx('fa-solid fa-circle-xmark')}></i>
                        <span></span>
                        <button className={cx('search-btn')}>
                            <i className={cx('fa-solid fa-magnifying-glass')}></i>
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button text>
                        <i style={{ margin: '0px 6px' }} class="fa-solid fa-plus"></i>
                        <span>Upload</span>
                    </Button>
                    <Button primary>
                        <span>Log in</span>
                    </Button>
                </div>
            </div>
        </header>
    );
}
export default Header;
