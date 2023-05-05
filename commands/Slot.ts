import { BaseCommand, args, flags } from '@adonisjs/core/build/standalone'

export default class Slot extends BaseCommand {
  public static commandName = 'play'

  public static description = ''

  public static settings = {
    loadApp: true,

    stayAlive: false,
  }

  @args.spread({ required: false })
  public symbols: SlotSymbol[]

  @flags.number({ alias: 's' })
  public screen: number

  public async run() {
    this.logger.info('Spinning...')
    const SlotMachine = (await import('../providers/SlotMachine/slot')).default
    const MockResult = (await import('../providers/MockResultProvider/mock-results')).default

    if (this.screen != undefined) {
      return SlotMachine.play(MockResult.screens.at(this.screen))
    }

    return SlotMachine.play(this.symbols)
  }
}
