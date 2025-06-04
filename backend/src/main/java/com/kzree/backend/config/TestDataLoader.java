package com.kzree.backend.config;

import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.Profile;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import com.kzree.backend.filter.service.FilterService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@Profile("!testcontainers")
@RequiredArgsConstructor
public class TestDataLoader {
    private final FilterService filterService;

    @EventListener(ApplicationReadyEvent.class)
    public void loadTestData() {
        if (filterService.filtersExist()) {
            log.info("Test data already exists, skipping");
            return;
        }

        log.info("Loading test data");
        filterService.createTestFilterData();
    }
}
