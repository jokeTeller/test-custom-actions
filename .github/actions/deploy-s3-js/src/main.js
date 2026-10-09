import * as core from '@actions/core'
// import * as github from '@actions/github'
import * as core from '@actions/exec'

function run() {
  core.notice('Hello from my custom JavaScript Action!')
}

run()
