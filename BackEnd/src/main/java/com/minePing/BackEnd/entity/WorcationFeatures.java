package com.minePing.BackEnd.entity;

import com.minePing.BackEnd.enums.WorcationEnums;
import jakarta.persistence.*;
import lombok.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Entity
@Table(name = "worcation_features")
public class WorcationFeatures {

    @Id
    @Column(name = "worcation_no")
    private Long worcationNo;

    @MapsId
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "worcation_no", nullable = false)
    private Worcation worcation;

    @Column(name = "location_type", nullable = false, length = 10)
    private WorcationEnums.LocationType locationType;

    @Column(name = "dominant_color", nullable = false, length = 20)
    private WorcationEnums.DominantColor dominantColor;

    @Column(name = "space_mood", nullable = false, length = 15)
    private WorcationEnums.SpaceMood spaceMood;

    @Column(name = "besr_for", nullable = false, length = 15)
    private WorcationEnums.BestFor besrFor;

    @Column(name = "activities", nullable = false)
    private WorcationEnums.Activities activities;

    @Column(name = "accommodation_type", nullable = false, length = 20)
    private WorcationEnums.AccommodationType accommodationType;
}
