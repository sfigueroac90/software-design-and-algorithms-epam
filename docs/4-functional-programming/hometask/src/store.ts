import { User } from "../types";
import { Row } from "./components";

/**
 * Store type
 */
export interface Store {
  filters: string[];
  searchValue?: string;
  sortType?: string;
  data?: Row[];
}

/**
 * Const to initializes store
 */
export const storeInit: Store = {
  filters: [],
  data: [],
  sortType: "asc",
  searchValue: "",
};

/**
 * Sort rows asc or desc depending on lastPayment, if the  field [key] is not a number or string returns the same array
 * @param sortType Sort order "asc" | "desc"
 * @param data Rows to sort
 * @param key: Sorting key
 * @returns Returns the sorted rows
 */
export const sort = (sortType: string, data: Row[], key?: keyof Row) => {
  const sortingKey = key || "lastPayments";
  const sortAsc = (a, b) => compare(a, b, sortingKey);
  const sortDes = (a, b) => compare(b, a, sortingKey);
  return sortType ? data.sort(sortType === "asc" ? sortAsc : sortDes) : data;
};

/**
 * Compare two row elements depending on key, if the field is not a string or number returns 1
 * @param rowA
 * @param rowB
 * @param key Sorting key, if not key uses lastPayments as sorting key
 * @returns
 */
export const compare = (rowA: Row, rowB: Row, key?: keyof Row) => {
  const sortingKey = key || "lastPayments";

  const a = rowA[sortingKey];
  const b = rowB[sortingKey];
  if (typeof a === "number" && typeof b === "number") return a - b;

  if (typeof a === "string" && typeof b === "string") return a.localeCompare(b);

  return 1;
};

/**
 * Genereted filtered data, filters works as "OR" condition.
 * @param filters Array of the name of the filters, "Without posts" || "More than 100 posts"
 * @param data
 * @returns
 */
export const filter = (filters: string[], data: Row[]) => {
  const filterMap = {
    "Without posts": (row: Row) => row.posts === 0,
    "More than 100 posts": (row: Row) => row.posts >= 100,
  };
  return filters.reduce((p, c) => [...p, ...data.filter(filterMap[c])], []);
};

/**
 *
 * @param sarchTerm
 * @param data
 * @returns
 */
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

/**
 * Utility function to remove duplicated rows with the same user name
 * @param data
 * @returns
 */
const removeDuplicateds = <T extends { username: string }>(data: T[]) =>
  data.filter(
    (v, i, arr) => arr.map((v) => v.username).indexOf(v.username) === i
  );

/**
 * Function to get filtered store data according to business rules
 * @param store Store
 * @returns filtered store according to business rules
 */

export const filteredStore = (store: Store) => {
  const filtered = removeDuplicateds([
    ...(store.filters.length ? filter(store.filters, store.data) : []),
    ...search(store.searchValue, store.data),
  ]);

  return {
    ...store,
    data: sort(
      store.sortType,
      filtered.length > 0 ? filtered : store.data,
      "lastPayments"
    ),
  };
};
