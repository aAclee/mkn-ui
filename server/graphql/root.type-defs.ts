import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const PATH_TO_CURRENT_FILE = 'server/graphql';

export const typeDefs = [
  `type Query {
    _empty: String
  }`,
];

(function(path: string): void {
  const dirs = readdirSync(path).filter(
    (file: string) => statSync(join(path, file)).isDirectory()
  );

  dirs.forEach((dir: string) => {
    const files = readdirSync(path + '/' + dir);

    files.forEach((file: string) => {
      if (file.endsWith('.type-defs.ts')) {
        /* eslint-disable-next-line @typescript-eslint/no-var-requires */
        const td = require(`./${dir}/${file}`).typeDefs;
        typeDefs.push(td);
      }
    });
  });
})(PATH_TO_CURRENT_FILE);
