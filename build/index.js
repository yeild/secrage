const webpack = require('webpack')
const config = require('../config')
const ora = require('ora')
const chalk = require('chalk')

const spinner = ora('building...')
const taskName = ['module', 'browser']

config.forEach((i, index) => {
  spinner.start()
  webpack(i, (err, stats) => {

    spinner.stop()
    if (err) throw err

    if (stats.hasErrors()) {
      console.log(chalk.red(stats.compilation.errors))
      process.exit(1)
    }

    console.log(chalk.cyan(`  Build for ${taskName[index]} complete.\n`))
  })
})
