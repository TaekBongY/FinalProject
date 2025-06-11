package com.minePing.BackEnd.entity;

import com.minePing.BackEnd.enums.CommonEnums;
import com.minePing.BackEnd.enums.WorcationEnums;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Entity
public class Worcation {

    private Long worcationNo;

    private Long refWriter;

    private Long refAreaId;

    private String worcationName;

    private WorcationEnums.Category worcationCategory;

    private String mainChaingePhoto;

    private String worcationThema;

    private Integer maxPeople;

    private String partnerPrice;

    private Integer nonPartnerPrice;

    private String address;

    private LocalDateTime updateAt;

    private LocalDate createAt;

    private CommonEnums.Status status;



}
