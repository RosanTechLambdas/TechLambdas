# Stage 1: Build React app
FROM node:18 as frontend-builder
WORKDIR /app
COPY TechLambdas-fontEnd/ .
RUN npm install
RUN npm run build

# Stage 2: Build Spring Boot app
FROM eclipse-temurin:17-jdk as backend-builder
WORKDIR /app
COPY Techlambdas-BackEnd/ .
COPY --from=frontend-builder /app/dist ./src/main/resources/static
RUN ./mvnw clean package -DskipTests

# Stage 3: Run app
FROM eclipse-temurin:17-jdk
WORKDIR /app
COPY --from=backend-builder /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
