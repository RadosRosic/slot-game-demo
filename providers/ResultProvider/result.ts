class Result {
  static readonly paylines = [
    [0, 3, 6, 9, 12],
    [1, 4, 7, 10, 13],
    [2, 5, 8, 11, 14],
    [0, 4, 8, 10, 12],
    [2, 4, 6, 10, 14],
  ]

  static readonly bet = 100

  public static check(rolledSymbols: string[]) {
    const score: any = []
    let winnings = 0
    let hits = 0
    for (const payline of Result.paylines) {
      hits = 0
      for (const index of payline) {
        if (rolledSymbols.at(payline[0]) !== rolledSymbols.at(index)) {
          break
        }
        hits++
      }
      const paylineStr = payline.join(' ')
      const result = {
        [paylineStr]: hits,
      }

      if (hits >= 3) {
        score.push(result)
        winnings += this.calculateWinnings(hits)
      }
    }

    return {
      paylines: score,
      bet_amount: this.bet,
      total_win: winnings,
    }
  }

  public static calculateWinnings(hits: number) {
    switch (hits) {
      case 3:
        return Result.bet * 0.2
      case 4:
        return Result.bet * 2
      case 5:
        return Result.bet * 10
      default:
        return 0
    }
  }
}

export default Result
