package com.minePing.BackEnd.entity;

import com.minePing.BackEnd.enums.CommonEnums;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Entity
public class MemberPreference {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "preference_no")
    private Long preferenceNo;

    //연관관계 해줘야함
    @Column(name = "user_no")
    private Long userNo;

    @Enumerated(EnumType.STRING)
    @Column(name = "mbti")
    private CommonEnums.Mbti mbti;

    @Column(name="preferenced_color", nullable = false, length = 13)
    private String preferencedColor;

    @Column(name="preferenced_location", nullable = false, length = 8)
    private String preferencedLocation;

    @Column(name = "space_mood", nullable = false, length = 13)
    private String spaceMood;

    @Column(name="important_factor", nullable = false, length = 13)
    private String importantFactor;

    @Column(name="leisure_activity", nullable = false, length = 24)
    private String leisureActivity;

    @Column(name="accommodation_type", nullable = false, length = 17)
    private String accommodationType;

    @Column(name = "create_date", nullable = false)
    private LocalDate createDate;

    @Column(name ="content", nullable = false)
    private String content;
}
