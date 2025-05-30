package com.kzree.backend.filter.repository;

import com.kzree.backend.filter.domain.Filter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface FilterRepository extends JpaRepository<Filter, UUID> {
}
