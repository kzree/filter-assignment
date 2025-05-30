package com.kzree.backend.criteria.enumeration;

import java.util.List;

public enum CriteriaOperator {
    MORE_THAN(List.of(CriteriaField.AMOUNT)),
    LESS_THAN(List.of(CriteriaField.AMOUNT)),
    EQUALS(List.of(CriteriaField.AMOUNT, CriteriaField.TITLE, CriteriaField.DATE)),
    STARTS_WITH(List.of(CriteriaField.TITLE)),
    ENDS_WITH(List.of(CriteriaField.TITLE)),
    FROM(List.of(CriteriaField.DATE)),
    TO(List.of(CriteriaField.DATE));

    private final List<CriteriaField> supportedFields;

    CriteriaOperator(List<CriteriaField> supportedFields) {
        this.supportedFields = supportedFields;
    }

    public boolean supports(CriteriaField field) {
        return supportedFields.contains(field);
    }
}
