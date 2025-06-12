package com.minePing.BackEnd.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Entity
public class WorcationAmenity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "worc_amenity_no")
    private Long worcAmenityNo;

    //연관관계 해줘야함
    @Column(name = "worcation_no")
    private Long worcationNo;

    //연관관계 해줘야함
    @Column(name = "amenities_no")
    private Long amenitiesNo;
}
