package com.kzree.backend.filter.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.kzree.backend.filter.dto.FilterDTO;
import com.kzree.backend.filter.mapper.FilterMapper;
import com.kzree.backend.filter.repository.FilterRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FilterService {
    private final FilterRepository filterRepository;
    private final FilterMapper filterMapper;

    public List<FilterDTO> getFilters() {
        var filters = filterRepository.findAll();
        return filterMapper.toDto(filters);
    }

    public Optional<FilterDTO> getFilterById(UUID id) {
        var filter = filterRepository.findById(id);
        return filter.map(filterMapper::toDto);
    }

    public void createFilter(FilterDTO fitler) {
        var filter = filterMapper.toEntity(fitler);
        filterRepository.save(filter);
    }

    public void updateFilter() {
    }

    public void deleteFilter(UUID id) {
        filterRepository.deleteById(id);
    }
}
