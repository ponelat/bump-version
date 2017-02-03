### A replacement for `npm version`
Wrapped in a docker image

This will update the package.json, bump bumping the version.

### Running
docker run --rm \
  -e "PATCH=true" \
  -v /path/to/package.json:/package.json \
  ponelat/bump-version

### ENV
- `-e "MAJOR=true"` bump the major version
- `-e "MINOR=true"'` bump the minor version
- `-e "PATCH=true"` bump the patch version
- `-e "PRERELEASE=something"` add a prerelease ( eg: '1.1.1-something` )
- `-e "SETVERSION=something"` set the version to something fixed, this will override the above.

> You can include whichever parts of the semver you'd like to bump and whether you want a prelrease attached.


Copyright SmartBear 2017
