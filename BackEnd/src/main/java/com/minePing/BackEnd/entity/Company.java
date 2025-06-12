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
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "company_no")
    private Long companyNo;

    @Column(name = "company_name", nullable = false, length = 150)
    private String companyName;

    @Column(name = "create_date", nullable = false)
    private LocalDate createDate;

    @Column(name="address",nullable = false)
    private String address;

    @Column(name="email",nullable = false, length = 100)
    private String email;

    @Column(name="company_tel",nullable = false, length = 13)
    private String companyTel;

    @Column(name="status",nullable = false)
    @Enumerated(EnumType.STRING)
    private CommonEnums.Status status;
}
