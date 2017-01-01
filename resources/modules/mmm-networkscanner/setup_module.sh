#!/usr/bin/env bash

. /tmp/resources/scripts/common.sh --source-only

package_install "sudo arp-scan"
clone_repo $1
npm_install $1
