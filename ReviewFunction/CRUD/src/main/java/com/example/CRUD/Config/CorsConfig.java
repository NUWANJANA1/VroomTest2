package com.example.CRUD.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        // Create an instance of CorsConfiguration
        CorsConfiguration config = new CorsConfiguration();

        // Allow credentials (cookies, authentication)
        config.setAllowCredentials(true);

        // Allow all origins (you might want to limit this to your frontend URL in production)
        config.addAllowedOrigin("http://localhost:3000");  // Or specify allowed origins like "http://localhost:3000" for frontend

        // Allow all headers in the request
        config.addAllowedHeader("*");

        // Allow all HTTP methods (GET, POST, PUT, DELETE, etc.)
        config.addAllowedMethod("*");

        // Register the configuration to apply to all endpoints
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);

        // Return a new CorsFilter that applies the above configuration
        return new CorsFilter(source);
    }
}
