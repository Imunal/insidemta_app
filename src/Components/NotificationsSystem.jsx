import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NotificationsSystem, { atalhoTheme, dismissNotification } from 'reapop';

const Toasts = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications);

  return (
    <NotificationsSystem
      notifications={notifications}
      dismissNotification={(id) => dispatch(dismissNotification(id))}
      theme={atalhoTheme}
    />
  );
};

export default Toasts;
