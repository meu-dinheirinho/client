import React from 'react';
// styles
import styles from './styles.module.css';

export default function LayoutLogin({
  children,
}) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
