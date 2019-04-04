FROM openjdk:7u211-jdk-slim

COPY . .

RUN chmod +x gradlew

RUN ./gradlew buildAndCopy

CMD ["java", "-jar", "-Dwzpath=wz/", "dist/ProjectNano.jar", "&>", "logs/$(date +\"%Y_%m_%d_%I_%M_%p\").log"]
