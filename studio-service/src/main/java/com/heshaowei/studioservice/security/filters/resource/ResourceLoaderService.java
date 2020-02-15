package com.heshaowei.studioservice.security.filters.resource;

import org.springframework.security.access.ConfigAttribute;

import java.util.List;
import java.util.Map;

public interface ResourceLoaderService {
    Map<String, List<? extends ConfigAttribute>> loadResources();
}
