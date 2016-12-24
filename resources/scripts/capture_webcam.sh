#!/bin/bash

DATE=`date +%Y-%m-%d:%H:%M:%S`

fswebcam -r 1024x768 --no-banner ~/webcam/$DATE.jpg
sleep 1
