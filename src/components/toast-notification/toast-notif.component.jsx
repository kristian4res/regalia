import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { selectToastList } from '../../redux/toast-notif/toast-notif.selectors';

import { getToastNotif } from '../../redux/toast-notif/toast-notif.utils';

import './toast-notif.styles.scss';

const ToastNotification = (props) => {
    const { toastListProp, position, autoDeleteTime } = props;
    const [list, setList] = useState(toastListProp);
    // Keep track of list length
    const removeToastIdx = useRef(list.length - 1);

    // Update whenever 
    useEffect(() => {
        setList([...toastListProp]);
        removeToastIdx.current = list.length - 1;
        // eslint-disable-next-line
    }, [toastListProp]);

    useEffect(() => {
        if (removeToastIdx > 5) {
            removeToast(removeToastIdx);
        }
        else { 
            const interval = setInterval(() => {
                if (toastListProp.length && list.length) {
                    removeToast(removeToastIdx);
                }
            }, autoDeleteTime); 
            return () => {
                clearInterval(interval);
            }
        }

        // eslint-disable-next-line
    }, [toastListProp, autoDeleteTime, list]);

    const removeToast = (idx) => {
        // Sync toasts lists
        list.splice(idx, 1);
        toastListProp.splice(idx, 1);

        setList([...list]);
    }

    return (
        <>
            <div className={`notification-wrapper ${position}`}>
                {   
                    list.map((toast, idx) =>     
                        <div 
                            key={idx}
                            className={`notification toast ${position} ${toast.type ? toast.type : ''}`}
                        >
                            <button onClick={() => removeToast(idx)}>
                                &#10005;
                            </button>
                            <div className="notification-content">
                                <div className="notification-icon">
                                    {
                                        getToastNotif(toast.type)
                                    }
                                </div>
                                <div>
                                    <p className="notification-title">{toast.title}[{idx}]</p>
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
    position: 'bottom-right',
    autoDeleteTime: 3000,
}

ToastNotification.propTypes = {
    position: PropTypes.string,
    autoDeleteTime: PropTypes.number,
}

const mapStateToProps = (state) => ({
    toastListProp: selectToastList(state)
});

export default connect(mapStateToProps)(ToastNotification);