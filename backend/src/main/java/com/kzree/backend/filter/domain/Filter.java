package com.kzree.backend.filter.domain;

import com.kzree.backend.common.domain.BaseEntity;
import com.kzree.backend.criteria.domain.Criteria;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "filter")
public class Filter extends BaseEntity {
    @Id
    @Column(nullable = false)
    private UUID id;

    @Column(nullable = false)
    private String name;

    @OneToMany(mappedBy = "filter", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Criteria> criteria;
}
