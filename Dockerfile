# Stage 1: Build React App
FROM node:18 AS frontend
WORKDIR /app/TechLambdas-fontEnd
COPY TechLambdas-fontEnd/package*.json ./
RUN npm install
COPY TechLambdas-fontEnd .
RUN npm run build

# Stage 2: Build Spring Boot App
FROM maven:3.9.3-eclipse-temurin-17 AS backend
WORKDIR /app/Techlambdas-BackEnd
COPY Techlambdas-BackEnd/pom.xml ./
RUN mvn dependency:go-offline
COPY Techlambdas-BackEnd .
COPY --from=frontend /app/TechLambdas-fontEnd/dist/ ./src/main/resources/static/
RUN mvn clean package -DskipTests

# Stage 3: Run
FROM eclipse-temurin:17-jdk
WORKDIR /app
COPY --from=backend /app/Techlambdas-BackEnd/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
