/* eslint-disable no-console, @typescript-eslint/no-var-requires */
const branch = require('git-branch')
const shell = require('shelljs')
const fs = require('fs')
const path = require('path')
require('colors')

module.exports.statusCheck = () => {
  shell.exec('git status -s', { silent: true }, (code, stdout) => {
    const monitoredFiles = ['.snap', '.bundlesizeconfig']
    const noInvalidUncommited = !monitoredFiles.some((elem) => stdout.includes(elem))
    if (stdout.length === 0 || noInvalidUncommited) {
      console.log(`${`\n ✔`.green} Git Status Check Valid`)
      shell.exec(process.exit(0))
    } else {
      console.log(
        '\n  ERROR: Looks like you have an uncommited snapshot change or bundlesize update,\n         please commit this change before pushing.\n'
          .red,
      )
      process.exit(1)
    }
  })
}

module.exports.branchCheck = () => {
  branch((err, name) => {
    if (err) throw err
    const validBranchDirs = ['feature/', 'refactor/', 'bug/', 'upgrades/', 'tests/', 'release-', 'hotfix-']
    let validName = false
    for (let i = 0; i !== validBranchDirs.length; i += 1) {
      if (name.indexOf(validBranchDirs[i]) !== -1) validName = true
    }
    if (!validName) {
      console.log('\n------------------------------------------------------------------------'.grey)
      console.log(`${`\nGit Branch Name Error:`.red} - ${`${name}`.grey} \n`)
      console.log(
        `Your branch name does not follow valid naming conventions.\nPlease read up on the valid directory names in the CONTRIBUTING.md documentation.\n`,
      )
      console.log('> docs/CONTRIBUTING.md\n'.blue)
      console.log('------------------------------------------------------------------------\n'.grey)
      shell.exec(process.exit(1))
    } else {
      console.log(`${`\n ✔`.green} Git Branch Name Valid - ${`${name}`.grey} \n`)
      shell.exec(process.exit(0))
    }
  })
}

module.exports.moveAssets = () => {
  const moveFiles = (files) => {
    for (let i = 0; i < files.length; i += 1) {
      const file = files[i]
      const f = path.basename(file)
      const source = fs.createReadStream(file)
      const dest = fs.createWriteStream(path.resolve('./build/', f))

      source.pipe(dest)
      source.on('end', () => {
        console.log(`${`✔`.green} Copied - ${files[i]}`)
      })
      source.on('error', (err) => {
        console.log(err)
      })
    }
  }
  const filesToMove = ['./src/assets/manifest.json', './src/assets/favicon.ico', './src/assets/service-worker.js']
  moveFiles(filesToMove)
}
