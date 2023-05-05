import type { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class ResultProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    this.app.container.singleton('Slot/Result', () => {
      const SlotResult = require('./result')
      return SlotResult
    })
  }

  public async boot() {
    // All bindings are ready, feel free to use them
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
