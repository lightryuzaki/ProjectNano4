@echo off
@title ProjectNano
set PATH=C:\Program Files\Java\jdk1.7.0_79\bin;%PATH%
set CLASSPATH=.;dist\*;cores\*;
java -Xmx2048m -Dwzpath=wz\ net.server.Server
pause