FROM adoptopenjdk:11-jre-openj9
RUN mkdir /opt/app
COPY target/*.jar /opt/app/app.jar
COPY run.sh .
ENTRYPOINT ["run.sh"]
