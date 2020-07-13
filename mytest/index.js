import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { rollup } from '../dist/es/rollup.js'

rollup({ input: `${__dirname}/src/main.js`}).then(build=>{
    console.log(build)
    build.modify(graph=>console.log(graph))
})






