import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const AccountItem = () => {
  return (
    <div className={cx('wrapper')}>
      <img
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e717d08f416b4a574345a66d5fc472e5~c5_300x300.webp?x-expires=1662793200&x-signature=uDpWkH2dB7D07zxDJiuNtp8%2BZO8%3D"
        alt="abc"
        className={cx('avatar')}
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
        </h4>
        <span className={cx('username')}>Nguyenvana</span>
      </div>
    </div>
  );
};

export default AccountItem;
