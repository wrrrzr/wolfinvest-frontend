import { createStore } from "vuex";
import userModule from "./userModule"
import mySymbolsModule from "./mySymbolsModule"
import symbolsListModule from "./symbolsListModule"
import refillsModule from "./refillsModule"

export default createStore({
    modules: {
        user: userModule,
        mySymbols: mySymbolsModule,
        symbolsList: symbolsListModule,
        refills: refillsModule,
    }
})
