package com.vanphongso.tam.repository;

import com.vanphongso.tam.entity.RoomBooking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<RoomBooking, Long> {
}