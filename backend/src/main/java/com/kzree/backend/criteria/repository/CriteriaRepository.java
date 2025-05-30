package com.kzree.backend.criteria.repository;

import com.kzree.backend.criteria.domain.Criteria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CriteriaRepository extends JpaRepository<Criteria, UUID> {
}
