package com.kzree.backend.criteria.dto;

import java.util.UUID;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CriteriaDTO {

    private UUID id;

    private String field;

    private String operator;

    private String value;
}
