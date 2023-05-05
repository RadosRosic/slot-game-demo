import type { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class SlotScreenProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    this.app.container.singleton('Slot/Screen', () => {
      const SlotScreen = require('./screen')
      return SlotScreen
    })
  }

  public async boot() {}

  public async ready() {}

  public async shutdown() {}
}
