package com.kzree.backend.filter.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.kzree.backend.filter.dto.FilterDTO;
import com.kzree.backend.filter.mapper.FilterMapper;
import com.kzree.backend.filter.repository.FilterRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FilterService {
    private final FilterRepository filterRepository;
    private final FilterMapper filterMapper;

    @Transactional(readOnly = true)
    public List<FilterDTO> getFilters() {
        var filters = filterRepository.findAll();
        return filterMapper.toDto(filters);
    }

    @Transactional(readOnly = true)
    public Optional<FilterDTO> getFilterById(UUID id) {
        var filter = filterRepository.findById(id);
        return filter.map(filterMapper::toDto);
    }

    @Transactional
    public FilterDTO createFilter(FilterDTO fitler) {
        var filter = filterMapper.toEntity(fitler);
        return filterMapper.toDto(filterRepository.save(filter));
    }

    @Transactional
    public void updateFilter() {
    }

    @Transactional
    public void deleteFilter(UUID id) {
        filterRepository.deleteById(id);
    }
}
