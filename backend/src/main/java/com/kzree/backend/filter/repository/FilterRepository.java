package com.kzree.backend.filter.repository;

import com.kzree.backend.filter.domain.Filter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface FilterRepository extends JpaRepository<Filter, UUID> {

    @Query("""
                select case when count(f) > 0 then true else false end
                from Filter f
            """)
    boolean existsData();
}
