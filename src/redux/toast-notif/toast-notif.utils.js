import { HiCheckCircle, HiXCircle, HiChatAlt } from  'react-icons/hi';

export const getToastNotif = (type) => {
    if (type === 'success') {
        return <HiCheckCircle className={`icon ${type}`} />;   
    }
    else if (type === 'neutral') {
        return <HiChatAlt className={`icon ${type}`} />;
    }
    else {
        return <HiXCircle className={`icon ${type}`} />;
    }
};