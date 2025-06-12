package com.minePing.BackEnd.entity;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Entity
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_no")
    private Long reviewNo;

    //연관관계해줘야함
    @Column(name = "application_no")
    private Long applicationNo;

    //연관관계 해줘야함
    @Column(name = "writer_id",nullable = false,length = 30)
    private String writerId;

    @Column(name="reviewer_content", nullable = false)
    private String reviewerContent;

    @Column(name="create_at",nullable = false)
    private Timestamp createAt;

    @Column(name="update_at",nullable = false)
    private Timestamp updateAt;
}
