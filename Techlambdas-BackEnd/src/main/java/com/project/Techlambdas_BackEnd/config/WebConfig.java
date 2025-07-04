package com.project.Techlambdas_BackEnd.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;

@Configuration
public class WebConfig implements WebMvcConfigurer {

  @Override
  public void addViewControllers(ViewControllerRegistry registry) {
    registry.addViewController("/{spring:\\w+}")
            .setViewName("forward:/index.html");
    registry.addViewController("/**/{spring:\\w+}")
            .setViewName("forward:/index.html");
    registry.addViewController("/{spring:\\w+}/**{spring:?!(\\.js|\\.css)$}")
            .setViewName("forward:/index.html");
  }

  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**")
            .allowedOrigins("*")
            .allowedMethods("*");
  }
}
