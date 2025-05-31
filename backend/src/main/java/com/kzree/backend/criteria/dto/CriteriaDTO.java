package com.kzree.backend.criteria.dto;

import java.util.UUID;

import com.kzree.backend.common.dto.EntityDTO;
import com.kzree.backend.criteria.enumeration.CriteriaField;
import com.kzree.backend.criteria.enumeration.CriteriaOperator;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CriteriaDTO extends EntityDTO {

    private CriteriaField field;

    private CriteriaOperator operator;

    private String value;
}
