package com.minePing.BackEnd.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Entity
public class Photo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "photo_no")
    private Long photoNo;

    // 연관관계 해줘야함
    @Column(name = "worcation_no")
    private Long worcationNo;

    //null을 어떻게 할지 정해야함
    @Column(name = "chainge_name", length = 100)
    private String chaingeName;
}
