package com.heshaowei.studioservice.service.impl;

import com.google.common.collect.Maps;
import com.heshaowei.studioservice.entity.Role;
import com.heshaowei.studioservice.repository.RoleRepository;
import com.heshaowei.studioservice.security.filters.resource.ResourceLoaderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.ConfigAttribute;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ResourceLoaderServiceImpl implements ResourceLoaderService {
    @Autowired
    private RoleRepository roleRepository;
    @Override
    public Map<String, List<? extends ConfigAttribute>> loadResources() {
        Map<String, List<? extends ConfigAttribute>> result = Maps.newHashMap();
        List<Role> roles = roleRepository.findAll();
        result.put("/api", roles);
        return result;
    }
}
