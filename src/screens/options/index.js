import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { eraseLocalStorage } from '../../configs/index.js';
import ThemeContext from '../../configs/theme-context.js';
import Modal from 'react-modal';
import './index.scss';

Modal.setAppElement('#root');

function Options() {
  const { theme, setTheme } = useContext(ThemeContext);
  var [isResetConfirmOpen, toggleIsResetConfirmOpen] = useState(false);

  return (
    <div className="container-options">
      <div className="form">
        <div className="campo">
          <label>Reset BubbleFinder data</label>
          <button onClick={() => toggleIsResetConfirmOpen(true)}>Reset</button>
        </div>
        <div className="campo">
          <label>Theme</label>
          <select value={theme} onChange={(e) => { setTheme(e.target.value); }}>
            <option value="bubble-finder">BubbleFinder</option>
            <option value="mario-world">Mario</option>
          </select>
        </div>
      </div>

      <div className="button-container">
        <Link className="button" to="/">Back</Link>
      </div>

      <Modal
        isOpen={isResetConfirmOpen}
        onRequestClose={toggleIsResetConfirmOpen}
        contentLabel="Confirm Reset"
        className={`Modal ModalOptions ${theme}-modal`}
        overlayClassName={`ModalOverlay ${theme}-modal-overlay`}
      >
        <div>
          <div>Are you sure you want to reset the BubbleFinder data?.</div>
          <div>THIS ACTION CANNOT BE UNDONE!!.</div>
        </div>
        <div className="button-container">
          <button onClick={() => { toggleIsResetConfirmOpen(false); eraseLocalStorage(); }}>Reset</button>
          <button onClick={() => toggleIsResetConfirmOpen(false)}>Cancel</button>
        </div>
      </Modal>
    </div>
  );
}

export default Options;
