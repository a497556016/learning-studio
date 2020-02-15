package com.heshaowei.studioservice.repository;

import com.heshaowei.studioservice.entity.Document;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocumentRepository extends MongoRepository<Document, ObjectId> {
}
