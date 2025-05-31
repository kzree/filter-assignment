package com.kzree.backend.filter.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kzree.backend.common.errors.ResourceNotFoundException;
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
        var filters = filterService.getFilters();
        return ResponseEntity.ok(filters);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FilterDTO> getFilterById(@PathVariable UUID id) {
        log.info("REST request to fetch filter with id: {}", id);
        var filter = filterService.getFilterById(id);

        if (filter.isEmpty()) {
            throw new ResourceNotFoundException("Filter not found with id: " + id);
        }
        return ResponseEntity.ok(filter.get());
    }

    @PostMapping
    public ResponseEntity<FilterDTO> createFilter(@Validated @RequestBody FilterDTO filter) throws URISyntaxException {
        log.info("REST request to create a new filter");
        var result = filterService.createFilter(filter);
        return ResponseEntity.created(new URI("/api/filters/" + result.getId())).body(result);
    }

    @PutMapping
    public ResponseEntity<Void> updateFilter() {
        log.info("REST request to update an existing filter");
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFilter(@PathVariable UUID id) {
        log.info("REST request to delete filter with id: {}", id);
        filterService.deleteFilter(id);
        return ResponseEntity.noContent().build();
    }
}
