package com.minePing.BackEnd.entity;

import com.love.myping.enums.CommonEnums;
import jakarta.persistence.*;
import lombok.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Entity
public class Health {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "health_no")
    private Long healthNo;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_no", nullable = false)
    private Member member;

    @Column(nullable = false)
    private Integer weight;

    @Column(nullable = false)
    private Float height;

    @Column(nullable = false)
    private Float bmi;

    @Column(name="blood_pressure", nullable = false)
    private String bloodPressure;

    @Column(name="blood_sugar", nullable = false)
    private Float bloodSugar;

    @Column(name="health_condition", nullable = false)
    @Enumerated(EnumType.STRING)
    private CommonEnums.HealthCondition healthCondition;

    @Column(name="cholesterol_level", nullable = false)
    private Integer cholesterolLevel;

    @Column(name="smoking_status", nullable = false)
    @Enumerated(EnumType.STRING)
    private CommonEnums.SmokingStatus smokingStatus;

    @Column(name="physical_activity", nullable = false)
    @Enumerated(EnumType.STRING)
    private CommonEnums.PhysicalActivity physicalActivity;

    @Column(name = "sleep_hours", nullable = false)
    private Double sleepHours;

    @Column(name="diet_type", nullable = false)
    @Enumerated(EnumType.STRING)
    private CommonEnums.DietType dietType;
}
