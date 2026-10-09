import * as core from '@actions/core'
// import * as github from '@actions/github'
import * as exec from '@actions/exec'

function run() {
  core.notice('Hello from my custom JavaScript Action!')

  const bucket = core.getInput('bucket', { required: true })
  const bucketRegion = core.getInput('bucket-region', { required: true })
  const filesDir = core.getInput('files-dir', { required: true })

  const s3Uri = `s3://${bucket}`
  exec.exec(`aws s3 sync ${filesDir} ${s3Uri} --region ${bucketRegion}`)

  const siteUrl = `http://${bucket}.s3-website-${bucketRegion}.amazonaws.com`
  core.setOutput('site-url', siteUrl)
}

run()
