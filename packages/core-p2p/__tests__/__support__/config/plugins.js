module.exports = {
  '@arkecosystem/core-event-emitter': {},
  '@arkecosystem/validation': {},
  '@arkecosystem/core-config': {},
  '@arkecosystem/core-config-json': {},
  '@arkecosystem/core-logger': {},
  '@arkecosystem/core-logger-winston': {},
  '@arkecosystem/core-database': {},
  '@arkecosystem/core-database-sequelize': {
    dialect: 'sqlite',
    storage: ':memory:'
  },
  '@arkecosystem/core-transaction-pool': {},
  '@arkecosystem/core-transaction-pool-redis': {},
  '@arkecosystem/core-p2p': {
    port: 4002
  },
  '@arkecosystem/core-blockchain': {},
  '@arkecosystem/core-api': {
    port: 4003
  },
  '@arkecosystem/core-webhooks': {},
  '@arkecosystem/core-webhooks-api': {
    port: 4004
  },
  '@arkecosystem/core-graphql': {},
  '@arkecosystem/core-graphql-api': {},
  '@arkecosystem/core-forger': {}
}