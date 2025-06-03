package com.kzree.backend.filter.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import java.util.HashSet;
import java.util.Set;

import com.kzree.backend.common.dto.EntityDTO;
import com.kzree.backend.criteria.dto.CriteriaDTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FilterDTO extends EntityDTO {

    private String name;

    @NotEmpty
    @Valid
    private Set<CriteriaDTO> criterias = new HashSet<>();
}
