CREATE TABLE 'STUDENTS'(
    name VARCHAR(100),
    student_id VARCHAR(20),
    admission_year BIGINT,
    major VARCHAR(100),
    phone_number VARCHAR(20),
    address VARCHAR(255).
    total_credits INT,
    average_grade FLOAT,
    is_enrolled BOOLEAN
)

CREATE TABLE STUDENTS (
    name VARCHAR(100),
    student_id VARCHAR(20),  
    admission_year BIGINT,
    major VARCHAR(100),
    individual_number INT,  
    phone_number VARCHAR(20),
    address VARCHAR(255),
    total_credits INT,
    average_grade FLOAT,
    is_enrolled BOOLEAN
);

CREATE TABLE STUDENTS (
    name VARCHAR(100) NOT NULL,
    student_id VARCHAR(20) NOT NULL,  
    admission_year BIGINT NOT NULL,
    major VARCHAR(100) NOT NULL,
    individual_number INT NOT NULL,
    phone_number VARCHAR(20),
    address VARCHAR(255),
    total_credits INT DEFAULT 0,
    average_grade FLOAT DEFAULT 0.0,
    is_enrolled BOOLEAN DEFAULT TRUE
);
