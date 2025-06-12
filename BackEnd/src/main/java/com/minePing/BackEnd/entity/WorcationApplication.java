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
@Table(name = "worcation_application",
        indexes = {@Index(name = "idx_worcation_application", columnList = "worcation_no")})
public class WorcationApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "application_no")
    private Long applicationNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_no", nullable = false)
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="worcation_no", nullable = false)
    private Worcation worcation;

    @Enumerated(EnumType.STRING)
    @Column(name="approve")
    private CommonEnums.Approve approve;

    @Column(name = "start_date")
    private LocalDate startDate;

    @Column(name = "end_date")
    private LocalDate endDate;

    @Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP", name = "create_at")
    private Timestamp createAt;

    @Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP", name = "update_at")
    private Timestamp updateAt;

    @OneToOne(mappedBy = "worcationApplication", cascade = CascadeType.ALL, orphanRemoval = true)
    private Review review;

    @PrePersist
    protected void onCreate() {
        this.createAt = Timestamp.valueOf(LocalDateTime.now());
        this.updateAt = Timestamp.valueOf(LocalDateTime.now());
    }

    @PreUpdate
    protected void onUpdate() {
        this.updateAt = Timestamp.valueOf(LocalDateTime.now());
    }
}
