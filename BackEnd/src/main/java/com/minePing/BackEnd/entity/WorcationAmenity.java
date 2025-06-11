package com.minePing.BackEnd.entity;

import jakarta.persistence.Entity;
import lombok.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Entity
public class WorcationAmenity {

    private Long worcAmenityNo;

    private Long worcationNo;

    private Long amenitiesNo;
}
