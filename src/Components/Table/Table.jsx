import React from 'react'
import styles from './Table.module.css' // Import CSS module for styling

function Table() {
  return (
    <div className={styles.TableContainer}>
      {/* Table Container */}
      <div className={styles.ColumnContainer}>
        {/* Column Container: # */}
        <div className={styles.ColumnTitle}>
          {/* Column Title */}
          #
        </div>
        <div className={styles.ColumnRowsContainer}>
          {/* Column Rows */}
          <div className={styles.RowDataContainer}>
            1
          </div>
          <div className={styles.RowDataContainer}>
            2
          </div>
        </div>
      </div>

      <div className={styles.ColumnContainer}>
        {/* Column Container: Word */}
        <div className={styles.ColumnTitle}>
          {/* Column Title */}
          Word
        </div>
        <div className={styles.ColumnRowsContainer}>
          {/* Column Rows */}
          <div className={styles.RowDataContainer}>
            Computer Science
          </div>
          <div className={styles.RowDataContainer}>
            Object
          </div>
        </div>
      </div>

      <div className={styles.ColumnContainer}>
        {/* Column Container: Definition */}
        <div className={styles.ColumnTitle}>
          {/* Column Title */}
          Definition
        </div>
        <div className={styles.ColumnRowsContainer}>
          {/* Column Rows */}
          <div className={styles.RowDataContainer}>
            Applied...
          </div>
          <div className={styles.RowDataContainer}>
            ...
          </div>
        </div>
      </div>

      <div className={styles.ColumnContainer}>
        {/* Column Container: Delete Option */}
        <div className={styles.ColumnTitle}>
          {/* Column Title */}
          Delete Option
        </div>
        <div className={styles.ColumnRowsContainer}>
          {/* Column Rows */}
          <div className={styles.RowDataContainer}>
            X
          </div>
          <div className={styles.RowDataContainer}>
            X
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
