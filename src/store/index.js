import { createStore } from "vuex";
import userModule from "./userModule"
import mySymbolsModule from "./mySymbolsModule"
import refillsModule from "./refillsModule"
import adminModule from "./adminModule"
import balanceHistoryModule from "./balanceHistoryModule"
import currenciesModule from "./currenciesModule"

export default createStore({
    modules: {
        user: userModule,
        mySymbols: mySymbolsModule,
        refills: refillsModule,
        admin: adminModule,
        balanceHistory: balanceHistoryModule,
        currencies: currenciesModule,
    }
})
