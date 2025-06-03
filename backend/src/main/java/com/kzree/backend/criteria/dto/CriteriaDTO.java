package com.kzree.backend.criteria.dto;

import com.kzree.backend.common.dto.EntityDTO;
import com.kzree.backend.criteria.enumeration.CriteriaField;
import com.kzree.backend.criteria.enumeration.CriteriaOperator;
import com.kzree.backend.criteria.validators.ValidCriteria;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ValidCriteria
public class CriteriaDTO extends EntityDTO {

    private CriteriaField field;

    private CriteriaOperator operator;

    private String value;
}
