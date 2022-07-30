import { Row } from "./components";

export interface Store {
  filters: string[];
  searchValue?: string;
  sortType?: string;
  data?: Row[];
}

export const sort = (store: Store) => {
  const sortAsc = (a, b) => a.lastPayments - b.lastPayments;
  const sortDes = (a, b) => b.lastPayments - a.lastPayments;
  const sortedData = store.sortType
    ? [...store.data].sort(store.sortType === "asc" ? sortAsc : sortDes)
    : store.data;
  return { ...store, data: sortedData };
};

export const filter = (store: Store) => {
  const filterMap = {
    "Without posts": (row: Row) => row.posts === 0,
    "More than 100 posts": (row: Row) => row.posts >= 100,
  };
  return {
    ...store,
    data:
      store.filters && store.filters.length > 0
        ? store.filters.reduce((p, c) => p.filter(filterMap[c]), store.data)
        : store.data,
  };
};

export const search = (store: Store) => {
  return {
    ...store,
    data: store.searchValue
      ? store.data.filter((v) =>
          [v.country, v.lastPayments, v.name, v.posts, v.username]
            .map((v) => "" + v)
            .reduce(
              (p, c) =>
                c.toLowerCase().includes(store.searchValue.toLowerCase()) || p,
              false
            )
        )
      : store.data,
  };
};
