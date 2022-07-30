import { StyledEngineProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";

import { Filters, Search, Sort, Table } from "./components";
import { getAccounts, getImages, getUsers } from "./mocks/api";

import styles from "./App.module.scss";

import type { Account, Image, User } from "../types";
import type { Row } from "./components";

import rows from "./mocks/rows.json";
import { modifiedStore, Store } from "./store";
import { dataConverter } from "./Utils/dataConverter";

// mockedData has to be replaced with parsed Promises’ data
const mockedData: Row[] = rows.data;

function App() {
  const [store, setStore] = useState<Store>({ filters: [], data: [] });

  const updateStore = (store: Store) => {
    setStore(store);
  };

  useEffect(() => {
    // fetching data from API
    Promise.all([getImages(), getUsers(), getAccounts()]).then(
      ([images, users, accounts]: [Image[], User[], Account[]]) => {
        updateStore({
          ...store,
          data: dataConverter(users, accounts, images),
        });
      }
    );
  }, []);

  useEffect(() => {
    console.log(store); //only for debugging
  }, [store]);

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters store={store} updateStore={updateStore} />
            <Sort store={store} updateStore={updateStore} />
          </div>
          <Search store={store} updateStore={updateStore} />
        </div>
        <Table rows={modifiedStore(store).data} />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
