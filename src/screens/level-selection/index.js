import React from 'react';
import { levels } from '../../configs';
import CellLS from './cell-level-selection';
import './index.scss';

function LevelSelection() {
  return (
    <div className="container-level-selection">
      {
        Object.entries(levels()).map(([key, entry]) =>
          <CellLS
            key={key}
            disabled={entry.unlock}
            stage_number={key}
          />
        )
      }
    </div>
  );
}

export default LevelSelection;
