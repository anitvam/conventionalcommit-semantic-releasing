#!/bin/bash

git tag -a -f v${nextRelease.version} v${nextRelease.version} -F CHANGELOG.md
        git push --force origin v${nextRelease.version}