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

    public enum HealthCondition {
        Healthy,
        Diabetes,
        Hypertension,
        Obesity,
        CardiacIssues;
        @Override
        public String toString() {
            if (this == CardiacIssues) {
                return "Cardiac Issues";
            }
            return super.toString();
        }
    }

    public enum SmokingStatus{
        NonSmoker, Smoker;
        @Override
        public String toString(){
            if(this == NonSmoker){
                return "Non-Smoker";
            }
            return super.toString();
        }
    }

    public enum AlcoholConsumption{
        None, Low, Moderate, High
    }

    public enum PhysicalActivity{
        Low, Moderate, High
    }

    public enum DietType{
        Balanced, HighCard, HighProtein, Vegan;
        @Override
        public String toString(){
            if(this == HighCard){
                return "High Card";
            }else if(this == HighProtein){
                return "High Protein";
            }
            return super.toString();
        }
    }
}
