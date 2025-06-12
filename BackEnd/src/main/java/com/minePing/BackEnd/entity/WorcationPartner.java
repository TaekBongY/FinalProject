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
    @JoinColumn(name = "company_no", nullable = false)
    private Company company;

    @Column(name = "company_count", nullable = false)
    private Integer companyCount;

    @Column(name = "start_time", nullable = false)
    private LocalDate startTime;

    @Column(name = "end_time", nullable = false)
    private LocalDate endTime;

    @Column(name = "approve", nullable = false)
    private CommonEnums.Approve approve;

    @Column(name = "create_at", nullable = false)
    private LocalDateTime createAt;

    @Column(name = "update_at", nullable = false)
    private LocalDateTime updateAt;

    @PrePersist
    protected void onCreate() {
        this.createAt = LocalDateTime.now();
        this.updateAt = LocalDateTime.now();
        if(this.approve == null) {
            approve = CommonEnums.Approve.N;
        }
    }

    @PreUpdate
    protected void onUpdate() {
        this.updateAt = LocalDateTime.now();
    }

}
