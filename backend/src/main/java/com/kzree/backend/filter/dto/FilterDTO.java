package com.kzree.backend.filter.dto;

import jakarta.validation.constraints.NotEmpty;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

import com.kzree.backend.criteria.dto.CriteriaDTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FilterDTO {

    private UUID id;

    private String name;

    @NotEmpty
    private Set<CriteriaDTO> criterias = new HashSet<>();
}
