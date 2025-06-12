package com.minePing.BackEnd.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Entity
public class WorcationDetail {

    //연관관계해워쟈함
    @Id
    @Column(name="worcation_no")
    private Long worcationNo;

    @Column(name="licensee", nullable=false, length=20)
    private String licensee;

    @Column(name="business_id", nullable=false, length=10)
    private String businessId;

    @Column(name="worcation_tel", nullable=false, length=13)
    private String worcationTel;

    @Column(name="charge_amount", nullable=false)
    private Integer chargeAmount;

    @Column(name="content", nullable=false)
    private String content;

    @Column(name="navigate", nullable=false)
    private String navigate;

    @Column(name="available_time", nullable=false, length=100)
    private String availableTime;

    @Column(name="refund_policy", nullable=false)
    private String refundPolicy;

    @Column(name="open_date", nullable=false)
    private LocalDate openDate;
}
