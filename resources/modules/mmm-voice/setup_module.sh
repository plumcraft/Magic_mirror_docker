#!/usr/bin/env bash

. /tmp/resources/scripts/common.sh --source-only

clone_repo $1

echo -e "\e[92mInstalling dependencies\e[0m"
cd ~/MagicMirror/modules/$1/installers
bash ./dependencies.sh
echo -e "\e[92mInstalling dependencies Done!\e[0m"
