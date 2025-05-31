package com.kzree.backend.filter.mapper;

import org.mapstruct.Mapper;

import com.kzree.backend.common.mapper.EntityMapper;
import com.kzree.backend.filter.domain.Filter;
import com.kzree.backend.filter.dto.FilterDTO;

@Mapper(componentModel = "spring")
public interface FilterMapper extends EntityMapper<FilterDTO, Filter> {
}
