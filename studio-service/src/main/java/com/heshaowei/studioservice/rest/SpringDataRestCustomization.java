package com.heshaowei.studioservice.rest;

import com.heshaowei.studioservice.entity.User;
import com.heshaowei.studioservice.repository.UserRepository;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.stereotype.Component;

@Component
public class SpringDataRestCustomization implements RepositoryRestConfigurer {

  @Override
  public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
    config.withEntityLookup()
      .forRepository(UserRepository.class)
      .withIdMapping(User::getUsername)
      .withLookup(UserRepository::findByUsername);
  }
}