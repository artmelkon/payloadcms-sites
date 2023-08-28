import { buildConfig } from "payload/config";
import path from "path";
// import Examples from './collections/Examples';
import Users from "./collections/Users";
import Sites from "./collections/Sites";
import Pages from "./collections/Pages";
import Media from "./collections/Media";

export default buildConfig({
  serverURL: process.env.CMS_URI,
  admin: {
    user: Users.slug,
  },
  collections: [
    Pages,
    Media,
    Sites,
    Users,
    // Add Collections here
    // Examples,
  ],
  cors: [`${process.env.PUBLIC_URI}`],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
