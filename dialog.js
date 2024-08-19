// dialog.js
import React from 'react';
import ReactDOM from 'react-dom';

const Dialog = ({ isVisible, onClose, content }) => {
  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <div style={{
      position: 'fixed',
      top: '10px',
      left: '10px',
      backgroundColor: 'white',
      border: '1px solid black',
      padding: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      zIndex: 1000,
    }}>
      <button onClick={onClose} style={{ float: 'right' }}>Close</button>
      <div>
        <p><strong>Node ID:</strong> {content.id}</p>
        <p><strong>Sentence:</strong> {content.sentence}</p>
        <p><strong>Sentiment Score:</strong> {content.score}</p>
      </div>
    </div>,
    document.body // Render the dialog into the body of the document
  );
};

export default Dialog;
