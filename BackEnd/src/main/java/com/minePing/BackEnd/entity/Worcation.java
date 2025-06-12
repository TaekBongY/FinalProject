package com.minePing.BackEnd.entity;

import com.minePing.BackEnd.enums.CommonEnums;
import com.minePing.BackEnd.enums.WorcationEnums;
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
public class Worcation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "worcation_no")
    private Long worcationNo;

    //연관관계해줘야함
    @Column(name="ref_writer")
    private Long refWriter;
    //연관관계해줘야함
    @Column(name = "ref_area_id")
    private Long refAreaId;

    @Column(name = "worcation_name",nullable = false,length = 50)
    private String worcationName;

    @Column(name = "worcation_category")
    @Enumerated(EnumType.STRING)
    private WorcationEnums.Category worcationCategory;

    @Column(name = "main_chang_photo",nullable = false,length = 100)
    private String mainChangePhoto;

    @Column(name = "worcation_hema",nullable = false,length = 20)
    private String worcationThema;

    @Column(name = "max_people",nullable = false)
    private Integer maxPeople;

    @Column(name = "partner_price",nullable = false)
    private String partnerPrice;

    @Column(name = "non_partner_price",nullable = false)
    private Integer nonPartnerPrice;

    @Column(name = "address",nullable = false,length = 100)
    private String address;

    @Column(name = "update_at")
    private Timestamp updateAt;

    @Column(name = "create_at")
    private LocalDate createAt;

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private CommonEnums.Status status;

}
