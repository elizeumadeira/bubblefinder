import React from 'react';
import { Link } from "react-router-dom";
import { storedConfigs } from '../../configs';
import CellLS from './cell-level-selection';
import './index.scss';

function LevelSelection() {
  return (
    <div className="container-level-selection">
      <div className="level-selection">
        {
          Object.entries(storedConfigs().levels).map(([key, entry]) =>
            <CellLS
              key={key}
              disabled={entry.unlock}
              stage_number={key}
            />
          )
        }
      </div>

      <div className="button-container">
        <Link className="button" to="/">Voltar</Link>
      </div>
    </div>
  );
}

export default LevelSelection;
