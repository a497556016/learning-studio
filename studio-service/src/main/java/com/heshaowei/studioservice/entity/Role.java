package com.heshaowei.studioservice.entity;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.access.ConfigAttribute;

@Data
@Document
public class Role implements ConfigAttribute {
    @Id
    private ObjectId id;
    private String name;

    @Override
    public String getAttribute() {
        return name;
    }
}
