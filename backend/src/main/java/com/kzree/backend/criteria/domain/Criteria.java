package com.kzree.backend.criteria.domain;

import com.kzree.backend.common.domain.BaseEntity;
import com.kzree.backend.criteria.enumeration.CriteriaField;
import com.kzree.backend.criteria.enumeration.CriteriaOperator;
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
    @GeneratedValue
    @Column(nullable = false)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "filter_id", nullable = false)
    private Filter filter;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CriteriaField field;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CriteriaOperator operator;

    @Column(nullable = false)
    private String value;
}
