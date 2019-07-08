FROM openjdk:7u211-jdk-slim

RUN apt-get update && apt-get install -y dos2unix

COPY . .

RUN dos2unix gradlew

RUN chmod +x gradlew

RUN ./gradlew buildAndCopy

ENV MODE local

CMD ["java", "-jar", "-Dwzpath=wz/", "dist/ProjectNano.jar", "&>", "logs/$(date +\"%Y_%m_%d_%I_%M_%p\").log"]
