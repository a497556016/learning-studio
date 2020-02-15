package com.heshaowei.studioservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement
public class StudioServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(StudioServiceApplication.class, args);
    }

}
