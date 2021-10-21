import { createSelector } from 'reselect';

const selectToasts = state => state.toastNotif;

export const selectToastList = createSelector(
    [selectToasts],
    (toasts) => toasts.toastList
);