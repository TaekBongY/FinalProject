package com.minePing.BackEnd.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Entity
public class WorcationFeatures {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "worcation_no")
    private Long worcationNo;


    @Column(name = "location_type")
    private String locationType;

    @Column(name = "dominant_color")
    private String dominantColor;

    @Column(name = "space_mood")
    private String spaceMood;

    @Column(name = "besr_for")
    private String besrFor;

    @Column(name = "activities")
    private String activities;

    @Column(name = "accommodation_type")
    private String accommodationType;
}
