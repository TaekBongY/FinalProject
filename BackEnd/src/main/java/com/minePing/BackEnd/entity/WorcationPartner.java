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
@Table(name = "worcation_partner",
        indexes = {@Index(name = "idx_worcation_partner", columnList = "worcation_no")
                ,@Index(name = "idx_company_partner", columnList = "company_no")})
public class WorcationPartner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "partner_no")
    private Long partnerNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "worcation_no", nullable = false)
    private Worcation worcation;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ref_writer_no", nullable = false)
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_no")
    private Company company;

    @Column(name = "company_count")
    private Integer companyCount;

    @Column(name = "start_time")
    private LocalDate startTime;

    @Column(name = "end_time")
    private LocalDate endTime;

    @Column(name = "create_at")
    private Timestamp createAt;


    @PrePersist
    protected void onCreate() {
        this.createAt = Timestamp.valueOf(LocalDateTime.now());
    }

}
