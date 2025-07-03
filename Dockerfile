# Stage 1: React build
FROM node:20 AS frontend
WORKDIR /app
COPY Techlambdas-fontEnd/ ./Techlambdas-fontEnd
WORKDIR /app/Techlambdas-fontEnd
RUN npm install && npm run build

# Stage 2: Spring Boot build
FROM maven:3.9-eclipse-temurin-17 AS backend
WORKDIR /app
COPY Techlambdas-backend/ ./Techlambdas-backend
WORKDIR /app/Techlambdas-backend
# Copy React build output into Spring Boot's static folder
COPY --from=frontend /app/Techlambdas-fontEnd/build ./src/main/resources/static
RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jdk
WORKDIR /app
COPY --from=backend /app/Techlambdas-backend/target/*.jar app.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "app.jar"]
