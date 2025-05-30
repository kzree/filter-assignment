package com.kzree.backend.config;

import org.springframework.boot.web.server.WebServerFactory;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.ServletContextInitializer;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Configuration
@EnableWebMvc
public class WebConfig implements ServletContextInitializer, WebServerFactoryCustomizer<WebServerFactory> {
    @Override
    public void customize(WebServerFactory factory) {
    }

    @Override
    public void onStartup(ServletContext servletContext) throws ServletException {
    }
}
