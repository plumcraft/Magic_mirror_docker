#!/bin/bash

. /tmp/resources/scripts/common.sh --source-only

sed -i 's/ENV_GITHUB_TOKEN/'"$ENV_GITHUB_TOKEN"'/g' /root/MagicMirror/config/config.js

sed -i 's/ENV_STOCKS/'"$ENV_STOCKS"'/g' /root/MagicMirror/config/config.js 

sed -i 's/ENV_WEATHER_API_KEY/'"$ENV_WEATHER_API_KEY"'/g' /root/MagicMirror/config/config.js
sed -i 's/ENV_WEATHER_PWS/'"$ENV_WEATHER_PWS"'/g' /root/MagicMirror/config/config.js

sed -i 's/ENV_HUE_BRIDGE_IP/'"$ENV_HUE_BRIDGE_IP"'/g' /root/MagicMirror/config/config.js
sed -i 's/ENV_HUE_USER_ID/'"$ENV_HUE_USER_ID"'/g' /root/MagicMirror/config/config.js

sed -i 's/ENV_SONOS_HTTP_API_ADDRESS/'"$ENV_SONOS_HTTP_API_ADDRESS"'/g' /root/MagicMirror/config/config.js

sed -i 's/ENV_VOICE_CODE/'"$ENV_VOICE_CODE"'/g' /root/MagicMirror/config/config.js

sed -i 's/ENV_CALENDAR_TOKEN/'"$ENV_CALENDAR_TOKEN"'/g' /root/MagicMirror/config/config.js
sed -i 's/ENV_GMAIL_ADDRESS/'"$ENV_GMAIL_ADDRESS"'/g' /root/MagicMirror/config/config.js

sed -i "s/ENV_NET_DEVICES/$ENV_NET_DEVICES/g" /root/MagicMirror/config/config.js
sed -i 's/ENV_NETATMO_CLIENT_ID/'"$ENV_NETATMO_CLIENT_ID"'/g' /root/MagicMirror/config/config.js
sed -i 's/ENV_NETATMO_CLIENT_SECRET/'"$ENV_NETATMO_CLIENT_SECRET"'/g' /root/MagicMirror/config/config.js
sed -i 's/ENV_NETATMO_TOKEN/'"$ENV_NETATMO_TOKEN"'/g' /root/MagicMirror/config/config.js

# Use better_sed to escape specials characters
better_sed "ENV_RSS_FEED" "$ENV_RSS_FEED" /root/MagicMirror/config/config.js

exec "$@"
