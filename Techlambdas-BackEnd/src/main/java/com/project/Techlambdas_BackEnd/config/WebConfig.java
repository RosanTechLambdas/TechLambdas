package com.project.Techlambdas_BackEnd.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

//     @Override
//     public void addViewControllers(ViewControllerRegistry registry) {
//         registry.addViewController("/{spring:[a-zA-Z0-9-_]+}")
//                 .setViewName("forward:/index.html");
//         registry.addViewController("/**/{spring:[a-zA-Z0-9-_]+}")
//                 .setViewName("forward:/index.html");
//         registry.addViewController("/{spring:[a-zA-Z0-9-_]+}/**/{spring:[a-zA-Z0-9-_]+}")
//                 .setViewName("forward:/index.html");
//     }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("*");
    }
}
