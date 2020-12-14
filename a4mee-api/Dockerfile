FROM adoptopenjdk:11-jre-openj9
EXPOSE 8080
RUN mkdir /opt/app
COPY target/*.jar /opt/app/app.jar
COPY run.sh .
RUN chmod +x /run.sh
# Main Command
ENTRYPOINT ["./run.sh"]
