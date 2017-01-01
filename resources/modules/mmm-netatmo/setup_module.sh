#!/usr/bin/env bash

. /tmp/resources/scripts/common.sh --source-only

clone_repo $1

npm_install $1
