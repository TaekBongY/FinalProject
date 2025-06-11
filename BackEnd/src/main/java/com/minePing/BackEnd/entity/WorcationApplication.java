package com.minePing.BackEnd.entity;

import com.minePing.BackEnd.enums.CommonEnums;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Entity
public class WorcationApplication {

    private Long applicationNo;

    private Long userNo;

    private Long worcationNo;

    @Enumerated(EnumType.STRING)
    private CommonEnums.Approve approve;

    private LocalDate startDate;

    private LocalDate endDate;

    private LocalDateTime createAt;

    private LocalDateTime updateAt;
}
