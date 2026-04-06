package com.vanphongso.tam.Sevice;

import com.vanphongso.tam.entity.Room;
import com.vanphongso.tam.repository.RoomRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService {

    private final RoomRepository roomRepository;

    public RoomService(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    // ✅ Lấy tất cả phòng
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    // ✅ Lấy theo ID
    public Room getById(Long id) {
        return roomRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Room not found"));
    }

    // ✅ Thêm phòng
    public Room create(Room room) {
        return roomRepository.save(room);
    }

    // ✅ Cập nhật phòng
    public Room update(Long id, Room room) {
        Room existing = roomRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Room not found"));

        existing.setName(room.getName());
        existing.setCapacity(room.getCapacity());
        existing.setLocation(room.getLocation());
        existing.setStatus(room.getStatus());

        return roomRepository.save(existing);
    }

    // ✅ Xoá phòng
    public void delete(Long id) {
        roomRepository.deleteById(id);
    }
}