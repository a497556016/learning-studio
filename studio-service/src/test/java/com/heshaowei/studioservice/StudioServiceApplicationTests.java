package com.heshaowei.studioservice;

import com.heshaowei.studioservice.entity.User;
import com.heshaowei.studioservice.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;

@SpringBootTest
class StudioServiceApplicationTests {
    @Autowired
    private UserRepository userRepository;

    @Test
    void contextLoads() {
        User user = new User();
        user.setUsername("heshaowei");
        String password = PasswordEncoderFactories.createDelegatingPasswordEncoder().encode("123456");
        user.setPassword(password);
        userRepository.save(user);
    }

    public static void main(String[] args) {
        String password = PasswordEncoderFactories.createDelegatingPasswordEncoder().encode("123456");
        System.out.println(password);
    }

}
