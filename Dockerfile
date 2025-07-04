# Stage 1: React build
FROM node:20 AS frontend
WORKDIR /app
COPY TechLambdas-fontEnd/ ./TechLambdas-fontEnd
WORKDIR /app/TechLambdas-fontEnd
RUN npm install && npm run build

# Stage 2: Spring Boot build
FROM maven:3.9-eclipse-temurin-17 AS backend
WORKDIR /app
COPY Techlambdas-BackEnd/ ./Techlambdas-BackEnd
WORKDIR /app/Techlambdas-BackEnd

# Copy React build into Spring Boot's static folder
COPY --from=frontend /app/TechLambdas-fontEnd/dist ./src/main/resources/static

RUN mvn clean package -DskipTests

# Stage 3: Final run
FROM eclipse-temurin:17-jdk
WORKDIR /app
COPY --from=backend /app/Techlambdas-BackEnd/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
