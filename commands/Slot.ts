import { BaseCommand, args, flags } from '@adonisjs/core/build/standalone'

export default class Slot extends BaseCommand {
  public static commandName = 'spin'

  public static description = ''

  public static settings = {
    loadApp: true,

    stayAlive: false,
  }

  @args.spread({ required: false })
  public symbols: any[]

  @flags.number({ alias: 'w' })
  public win: number

  public async run() {
    this.logger.info('Spinning...')
    const SlotBrain = (await import('../providers/BrainProvider/slot')).default
    const MockResult = (await import('../providers/MockResultProvider/mock-results')).default

    if (this.win != undefined) {
      return SlotBrain.play(MockResult.screens.at(this.win))
    }

    return SlotBrain.play(this.symbols)
  }
}
