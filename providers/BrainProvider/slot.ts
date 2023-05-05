import SlotScreen from '../ScreenProvider/screen'
import Result from '../ResultProvider/result'

export default class SlotMachine {
  static rolledSymbols: SlotSymbol[] = []
  static formattedSymbols: SlotSymbol[][] = []
  static symbols: SlotSymbol[] = ['9', '10', 'J', 'Q', 'K', 'A', 'CAT', 'DOG', 'MONKEY', 'BIRD']
  static readonly numOfSymbols = 15
  static results: any
  // results: Result[]

  public static play(forcedRollSymbols?: SlotSymbol[]) {
    if (forcedRollSymbols === undefined || forcedRollSymbols.length === 0) {
      SlotMachine.spin()
      const score = Result.check(SlotMachine.rolledSymbols)
      SlotScreen.display(SlotMachine.rolledSymbols, score)
      return
    }

    if (forcedRollSymbols.length !== 15) {
      console.error('ERROR. Please enter exactly 15 symbols')
      return
    }

    SlotMachine.rolledSymbols = forcedRollSymbols
    const score = Result.check(SlotMachine.rolledSymbols)
    SlotScreen.display(SlotMachine.rolledSymbols, score)
  }

  private static spin() {
    for (let i = 0; i < SlotMachine.numOfSymbols; i++) {
      const index = Math.floor(Math.random() * SlotMachine.symbols.length)
      const symbol: SlotSymbol = SlotMachine.symbols.at(index)!
      SlotMachine.rolledSymbols.push(symbol)
    }
  }
}
