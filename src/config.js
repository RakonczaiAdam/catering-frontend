import env from 'react-dotenv';

export const url = Object.freeze ({
    DEV_API_URL : env.API_URL,
})
export const http_status = Object.freeze({
    PENDING : 'PENDING', 
    FULFILLED : 'FULFILLED',
    REJECTED : 'REJECTED',
})

export const validation_errors = Object.freeze({
    VALID : "VALID",
    PASSWORD_ERROR: "PASSWORD_ERROR",
    UNIQUE_FIELD_CONFLICT: "UNIQUE_FIELD_CONFLICT",
    EMPTY_FIELD: "EMPTY_FIELD",
    LOGIN_ERROR: "LOGIN_ERROR"
})

