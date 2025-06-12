package com.minePing.BackEnd.entity;

import com.minePing.BackEnd.enums.CommonEnums;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Entity
public class WorcationApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name= "application_no")
    private Long applicationNo;

    //연관관계해줘야함
    @Column(name="user_no")
    private Long userNo;

    //연관관계해줘야함
    @Column(name="worcation_no")
    private Long worcationNo;

    @Enumerated(EnumType.STRING)
    @Column(name="approve")
    private CommonEnums.Approve approve;

    @Column(name = "start_date")
    private LocalDate startDate;

    @Column(name = "end_date")
    private LocalDate endDate;

    @Column(name = "create_at")
    private Timestamp createAt;

    @Column(name = "update_at")
    private Timestamp updateAt;
}
