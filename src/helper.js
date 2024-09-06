export const finishTutorial = () => {
    localStorage.setItem('helper', "end")
}

export const resetTutorial = () => {
    localStorage.setItem('helper', "helper.auth")
}

export const helperState = {
    auth: "helper.auth",
    gotoRefills: "helper.goto_refills",
    selectRefill: "helper.select_refill",
    gotoSymbols: "helper.goto_symbols",
    symbols: "helper.symbols",
    end: "end",
}
