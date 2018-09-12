const webpack = require('webpack')
const config = require('../config')
const ora = require('ora')
const chalk = require('chalk')

const spinner = ora('building...').start()

const task = ['module', 'browser']
config.forEach((i, index) => {
  webpack(i, (err, stats) => {

    spinner.stop()
    if (err) throw err

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan(`  Build ${task[index]} complete.\n`))
  })
})
