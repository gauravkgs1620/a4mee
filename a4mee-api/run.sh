#!/bin/sh
exec java -jar -Dserver.port=$PORT /opt/app/app.jar
