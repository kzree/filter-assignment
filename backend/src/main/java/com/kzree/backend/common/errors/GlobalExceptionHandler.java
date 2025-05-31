package com.kzree.backend.common.errors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class GlobalExceptionHandler {
    private final String RESOURCE_NOT_FOUND = "Resource not found";
    private final String BAD_REQUEST = "Bad request";
    private final String INTERNAL_SERVER_ERROR = "Internal server error";

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleResourceNotFoundException(ResourceNotFoundException ex, WebRequest req) {
        ErrorResponse errorResponse = new ErrorResponse(RESOURCE_NOT_FOUND, ex.getMessage(),
                HttpStatus.NOT_FOUND.value(),
                req.getDescription(false).replace("uri=", ""));

        return ResponseEntity.status(404).body(errorResponse);
    }

    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<ErrorResponse> handleBadRequestException(BadRequestException ex, WebRequest req) {
        ErrorResponse errorResponse = new ErrorResponse(BAD_REQUEST, ex.getMessage(),
                HttpStatus.BAD_REQUEST.value(),
                req.getDescription(false).replace("uri=", ""));

        return ResponseEntity.status(400).body(errorResponse);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidationException(
            MethodArgumentNotValidException ex, WebRequest request) {

        StringBuilder message = new StringBuilder();
        ex.getBindingResult().getFieldErrors().forEach(
                error -> message.append(error.getField()).append(": ").append(error.getDefaultMessage()).append("; "));

        ErrorResponse errorResponse = new ErrorResponse(
                BAD_REQUEST,
                message.toString(),
                HttpStatus.BAD_REQUEST.value(),
                request.getDescription(false).replace("uri=", ""));

        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGenericException(
            Exception ex, WebRequest request) {

        ErrorResponse errorResponse = new ErrorResponse(
                INTERNAL_SERVER_ERROR,
                ex.getMessage(),
                HttpStatus.INTERNAL_SERVER_ERROR.value(),
                request.getDescription(false).replace("uri=", ""));

        return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
