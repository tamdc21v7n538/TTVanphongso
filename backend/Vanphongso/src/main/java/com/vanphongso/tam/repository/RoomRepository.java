package com.vanphongso.tam.repository;

import com.vanphongso.tam.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {
}