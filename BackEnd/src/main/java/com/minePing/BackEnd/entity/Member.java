package com.minePing.BackEnd.entity;

import com.minePing.BackEnd.enums.CommonEnums;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Entity
public class Member {
    @Id // PK
    @GeneratedValue(strategy = GenerationType.IDENTITY) //pk값 자동생성(AUTO_INCREMENT방식)
    @Column(name = "user_no") //DB컬럼명 지정
    private Long userNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="company_no")
    private Company company;

    @Column(name="user_id", nullable = false, length = 50)
    private String userId;

    @Column(name="user_pwd", nullable = false)
    private String userPwd;

    @Column(nullable = false, length = 50)
    private String name;

    @Column(nullable = false, length = 100)
    private String email;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private CommonEnums.Gender gender;

    @Column(nullable = false)
    private LocalDate birthday;

    @Column(nullable = false, length = 40)
    private String address;

    @Column(nullable = false, length = 13)
    private String phone;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private CommonEnums.Role role;

    @Column(length = 50)
    private String department;

    @Column(length = 30)
    private String position;

    @Column(nullable = false)
    private LocalDate createDate;

    @Column(nullable = false)
    private Timestamp updateAt;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CommonEnums.Status status;
}
