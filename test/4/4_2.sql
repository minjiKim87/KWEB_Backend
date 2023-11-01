CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    nickname VARCHAR(100) NOT NULL,
    profile_picture_link VARCHAR(255),
    profile_status_message VARCHAR(255),
    withdrawal_status BIGINT DEFAULT 0,
    registration_date DATE NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE channels (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_by_user BIGINT,
    channel_link VARCHAR(255) NOT NULL,
    max_capacity BIGINT,
    withdrawal_status BIGINT DEFAULT 0,
    creation_date DATE NOT NULL,
    FOREIGN KEY (created_by_user) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE chats (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    message_content TEXT NOT NULL,
    author_id BIGINT,
    channel_id BIGINT,
    creation_date DATE NOT NULL,
    FOREIGN KEY (author_id) REFERENCES users(id),
    FOREIGN KEY (channel_id) REFERENCES channels(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE follows (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    follower_id BIGINT,
    followee_id BIGINT,
    follow_date DATE NOT NULL,
    FOREIGN KEY (follower_id) REFERENCES users(id),
    FOREIGN KEY (followee_id) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE blocks (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    blocker_id BIGINT,
    blocked_id BIGINT,
    block_date DATE NOT NULL,
    FOREIGN KEY (blocker_id) REFERENCES users(id),
    FOREIGN KEY (blocked_id) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
