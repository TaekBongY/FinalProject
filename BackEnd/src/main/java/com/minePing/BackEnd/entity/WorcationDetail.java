package com.minePing.BackEnd.entity;

import jakarta.persistence.Entity;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Entity
public class WorcationDetail {

    private Long worcationNo;

    private String licensee;

    private String worcationtel;

    private Integer chargeAmount;

    private String content;

    private String navigate;

    private String availableTime;

    private String refundPolicy;

    private LocalDate openDate;
}
