import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { HiPlus } from  'react-icons/hi';

import './toast-notif.styles.scss';

const ToastNotification = props => {
    const { toastList, position, autoDeleteTime } = props;
    const [list, setList] = useState(toastList);

    // Delete oldest toast
    const oldestToast = 0;

    useEffect(() => {
        setList([...toastList]);

        // eslint-disable-next-line
    }, [toastList]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (toastList.length && list.length) {
                deleteToast(oldestToast);
            }
        }, autoDeleteTime);
        
        return () => {
            clearInterval(interval);
        }

        // eslint-disable-next-line
    }, [toastList, autoDeleteTime, list]);

    const deleteToast = (idx) => {
        // Sync toasts lists
        list.splice(idx, 1);
        toastList.splice(idx, 1);

        setList([...list]);
    }

    return (
        <>
            <div className={`notification-wrapper ${position}`}>
                {
                    list.map((toast, idx) =>     
                        <div 
                            key={idx}
                            className={`notification toast ${position}`}
                            style={{ backgroundColor: toast.backgroundColor }}
                        >
                            <button onClick={() => deleteToast(idx)}>
                                &#10005;
                            </button>
                            <div className="notification-content">
                                <div className="notification-icon">
                                    <HiPlus className="icon" />
                                </div>
                                <div>
                                    <p className="notification-title">{toast.title}</p>
                                    <p className="notification-message">
                                        {toast.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
}

ToastNotification.defaultProps = {
    position: 'top-right',
    autoDeleteTime: 3000,
}

ToastNotification.propTypes = {
    toastList: PropTypes.array.isRequired,
    position: PropTypes.string,
    autoDeleteTime: PropTypes.number,
}

export default ToastNotification;