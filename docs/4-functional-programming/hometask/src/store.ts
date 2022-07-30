import { Row } from "./components";

export interface Store {
  filters: string[];
  searchValue?: string;
  sortType?: string;
  data?: Row[];
}

export const sort = (sortType: string, data: Row[]) => {
  const sortAsc = (a, b) => a.lastPayments - b.lastPayments;
  const sortDes = (a, b) => b.lastPayments - a.lastPayments;
  return sortType ? data.sort(sortType === "asc" ? sortAsc : sortDes) : data;
};

export const filter = (filters: string[], data: Row[]) => {
  const filterMap = {
    "Without posts": (row: Row) => row.posts === 0,
    "More than 100 posts": (row: Row) => row.posts >= 100,
  };
  return filters && filters.length > 0
    ? filters.reduce((p, c) => [...p, ...data.filter(filterMap[c])], [])
    : data;
};

export const search = (sarchTerm?, data?: Row[]) => {
  return sarchTerm
    ? data.filter((v) =>
        [v.country, v.lastPayments, v.name, v.posts, v.username]
          .map((v) => "" + v)
          .reduce(
            (p, c) => c.toLowerCase().includes(sarchTerm?.toLowerCase()) || p,
            false
          )
      )
    : ([] as Row[]);
};

const removeDuplicateds = (data: Row[]) =>
  data.filter(
    (v, i, arr) => arr.map((v) => v.username).indexOf(v.username) === i
  );

export const modifiedStore = (store: Store) => {
  return {
    ...store,
    data: sort(
      store.sortType,
      removeDuplicateds([
        ...filter(store.filters, store.data),
        ...search(store.searchValue, store.data),
      ])
    ),
  };
};
