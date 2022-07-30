import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import styles from './Search.module.scss';
import { Store } from "../../store";

interface SearchProps {
  store?: Store;
  updateStore?: (val) => void;
}

export function Search({ store, updateStore }: SearchProps) {
  const onChange = (value) => {
    updateStore({ ...store, searchValue: value });
  };

  return (
    <OutlinedInput
      className={styles.input}
      placeholder="Search by country/name/username"
      value={store.searchValue}
      type="search"
      onChange={(e) => onChange(e.target.value)}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
}
