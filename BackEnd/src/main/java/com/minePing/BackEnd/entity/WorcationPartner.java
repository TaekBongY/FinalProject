package com.minePing.BackEnd.entity;

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
public class WorcationPartner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "partner_no")
    private Long partnerNo;


    @Column(name = "worcation_no")
    private Long worcationNo;

    @Column(name = "ref_writer_no")
    private Long refWriterNo;

    @Column(name = "company_no")
    private Long companyNo;

    @Column(name = "company_count")
    private Integer companyCount;

    @Column(name = "start_time")
    private LocalDate startTime;

    @Column(name = "end-time")
    private LocalDate endTime;

    @Column(name = "create_at")
    private Timestamp createAt;


}
