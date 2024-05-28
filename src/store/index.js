import { createStore } from "vuex";
import userModule from "./userModule"
import mySymbolsModule from "./mySymbolsModule"

export default createStore({
    modules: {
        user: userModule,
        mySymbols: mySymbolsModule,
    }
})
