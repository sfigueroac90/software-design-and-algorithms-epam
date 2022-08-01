import { StyledEngineProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";

import { Filters, Search, Sort, Table } from "./components";
import { getAccounts, getImages, getUsers } from "./mocks/api";

import styles from "./App.module.scss";

import type { Account, Image, User } from "../types";

import { filteredStore, Store, storeInit } from "./store";
import { dataConverter } from "./Utils/dataConverter";

function App() {
  const [store, setStore] = useState<Store>(storeInit);

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
        <Table rows={filteredStore(store).data} />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
