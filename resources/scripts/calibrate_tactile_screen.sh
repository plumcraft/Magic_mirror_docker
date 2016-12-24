#!/bin/bash

DISPLAY=:0 xrandr -o right
DISPLAY=:0 xinput set-prop --type=int --format=8 "USBest Technology SiS HID Touch Controller" "Evdev Axes Swap" 1
DISPLAY=:0 xinput set-prop --type=int --format=8 "USBest Technology SiS HID Touch Controller" "Evdev Axis Inversion" 0 1
DISPLAY=:0 xinput set-prop --type=int --format=8 12 "Evdev Axis Inversion" 0 1
