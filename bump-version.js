#!/usr/bin/env node

const fs = require('fs')
const Semver = require('semver')
const args = {
  bumpPatch: !!process.env.PATCH,
  bumpMinor: !!process.env.MINOR,
  bumpMajor: !!process.env.MAJOR,
  version: process.env.SETVERSION,
  prerelease: process.env.PRERELEASE,
}


writeVersion(newVersion(pkg().version, args))

////////////////////////////////

function newVersion(version, args) {
  if(args.version) {
    return args.version
  } else {
    const version = new Semver(pkg().version)

    if(args.bumpMajor) {
      version.major += 1
    }

    if(args.bumpMinor) {
      version.minor += 1
    }

    if(args.bumpPatch) {
      version.patch += 1
    }

    if(args.prerelease) {
      version.prerelease = [args.prerelease]
    }

    return version.format()
  }
  
}

function writeVersion(ver) {
  const p = pkg()
  p.version = ver + ""
  console.log(ver)
  fs.writeFileSync('/package.json', JSON.stringify(p, null, 2), 'utf8')
}

function pkg() {
  return Object.assign({}, require('/package.json'))
}

