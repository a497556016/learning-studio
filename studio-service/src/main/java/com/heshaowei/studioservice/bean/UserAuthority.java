package com.heshaowei.studioservice.bean;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;

@Data
public class UserAuthority implements GrantedAuthority {
    private String authority;

    @Override
    public String getAuthority() {
        return authority;
    }
}
