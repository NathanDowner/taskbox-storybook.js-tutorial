import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { TasksContainer } from './TaskList';

export function PureInboxScreen({ error }) {
  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
          <div>Just an example</div>
        </div>
      </div>
    );
  }
  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox (Story book demo)</span>
        </h1>
      </nav>
      <TasksContainer />
    </div>
  );
}

PureInboxScreen.propTypes = {
  /** The error message */
  error: PropTypes.string,
};

PureInboxScreen.defaultProps = {
  error: null,
};

export function InboxScreen() {
  // We're retrieving the error field from our updated store
  const isError = useSelector((state) => state.isError);

  return <PureInboxScreen error={isError} />;
}
