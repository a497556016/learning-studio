package com.heshaowei.studioservice.service.impl;

import com.google.common.collect.Lists;
import com.heshaowei.studioservice.bean.UserAccountInfo;
import com.heshaowei.studioservice.bean.UserAuthority;
import com.heshaowei.studioservice.entity.User;
import com.heshaowei.studioservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User probe = new User();
        probe.setUsername(username);
        User user = userRepository.findOne(Example.of(probe)).orElse(null);
        if(null == user) {
            throw new UsernameNotFoundException(String.format("用户名%s不存在！", username));
        }
        UserAccountInfo userAccountInfo = new UserAccountInfo();
        userAccountInfo.setUsername(user.getUsername());
        userAccountInfo.setPassword(user.getPassword());

        UserAuthority authority = new UserAuthority();
        authority.setAuthority("Admin");
        userAccountInfo.setAuthorities(Lists.newArrayList(authority));
        return userAccountInfo;
    }
}
