package com.minePing.BackEnd.entity;

import com.minePing.BackEnd.enums.CommonEnums;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Entity
public class Mental {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "mental_no")
    private Long mentalNo;

    //연관관계 해줘야함
    @Column(name = "user_no")
    private Long userNo;

    @Column(name = "score", nullable = false)
    private Integer score;

    @Column(name = "status", nullable = false, length = 6)
    private String status;

    @Column(name = "content", nullable = false)
    private String content;

    @Column(name = "separation")
    @Enumerated(EnumType.STRING)
    private CommonEnums.Separation separation;

    @Column(name="create_date")
    private LocalDate createDate;
}
