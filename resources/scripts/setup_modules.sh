#!/bin/bash

for dir in /tmp/resources/modules/*/
do
    dir=${dir%*/}
    /tmp/resources/modules/${dir##*/}/setup_module.sh ${dir##*/}
done
