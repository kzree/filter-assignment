package com.kzree.backend.web.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Set;
import java.util.UUID;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

import com.kzree.backend.IntegrationTest;
import com.kzree.backend.common.errors.ErrorCodes;
import com.kzree.backend.criteria.domain.Criteria;
import com.kzree.backend.criteria.dto.CriteriaDTO;
import com.kzree.backend.criteria.enumeration.CriteriaField;
import com.kzree.backend.criteria.enumeration.CriteriaOperator;
import com.kzree.backend.criteria.repository.CriteriaRepository;
import com.kzree.backend.filter.domain.Filter;
import com.kzree.backend.filter.dto.FilterDTO;
import com.kzree.backend.filter.repository.FilterRepository;
import com.kzree.backend.util.Serialization;

import jakarta.persistence.EntityManager;

@IntegrationTest
@AutoConfigureMockMvc
public class FilterControllerIT {
    static final String ENTITY_API_URL = "/api/filters";

    @Autowired
    private FilterRepository filterRepository;

    @Autowired
    private CriteriaRepository criteriaRepository;

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    EntityManager em;

    @Test
    @Transactional
    public void getAllFilters() throws Exception {
        var testName = "Test Filter";

        var filter = new Filter();
        filter.setName(testName);
        filterRepository.saveAndFlush(filter);

        mockMvc
                .perform(get(ENTITY_API_URL))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.[0].id").isNotEmpty())
                .andExpect(jsonPath("$.[0].createdAt").isNotEmpty())
                .andExpect(jsonPath("$.[0].modifiedAt").isNotEmpty())
                .andExpect(jsonPath("$.[0].criterias").isEmpty())
                .andExpect(jsonPath("$.[0].name").value(testName))
                .andExpect(jsonPath("$.length()").value(1));
    }

    @Test
    @Transactional
    public void getFilter() throws Exception {
        var testName = "Test Filter";

        var filter = new Filter();
        filter.setName(testName);
        filter = filterRepository.saveAndFlush(filter);

        mockMvc
                .perform(get(ENTITY_API_URL + "/" + filter.getId()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(filter.getId().toString()))
                .andExpect(jsonPath("$.createdAt").isNotEmpty())
                .andExpect(jsonPath("$.modifiedAt").isNotEmpty())
                .andExpect(jsonPath("$.criterias").isEmpty())
                .andExpect(jsonPath("$.name").value(testName));
    }

    @Test
    @Transactional
    public void getNonExistingFilter() throws Exception {
        var nonExistingId = UUID.randomUUID();
        mockMvc
                .perform(get(ENTITY_API_URL + "/" + nonExistingId))
                .andExpect(jsonPath("$.code").value(ErrorCodes.RESOURCE_NOT_FOUND))
                .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void createNewFilterWithoutCriteria() throws Exception {
        var testName = "New Filter";

        mockMvc
                .perform(post(ENTITY_API_URL)
                        .contentType("application/json")
                        .content("{\"name\":\"" + testName + "\"}"))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.code").value(ErrorCodes.VALIDATION_ERROR));
    }

    @Test
    @Transactional
    public void createNewValidFilter() throws Exception {
        var testName = "Valid Filter";

        var criteriaDTO = new CriteriaDTO();
        criteriaDTO.setField(CriteriaField.TITLE);
        criteriaDTO.setOperator(CriteriaOperator.STARTS_WITH);
        criteriaDTO.setValue("Sto");

        var filterDTO = new FilterDTO();
        filterDTO.setName(testName);
        filterDTO.setCriterias(Set.of(criteriaDTO));

        mockMvc
                .perform(post(ENTITY_API_URL)
                        .contentType("application/json")
                        .content(Serialization.serializeJSONFromObject(filterDTO)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").isNotEmpty())
                .andExpect(jsonPath("$.createdAt").isNotEmpty())
                .andExpect(jsonPath("$.modifiedAt").isNotEmpty())
                .andExpect(jsonPath("$.name").value(testName))
                .andExpect(jsonPath("$.criterias.length()").value(1));
    }

    @Test
    @Transactional
    public void deleteFilter() throws Exception {
        var testName = "Filter to Delete";

        var criteria = new Criteria();
        criteria.setField(CriteriaField.TITLE);
        criteria.setOperator(CriteriaOperator.STARTS_WITH);
        criteria.setValue("Sto");

        var filter = new Filter();
        filter.setName(testName);
        filter = filterRepository.saveAndFlush(filter);

        criteria.setFilter(filter);
        criteria = criteriaRepository.saveAndFlush(criteria);

        em.clear();

        mockMvc
                .perform(delete(ENTITY_API_URL + "/" + filter.getId()))
                .andExpect(status().isNoContent());

        em.flush();
        em.clear();

        var filters = filterRepository.findAll();
        assertThat(filters).isEmpty();

        var criteriaList = criteriaRepository.findAll();
        assertThat(criteriaList).isEmpty();
    }
}
