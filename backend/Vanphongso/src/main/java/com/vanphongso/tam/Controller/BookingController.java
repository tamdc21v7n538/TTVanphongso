package com.vanphongso.tam.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "room_booking")
public class RoomBooking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String date;
    private boolean approved;

    // Constructor rỗng
    public RoomBooking() {
    }

    // Constructor đầy đủ
    public RoomBooking(Long id, String title, String date, boolean approved) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.approved = approved;
    }

    // ===== Getter & Setter =====

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public boolean isApproved() {
        return approved;
    }

    public void setApproved(boolean approved) {
        this.approved = approved;
    }
}