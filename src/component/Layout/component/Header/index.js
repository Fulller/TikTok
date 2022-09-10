import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import style from './Header.module.scss';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AcountItem from '../../../AcountItem';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';
let cx = classNames.bind(style);
let menuList = [
    {
        icon: <i class="fa-solid fa-globe"></i>,
        title: 'English',
    },
    {
        icon: <i class="fa-regular fa-circle-question"></i>,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <i class="fa-regular fa-keyboard"></i>,
        title: 'Keyboad shotcuts',
    },
];
function Header() {
    let [seacrchResult, setSeacrchResult] = useState([1, 2]);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={'/home'}>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/1280px-TikTok_logo.svg.png"></img>
                    </Link>
                </div>
                <Tippy
                    visible={false}
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
                    <Tippy
                        interactive
                        placement="bottom-end"
                        delay={[0, 600]}
                        render={(attrs) => (
                            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <Menu className="menu-list" data={menuList}></Menu>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('menu')}>
                            <Button>
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </Button>
                        </div>
                    </Tippy>
                </div>
            </div>
        </header>
    );
}
export default Header;
