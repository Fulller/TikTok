import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import Tippy from '@tippyjs/react/headless';
import TollTips from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import classNames from 'classnames/bind';
import style from './Header.module.scss';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AcountItem from '../../../AcountItem';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';
let cx = classNames.bind(style);
let menuListLogOut = [
    {
        icon: <i class="fa-solid fa-globe"></i>,
        title: 'English',
        children: {
            title: 'Languae',
            data: [
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                    children: {
                        title: 'Side',
                        data: [
                            {
                                code: 'vi',
                                title: 'Bắc',
                            },
                            {
                                code: 'en',
                                title: 'Trung',
                            },
                            {
                                code: 'en',
                                title: 'Nam',
                            },
                        ],
                    },
                },
                {
                    code: 'en',
                    title: 'English',
                },
            ],
        },
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
let menuListLogIn = [
    {
        icon: <i class="fa-solid fa-user"></i>,
        title: 'View profile',
    },
    {
        icon: <i class="fa-brands fa-tiktok"></i>,
        title: 'Get coins',
    },
    {
        icon: <i class="fa-solid fa-gear"></i>,
        title: 'Settings',
    },
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
    {
        icon: <i class="fa-solid fa-right-from-bracket"></i>,
        title: 'Log out',
        type: 'linespace',
    },
];
function Header() {
    let isLogin = true;
    let inputRef = useRef();
    let [seacrchResult, setSeacrchResult] = useState([1, 2]);
    let [searchValue, setSearchValue] = useState('');
    let [isShow, setIsShow] = useState(false);
    function handleClear() {
        setSearchValue('');
        inputRef.current.focus();
    }
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={'/home'}>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/1280px-TikTok_logo.svg.png"></img>
                    </Link>
                </div>
                <Tippy
                    visible={isShow}
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
                        <input
                            ref={inputRef}
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            spellCheck="false"
                            placeholder="Search accounts and videos"
                        ></input>
                        <i onClick={handleClear} className={cx('fa-solid fa-circle-xmark')}></i>
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
                    {isLogin ? (
                        <>
                            <TollTips content="Message">
                                <div>
                                    <Button>
                                        <i class="fa-regular fa-paper-plane"></i>
                                    </Button>
                                </div>
                            </TollTips>
                            <TollTips content="Inbox">
                                <div>
                                    <Button>
                                        <i class="fa-regular fa-message"></i>
                                    </Button>
                                </div>
                            </TollTips>
                            <Tippy
                                interactive
                                placement="bottom-end"
                                delay={[0, 600]}
                                render={(attrs) => (
                                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                                        <PopperWrapper>
                                            <Menu className="menu-list" items={menuListLogIn}></Menu>
                                        </PopperWrapper>
                                    </div>
                                )}
                            >
                                <div className={cx('menu')}>
                                    <Button>
                                        <img
                                            className={cx('avatar')}
                                            src="https://znews-photo.zingcdn.me/w660/Uploaded/xbhunua/2017_06_02/GettyImages691477304.jpg"
                                        ></img>
                                    </Button>
                                </div>
                            </Tippy>
                        </>
                    ) : (
                        <>
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
                                            <Menu className="menu-list" items={menuListLogOut}></Menu>
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
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
console.log('ok');
export default Header;
