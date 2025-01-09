import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon("postgresql://InvestAlice_owner:uFSILl7a9ApO@ep-rough-resonance-a5fwvygh.us-east-2.aws.neon.tech/InvestAlice?sslmode=require");
export const db = drizzle(sql, { schema });