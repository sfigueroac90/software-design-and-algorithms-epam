import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

import styles from './Filters.module.scss';
import { Store } from "../../store";

interface FiltersProps {
  store?: Store;
  updateStore?: (val) => void;
}

// OR

//interface FiltersProps {
//  selected?: {};
//  updateSelected?: (val) => void;
//}

// OR store can be global

const OPTIONS = [
  {
    title: "Without posts",
  },
  {
    title: "More than 100 posts",
  },
];

export function Filters({ store, updateStore }: FiltersProps) {
  const onChange = ({ title }) => {
    console.log(title); // for debugging

    let updatedFilters;
    if (store.filters.find((filter) => filter === title)) {
      updatedFilters = store.filters.filter((filter) => filter !== title);
    } else {
      updatedFilters = [...store.filters, title];
    }

    updateStore({ ...store, filters: updatedFilters });
  };

  return (
    <div className={styles.group}>
      <div className={styles.title}>Filter by posts</div>
      <ul className={styles.list}>
        {OPTIONS.map((option) => (
          <li
            value={option.title}
            onClick={() => onChange(option)}
            key={option.title}
          >
            <Checkbox
              checked={
                !!store.filters.find((filter) => filter === option.title)
              }
              value={option.title}
              onChange={() => onChange(option)}
              size="small"
              color="primary"
            />{" "}
            {option.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
