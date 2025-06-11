package com.minePing.BackEnd.enums;

import com.fasterxml.jackson.annotation.JsonValue;

public class CommonEnums {
    public enum Status {
        Y, N
    }

    public enum Gender {
        M, Y
    }

    public enum Role {
        master, manager, employee, worcation, admin
    }

    public enum Approve {
        Y, N
    }

    public enum Mbti {
        ISTJ, ISFJ, ESTP, ESFP, INFJ, INTJ, ENFP, ENTP, ISTP, ISFP, ESTJ, ESFJ, INFP, INTP, ENFJ, ENTJ
    }

    public enum Separation {
        S,B
    }
}
