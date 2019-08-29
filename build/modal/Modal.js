import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../portal/Portal';
import Icon from '../icon/Icon';
import Button from '../button/Button';

var Modal = function Modal(_ref) {
  var title = _ref.title,
      isOpen = _ref.isOpen,
      onCancel = _ref.onCancel,
      onSubmit = _ref.onSubmit,
      children = _ref.children;


  return React.createElement(
    React.Fragment,
    null,
    isOpen && React.createElement(
      Portal,
      null,
      React.createElement(
        'div',
        { className: 'modalOverlay' },
        React.createElement(
          'div',
          { className: 'modalWindow' },
          React.createElement(
            'div',
            { className: 'modalHeader' },
            React.createElement(
              'div',
              { className: 'modalTitle' },
              title
            ),
            React.createElement(Icon, { name: 'times', onClick: onCancel })
          ),
          React.createElement(
            'div',
            { className: 'modalBody' },
            children
          ),
          React.createElement(
            'div',
            { className: 'modalFooter' },
            React.createElement(
              Button,
              { onClick: onCancel, invert: true },
              'Cancel'
            ),
            React.createElement(
              Button,
              { onClick: onSubmit },
              'Submit'
            )
          )
        )
      )
    )
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node
};

Modal.defaultProps = {
  title: 'Modal title',
  isOpen: false,
  onCancel: function onCancel() {},
  onSubmit: function onSubmit() {},
  children: null
};

export default Modal;