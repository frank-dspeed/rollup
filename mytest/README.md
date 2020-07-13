This Rollup Branch exposes the graph directly and allows editing. rollup() => { ..., modify(fn(graph)=>void)}
```js
import { rollup } from '../dist/es/rollup.js'
rollup({ input: 'src/main.js'}).then(bundle=>{
    
    // you can now modify bundle.cache.modules[]
    console.log(bundle)
    
    // You can now modify the resulting graph 
    bundle.modify(graph=>{
        graph.PluginDriver.emitFile()
    })
    
    //bundle.generate()
    //bundle.write()
})

``` 