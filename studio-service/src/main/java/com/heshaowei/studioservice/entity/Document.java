package com.heshaowei.studioservice.entity;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

import java.util.Date;

@org.springframework.data.mongodb.core.mapping.Document
@Data
public class Document {
    @Id
    private ObjectId id;
    private String img;
    private String title;
    private String content;
    private Date updateTime;
}
