import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { eraseLocalStorage } from '../../configs/index.js';
import Modal from 'react-modal';
import './index.scss';

Modal.setAppElement('#root');

function Options() {
  var [isResetConfirmOpen, toggleIsResetConfirmOpen] = useState(false);

  return (
    <>
      <div className="form">
        <div className="campo">
          <label>Reset BubbleFinder data</label>
          <button onClick={() => toggleIsResetConfirmOpen(true)}>Reset</button>
        </div>
        <div className="campo">
          <label>Theme</label>
          <select>
            <option value="1">BubbleFinder</option>
          </select>
        </div>
      </div>

      <div className="button-container">
        <Link className="button" to="/">Back</Link>
      </div>

      <Modal isOpen={isResetConfirmOpen} onRequestClose={toggleIsResetConfirmOpen} contentLabel="Confirm Reset">
        <div>Are you sure you want to reset the BubbleFinder data?.</div>
        <div>THIS ACTION CANNOT BE UNDONE!!.</div>
        <div className="button-container">
          <button onClick={() => { toggleIsResetConfirmOpen(false); eraseLocalStorage(); }}>Reset</button>
          <button onClick={() => toggleIsResetConfirmOpen(false)}>Cancel</button>
        </div>
      </Modal>
    </>
  );
}

export default Options;
