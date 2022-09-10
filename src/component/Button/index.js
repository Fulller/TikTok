import { Link, resolvePath } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
let cx = classNames.bind(styles);
function Button({ children, className, ...props }) {
    let Tag = 'button';
    let classes = ['wrapper'];
    for (let prop in props) {
        if (props[prop]) {
            switch (prop) {
                case 'to':
                    Tag = Link;
                    break;
                case 'href':
                    Tag = 'a';
                    break;
                case 'primary':
                    classes.push('primary');
                    break;
                case 'outline':
                    classes.push('outline');
                    break;
                case 'small':
                    classes.push('small');
                    break;
                case 'large':
                    classes.push('large');
                    break;
                case 'text':
                    classes.push('text');
                    break;
                case 'disable':
                    classes.push('disable');
                    Object.keys(props).forEach((key) => {
                        if (key.startsWith('on') && typeof props[key] == 'function') {
                            delete props[key];
                        }
                    });
                    break;
            }
        }
    }
    return (
        <Tag className={cx(...classes, className)} {...props}>
            {children}
        </Tag>
    );
}
export default Button;
