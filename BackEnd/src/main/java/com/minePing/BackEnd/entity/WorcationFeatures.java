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


    @Column(name = "location_type", nullable = false, length = 10)
    private String locationType;

    @Column(name = "dominant_color", nullable = false, length = 20)
    private String dominantColor;

    @Column(name = "space_mood", nullable = false, length = 15)
    private String spaceMood;

    @Column(name = "besr_for", nullable = false, length = 15)
    private String besrFor;

    @Column(name = "activities", nullable = false)
    private String activities;

    @Column(name = "accommodation_type", nullable = false, length = 20)
    private String accommodationType;
}
