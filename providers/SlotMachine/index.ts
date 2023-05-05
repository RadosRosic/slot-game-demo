import type { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class SlotProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    this.app.container.singleton('Slot/Machine', () => {
      const SlotMachine = require('./slot').default
      return new SlotMachine()
    })
  }

  public async boot() {}

  public async ready() {}

  public async shutdown() {}
}
