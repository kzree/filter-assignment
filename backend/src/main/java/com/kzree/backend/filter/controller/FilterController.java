package com.kzree.backend.filter.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kzree.backend.filter.dto.FilterDTO;
import com.kzree.backend.filter.service.FilterService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/filters")
public class FilterController {
    private final FilterService filterService;

    @GetMapping
    public ResponseEntity<List<FilterDTO>> getFilters() {
        log.info("REST request to fetch all filters");
        var filters = List.<FilterDTO>of();
        return ResponseEntity.ok(filters);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FilterDTO> getFilterById(@PathVariable UUID id) {
        log.info("REST request to fetch filter with id: {}", id);
        var filter = new FilterDTO();
        return ResponseEntity.ok(filter);
    }

    @PostMapping
    public ResponseEntity<Void> createFilter() {
        log.info("REST request to create a new filter");
        filterService.createFilter();
        return ResponseEntity.noContent().build();
    }

    @PutMapping
    public ResponseEntity<Void> updateFilter() {
        log.info("REST request to update an existing filter");
        return ResponseEntity.noContent().build();
    }
}
