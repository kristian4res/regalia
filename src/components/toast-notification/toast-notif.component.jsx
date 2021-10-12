import React, { useState, useEffect } from 'react';

const ToastNotification = (props) => {
    const toastList = [
        {
            id: 1,
            title: 'Success',
            description: 'This is a success toast component',
            backgroundColor: '#5cb85c',
            icon: ''
        }
    ]

    const { position } = props;
    const [list, setList] = useState(toastList);

    // useEffect(() => {
    //     setList(toastList);
    // }, [toastList, list]);

    return (
        <div className={`notification-wrapper ${position}`}>
            {
                list.map((toast, idx) => (
                    <div 
                        key={idx} 
                        className={`notification toast ${position}`}
                        style={{backgroundColor: toast.backgroundColor}}>
                        <div className="notification-actions">
                            <button>
                                X
                            </button>
                        </div>
                        <div className="notification-content">
                            <p>{toast.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

export default ToastNotification;