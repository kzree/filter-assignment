package com.kzree.backend.criteria.validators;

import com.kzree.backend.criteria.dto.CriteriaDTO;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class CriteriaValidator implements ConstraintValidator<ValidCriteria, CriteriaDTO> {
    @Override
    public void initialize(ValidCriteria constraintAnnotation) {
        // No initialization needed
    }

    @Override
    public boolean isValid(CriteriaDTO criteriaDTO, ConstraintValidatorContext context) {
        if (criteriaDTO == null || criteriaDTO.getOperator() == null || criteriaDTO.getField() == null) {
            return true; // Let @NotNull handle null validation
        }

        boolean isValid = criteriaDTO.getOperator().supports(criteriaDTO.getField());

        if (!isValid) {
            context.disableDefaultConstraintViolation();
            context.buildConstraintViolationWithTemplate(
                    String.format("Operator %s is not supported for field %s",
                            criteriaDTO.getOperator(), criteriaDTO.getField()))
                    .addConstraintViolation();
        }

        return isValid;
    }
}
