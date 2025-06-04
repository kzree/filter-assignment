package com.kzree.backend.filter.service;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.kzree.backend.criteria.dto.CriteriaDTO;
import com.kzree.backend.criteria.enumeration.CriteriaField;
import com.kzree.backend.criteria.enumeration.CriteriaOperator;
import com.kzree.backend.filter.dto.FilterDTO;
import com.kzree.backend.filter.mapper.FilterMapper;
import com.kzree.backend.filter.repository.FilterRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class FilterService {
    private final FilterRepository filterRepository;
    private final FilterMapper filterMapper;

    @Transactional(readOnly = true)
    public List<FilterDTO> getFilters() {
        log.info("Fetching all filters");
        var filters = filterRepository.findAll();
        return filterMapper.toDto(filters);
    }

    @Transactional(readOnly = true)
    public Optional<FilterDTO> getFilterById(UUID id) {
        log.info("Fetching filter with id: {}", id);
        var filter = filterRepository.findById(id);
        return filter.map(filterMapper::toDto);
    }

    @Transactional
    public FilterDTO createFilter(FilterDTO fitler) {
        log.info("Creating new filter");
        var filter = filterMapper.toEntity(fitler);

        for (var criteria : filter.getCriterias()) {
            criteria.setFilter(filter);
        }

        filter = filterRepository.save(filter);
        return filterMapper.toDto(filter);
    }

    @Transactional
    public void updateFilter() {
        throw new UnsupportedOperationException("Update filter operation is not implemented yet");
    }

    @Transactional
    public void deleteFilter(UUID id) {
        log.info("Deleting filter with id: {}", id);
        filterRepository.deleteById(id);
    }

    @Transactional(readOnly = true)
    public boolean filtersExist() {
        log.info("Checking if filters exist");
        return filterRepository.existsData();
    }

    // Would be nicer if it was in a separate service i think
    public void createTestFilterData() {
        log.info("Creating test filter data");
        var filter1 = new FilterDTO();
        filter1.setName("Test Filter 1");

        var criteria1 = new CriteriaDTO();
        criteria1.setField(CriteriaField.TITLE);
        criteria1.setOperator(CriteriaOperator.EQUALS);
        criteria1.setValue("testificate");

        filter1.setCriterias(Set.of(criteria1));
        this.createFilter(filter1);

        var filter2 = new FilterDTO();
        filter2.setName("Test Filter 2");

        var criteria2 = new CriteriaDTO();
        criteria2.setField(CriteriaField.TITLE);
        criteria2.setOperator(CriteriaOperator.STARTS_WITH);
        criteria2.setValue("t");

        var criteria3 = new CriteriaDTO();
        criteria3.setField(CriteriaField.AMOUNT);
        criteria3.setOperator(CriteriaOperator.MORE_THAN);
        criteria3.setValue("350");

        filter2.setCriterias(Set.of(criteria2, criteria3));
        this.createFilter(filter2);

        log.info("Test filter data created successfully");
    }
}
