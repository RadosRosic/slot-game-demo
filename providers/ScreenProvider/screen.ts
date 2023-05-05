class SlotScreen {
  public static display(symbolArr: string[], score: any) {
    const output: any = [[], [], []]

    for (let i = 0; i < symbolArr.length; i++) {
      const row = i % 3
      const col = Math.floor(i / 3)
      output[row][col] = symbolArr[i]
    }
    console.log({ board: output, ...score })
  }
}

export default SlotScreen
