package com.kzree.backend.criteria.domain;

import com.kzree.backend.common.domain.BaseEntity;
import com.kzree.backend.filter.domain.Filter;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "criteria")
public class Criteria extends BaseEntity {

    @Id
    @Column(nullable = false)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "filter_id", nullable = false)
    private Filter filter;

    @Column(nullable = false)
    private String field;

    @Column(nullable = false)
    private String operator;

    @Column(nullable = false)
    private String value;
}
