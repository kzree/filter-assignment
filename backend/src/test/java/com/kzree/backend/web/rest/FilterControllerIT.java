package com.kzree.backend.web.rest;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

import com.kzree.backend.IntegrationTest;
import com.kzree.backend.filter.domain.Filter;
import com.kzree.backend.filter.repository.FilterRepository;

@IntegrationTest
@AutoConfigureMockMvc
public class FilterControllerIT {
    static final String ENTITY_API_URL = "/api/filters";

    @Autowired
    private FilterRepository filterRepository;

    @Autowired
    private MockMvc mockMvc;

    @Test
    @Transactional
    public void getAllFilters() throws Exception {
        var testName = "Jesus filter";

        var filter = new Filter();
        filter.setName(testName);
        filterRepository.saveAndFlush(filter);

        mockMvc
                .perform(get(ENTITY_API_URL))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.[0].name").value(testName))
                .andExpect(jsonPath("$.length()").value(1));
    }
}
