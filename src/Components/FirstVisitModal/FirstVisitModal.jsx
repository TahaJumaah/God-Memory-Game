import { useState } from 'react';
import styles from './firstVisitModal.module.css';

export default function firstVisitModal({ isFirstVisit }) {
  const [isModalShown, setIsModalShown] = useState(isFirstVisit);
  return (
    <div className={isModalShown ? styles.modal_overlay : styles.modal_hidden}>
      <div className={isModalShown ? styles.modal_container : null}>
        <h2>First VIsit Modal Here</h2>
        <button
          onClick={() => {
            setIsModalShown(false);
          }}
        >
          Start Playing
        </button>
      </div>
    </div>
  );
}
