import { Account, User, Image } from "../../types";
import { Row } from "../components/Table/Table";

//Duck typing userID
const getById = <T extends { userID: string }>(arr: T[], id: string): T =>
  arr.find((arr) => arr.userID === id);

const last = <T>(arr: T[]): T => arr[arr.length - 1];

/**
 * Generates row from users, accounts, and images, uses user ID to Join data.
 * @param users 
 * @param accounts 
 * @param images 
 * @returns Joined rows
 */
export const dataConverter = (
  users: User[],
  accounts: Account[],
  images: Image[]
): Row[] => {
  // convert data
  return users.map(
    (user): Row => ({
      avatar: getById(images, user.userID).url,
      username: user.username,
      country: user.country,
      name: user.name,
      lastPayments:
        last(getById(accounts, user.userID).payments)?.totalSum || 0,
      posts: getById(accounts, user.userID).posts,
    })
  );
};
