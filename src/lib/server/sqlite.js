import { Database } from "sqlite3";
import { DB_PATH } from "$env/static/private";

const database = new Database(DB_PATH, { verbose: console.debug });
