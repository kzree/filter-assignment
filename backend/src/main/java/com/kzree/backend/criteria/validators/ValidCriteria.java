package com.kzree.backend.criteria.validators;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

@Target({ ElementType.TYPE })
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = CriteriaValidator.class)
@Documented
public @interface ValidCriteria {
    String message() default "Operator {operator} is not valid for field {field}";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
